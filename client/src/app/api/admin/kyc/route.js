// app/api/kyc/route.js
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import KYCForm from '@/models/kyc';

// Database connection helper
async function connectToDatabase() {
  if (mongoose.connections[0].readyState) {
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Database connection failed');
  }
}

// Verify admin token (same as your articles API)
function verifyAdminToken(request) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) return false;
    
    const jwt = require('jsonwebtoken');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.role === 'admin';
  } catch (error) {
    return false;
  }
}

// Alternative: Check KYC admin access via session (if you prefer this method)
function verifyKYCAccess(request) {
  const kycAuth = request.headers.get('x-kyc-auth');
  return kycAuth === 'authorized'; // You can set this header after KYC gate authentication
}

// GET - Fetch all KYC forms (admin only)
export async function GET(request) {
  try {
    // Use either JWT verification or KYC access verification
    if (!verifyAdminToken(request) && !verifyKYCAccess(request)) {
      return NextResponse.json({ error: 'Unauthorized access to KYC data' }, { status: 401 });
    }

    await connectToDatabase();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const status = searchParams.get('status'); // pending, approved, rejected, etc.
    const emirate = searchParams.get('emirate');
    const search = searchParams.get('search');
    const sortBy = searchParams.get('sortBy') || 'submittedAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';
    
    let query = {};
    
    // Filter by review status
    if (status) {
      query.reviewStatus = status;
    }
    
    // Filter by emirate
    if (emirate) {
      query.emirates = { $in: [emirate] };
    }
    
    // Search functionality
    if (search) {
      query.$or = [
        { legalName: { $regex: search, $options: 'i' } },
        { tradeLicenseNumber: { $regex: search, $options: 'i' } },
        { emailAddress: { $regex: search, $options: 'i' } },
        { businessPhoneNumber: { $regex: search, $options: 'i' } }
      ];
    }
    
    const skip = (page - 1) * limit;
    
    // Build sort object
    const sort = {};
    if (sortBy === 'submittedAt') {
      sort['submissionMetadata.submittedAt'] = sortOrder === 'desc' ? -1 : 1;
    } else {
      sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
    }
    
    const kycForms = await KYCForm.find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .select('-submissionMetadata.ipAddress -submissionMetadata.userAgent') // Hide sensitive data
      .lean();
    
    // Enrich data with document information
    const enrichedForms = kycForms.map(form => ({
      ...form,
      documents: {
        passport: form.passportInfoPage ? {
          uploaded: true,
          filename: form.passportInfoPage.originalName,
          url: form.passportInfoPage.url,
          mimeType: form.passportInfoPage.mimeType,
          size: form.passportInfoPage.size,
          uploadedAt: form.passportInfoPage.uploadedAt
        } : {
          uploaded: false
        },
        tradeLicense: form.tradeLicenseDocument ? {
          uploaded: true,
          filename: form.tradeLicenseDocument.originalName,
          url: form.tradeLicenseDocument.url,
          mimeType: form.tradeLicenseDocument.mimeType,
          size: form.tradeLicenseDocument.size,
          uploadedAt: form.tradeLicenseDocument.uploadedAt
        } : {
          uploaded: false
        },
        emiratesId: form.emiratesId ? {
          uploaded: true,
          filename: form.emiratesId.originalName,
          url: form.emiratesId.url,
          mimeType: form.emiratesId.mimeType,
          size: form.emiratesId.size,
          uploadedAt: form.emiratesId.uploadedAt,
          isResident: form.emiratesId.isResident || false
        } : {
          uploaded: false
        }
      },
      documentsSummary: {
        totalDocuments: [
          form.passportInfoPage,
          form.tradeLicenseDocument,
          form.emiratesId
        ].filter(Boolean).length,
        requiredUploaded: !!form.passportInfoPage,
        allOptionalUploaded: !!(form.tradeLicenseDocument && form.emiratesId)
      }
    }));
    
    const total = await KYCForm.countDocuments(query);
    
    // Get status counts for dashboard
    const statusCounts = await KYCForm.aggregate([
      {
        $group: {
          _id: '$reviewStatus',
          count: { $sum: 1 }
        }
      }
    ]);
    
    return NextResponse.json({
      success: true,
      data: {
        kycForms: enrichedForms,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total,
          limit
        },
        statusCounts: statusCounts.reduce((acc, item) => {
          acc[item._id] = item.count;
          return acc;
        }, {}),
        filters: {
          status,
          emirate,
          search,
          sortBy,
          sortOrder
        }
      }
    });
    
  } catch (error) {
    console.error('KYC retrieval error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'An error occurred while retrieving KYC forms',
      message: error.message 
    }, { status: 500 });
  }
}