// app/api/kyc/[id]/route.js
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

// Verify admin token
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

// Alternative: Check KYC admin access
function verifyKYCAccess(request) {
  const kycAuth = request.headers.get('x-kyc-auth');
  return kycAuth === 'authorized';
}

// GET - Fetch single KYC form by ID
export async function GET(request, { params }) {
  try {
    // Verify authorization
    if (!verifyAdminToken(request) && !verifyKYCAccess(request)) {
      return NextResponse.json({ error: 'Unauthorized access to KYC data' }, { status: 401 });
    }

    await connectToDatabase();
    
    const { id } = params;
    
    // Validate MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid KYC form ID format'
      }, { status: 400 });
    }
    
    // Get query parameters for data inclusion options
    const { searchParams } = new URL(request.url);
    const includeMetadata = searchParams.get('includeMetadata') === 'true';
    const includeFlags = searchParams.get('includeFlags') === 'true';
    const includeAttachments = searchParams.get('includeAttachments') === 'true';
    
    // Build select query based on options
    let selectFields = '-submissionMetadata.ipAddress -submissionMetadata.userAgent';
    
    if (!includeMetadata) {
      selectFields += ' -submissionMetadata';
    }
    if (!includeFlags) {
      selectFields += ' -complianceFlags';
    }
    if (!includeAttachments) {
      selectFields += ' -attachments';
    }
    
    const kycForm = await KYCForm.findById(id)
      .select(selectFields)
      .populate('reviewedBy', 'name email') // Populate reviewer details if User model exists
      .lean();
    
    if (!kycForm) {
      return NextResponse.json({
        success: false,
        error: 'KYC form not found'
      }, { status: 404 });
    }
    
    // Add computed fields
    const enrichedForm = {
      ...kycForm,
      isExpiring: false,
      daysUntilExpiry: null
    };
    
    // Check if trade license is expiring soon
    if (kycForm.tradeLicenseExpiry) {
      const expiryDate = new Date(kycForm.tradeLicenseExpiry);
      const today = new Date();
      const threeMonthsFromNow = new Date();
      threeMonthsFromNow.setMonth(today.getMonth() + 3);
      
      enrichedForm.isExpiring = expiryDate <= threeMonthsFromNow;
      enrichedForm.daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
    }
    
    return NextResponse.json({
      success: true,
      data: enrichedForm
    });
    
  } catch (error) {
    console.error('KYC retrieval error:', error);
    return NextResponse.json({
      success: false,
      error: 'An error occurred while retrieving the KYC form',
      message: error.message
    }, { status: 500 });
  }
}

// PUT - Update KYC form (for admin reviews)
export async function PUT(request, { params }) {
  try {
    if (!verifyAdminToken(request) && !verifyKYCAccess(request)) {
      return NextResponse.json({ error: 'Unauthorized access to KYC data' }, { status: 401 });
    }

    await connectToDatabase();
    
    const { id } = params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid KYC form ID format'
      }, { status: 400 });
    }
    
    const updateData = await request.json();
    
    // Only allow certain fields to be updated
    const allowedUpdates = {
      reviewStatus: updateData.reviewStatus,
      reviewNotes: updateData.reviewNotes,
      reviewedAt: new Date(),
      // Add reviewedBy if you have user authentication
      // reviewedBy: req.user?.id
    };
    
    // Remove undefined values
    Object.keys(allowedUpdates).forEach(key => 
      allowedUpdates[key] === undefined && delete allowedUpdates[key]
    );
    
    const updatedForm = await KYCForm.findByIdAndUpdate(
      id,
      allowedUpdates,
      { new: true, runValidators: true }
    ).select('-submissionMetadata.ipAddress -submissionMetadata.userAgent');
    
    if (!updatedForm) {
      return NextResponse.json({
        success: false,
        error: 'KYC form not found'
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'KYC form updated successfully',
      data: updatedForm
    });
    
  } catch (error) {
    console.error('KYC update error:', error);
    return NextResponse.json({
      success: false,
      error: 'An error occurred while updating the KYC form',
      message: error.message
    }, { status: 500 });
  }
}

// DELETE - Delete KYC form (admin only)
export async function DELETE(request, { params }) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
    }

    await connectToDatabase();
    
    const { id } = params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid KYC form ID format'
      }, { status: 400 });
    }
    
    const deletedForm = await KYCForm.findByIdAndDelete(id);
    
    if (!deletedForm) {
      return NextResponse.json({
        success: false,
        error: 'KYC form not found'
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'KYC form deleted successfully',
      data: { id: deletedForm._id, legalName: deletedForm.legalName }
    });
    
  } catch (error) {
    console.error('KYC deletion error:', error);
    return NextResponse.json({
      success: false,
      error: 'An error occurred while deleting the KYC form',
      message: error.message
    }, { status: 500 });
  }
}