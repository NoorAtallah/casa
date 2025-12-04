// app/api/kyc/[id]/route.js
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import KYCForm from '@/models/kyc';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
    
    // Add document information with full details
    enrichedForm.documents = {
      passport: kycForm.passportInfoPage ? {
        uploaded: true,
        filename: kycForm.passportInfoPage.originalName,
        storedFilename: kycForm.passportInfoPage.filename,
        url: kycForm.passportInfoPage.url,
        cloudinaryId: kycForm.passportInfoPage.cloudinaryId,
        mimeType: kycForm.passportInfoPage.mimeType,
        size: kycForm.passportInfoPage.size,
        sizeFormatted: formatFileSize(kycForm.passportInfoPage.size),
        uploadedAt: kycForm.passportInfoPage.uploadedAt,
        required: true
      } : {
        uploaded: false,
        required: true,
        error: 'Required document not uploaded'
      },
      
      tradeLicense: kycForm.tradeLicenseDocument ? {
        uploaded: true,
        filename: kycForm.tradeLicenseDocument.originalName,
        storedFilename: kycForm.tradeLicenseDocument.filename,
        url: kycForm.tradeLicenseDocument.url,
        cloudinaryId: kycForm.tradeLicenseDocument.cloudinaryId,
        mimeType: kycForm.tradeLicenseDocument.mimeType,
        size: kycForm.tradeLicenseDocument.size,
        sizeFormatted: formatFileSize(kycForm.tradeLicenseDocument.size),
        uploadedAt: kycForm.tradeLicenseDocument.uploadedAt,
        required: false
      } : {
        uploaded: false,
        required: false
      },
      
      emiratesId: kycForm.emiratesId ? {
        uploaded: true,
        filename: kycForm.emiratesId.originalName,
        storedFilename: kycForm.emiratesId.filename,
        url: kycForm.emiratesId.url,
        cloudinaryId: kycForm.emiratesId.cloudinaryId,
        mimeType: kycForm.emiratesId.mimeType,
        size: kycForm.emiratesId.size,
        sizeFormatted: formatFileSize(kycForm.emiratesId.size),
        uploadedAt: kycForm.emiratesId.uploadedAt,
        isResident: kycForm.emiratesId.isResident || false,
        required: false
      } : {
        uploaded: false,
        required: false
      }
    };
    
    // Add documents summary
    enrichedForm.documentsSummary = {
      totalDocuments: [
        kycForm.passportInfoPage,
        kycForm.tradeLicenseDocument,
        kycForm.emiratesId
      ].filter(Boolean).length,
      requiredDocuments: 1,
      requiredUploaded: !!kycForm.passportInfoPage,
      optionalDocuments: 2,
      optionalUploaded: [kycForm.tradeLicenseDocument, kycForm.emiratesId].filter(Boolean).length,
      completionPercentage: calculateDocumentCompletion(kycForm),
      totalSize: calculateTotalSize(kycForm),
      totalSizeFormatted: formatFileSize(calculateTotalSize(kycForm))
    };
    
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

// Helper function to format file size
function formatFileSize(bytes) {
  if (!bytes) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

// Helper function to calculate document completion percentage
function calculateDocumentCompletion(kycForm) {
  const requiredDocs = 1; // passport
  const optionalDocs = 2; // trade license + emirates id
  const totalPossibleDocs = requiredDocs + optionalDocs;
  
  let uploadedCount = 0;
  if (kycForm.passportInfoPage) uploadedCount++;
  if (kycForm.tradeLicenseDocument) uploadedCount++;
  if (kycForm.emiratesId) uploadedCount++;
  
  return Math.round((uploadedCount / totalPossibleDocs) * 100);
}

// Helper function to calculate total file size
function calculateTotalSize(kycForm) {
  let totalSize = 0;
  
  if (kycForm.passportInfoPage?.size) {
    totalSize += kycForm.passportInfoPage.size;
  }
  if (kycForm.tradeLicenseDocument?.size) {
    totalSize += kycForm.tradeLicenseDocument.size;
  }
  if (kycForm.emiratesId?.size) {
    totalSize += kycForm.emiratesId.size;
  }
  
  return totalSize;
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
    
    const kycForm = await KYCForm.findById(id);
    
    if (!kycForm) {
      return NextResponse.json({
        success: false,
        error: 'KYC form not found'
      }, { status: 404 });
    }
    
    // Delete files from Cloudinary
    const filesToDelete = [];
    if (kycForm.passportInfoPage?.cloudinaryId) {
      filesToDelete.push(kycForm.passportInfoPage.cloudinaryId);
    }
    if (kycForm.tradeLicenseDocument?.cloudinaryId) {
      filesToDelete.push(kycForm.tradeLicenseDocument.cloudinaryId);
    }
    if (kycForm.emiratesId?.cloudinaryId) {
      filesToDelete.push(kycForm.emiratesId.cloudinaryId);
    }
    
    if (filesToDelete.length > 0) {
      try {
        await cloudinary.api.delete_resources(filesToDelete);
        // Also delete the folder
        await cloudinary.api.delete_folder(`kyc/${id}`);
      } catch (cloudinaryError) {
        console.error('Cloudinary deletion error:', cloudinaryError);
        // Continue with database deletion even if Cloudinary fails
      }
    }
    
    // Delete from database
    await KYCForm.findByIdAndDelete(id);
    
    return NextResponse.json({
      success: true,
      message: 'KYC form and associated documents deleted successfully',
      data: { 
        id: kycForm._id, 
        legalName: kycForm.legalName,
        deletedDocuments: filesToDelete.length
      }
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