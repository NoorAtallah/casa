// app/api/kyc/submit/route.js
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

function getClientIP(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfIP = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfIP) {
    return cfIP;
  }
  
  return 'unknown';
}

function sanitizeInput(data) {
  // Remove any potentially dangerous characters
  const sanitized = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = value.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map(item => 
        typeof item === 'string' ? item.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') : item
      );
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
}

function validateFormData(data) {
  const errors = [];
  
  // Minimal validation - only check if basic data exists
  if (!data.legalName) {
    errors.push('Legal name is required');
  }
  
  if (!data.tradeLicenseNumber) {
    errors.push('Trade license number is required');
  }
  
  if (!data.emailAddress) {
    errors.push('Email address is required');
  }
  
  return errors;
}

function validateFile(file) {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
  const maxSize = 5 * 1024 * 1024; // 5MB
  
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Invalid file type. Only JPG, PNG, and PDF are allowed.' };
  }
  
  if (file.size > maxSize) {
    return { valid: false, error: 'File size exceeds 5MB limit.' };
  }
  
  return { valid: true };
}

async function uploadToCloudinary(file, formId, documentType) {
  try {
    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString('base64');
    const dataURI = `data:${file.type};base64,${base64}`;
    
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: `kyc/${formId}`,
      resource_type: 'auto',
      public_id: `${documentType}_${Date.now()}`,
      tags: ['kyc', documentType, formId],
      context: {
        documentType: documentType,
        originalName: file.name,
        formId: formId
      }
    });
    
    // Return file info
    return {
      filename: result.public_id,
      originalName: file.name,
      mimeType: file.type,
      size: file.size,
      url: result.secure_url,
      cloudinaryId: result.public_id,
      uploadedAt: new Date()
    };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error(`Failed to upload ${documentType}: ${error.message}`);
  }
}

function logKYCSubmission(clientIP, success, error = null, formId = null) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    ip: clientIP,
    success,
    type: 'KYC_FORM_SUBMISSION',
    formId,
    error: error ? error.message : null
  };
  
  console.log('KYC Submission:', JSON.stringify(logEntry));
}

export async function POST(request) {
  const clientIP = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || '';
  
  try {
    // Connect to database
    await connectToDatabase();
    
    // Parse FormData
    const formData = await request.formData();
    
    // Extract form fields
    const rawData = {
      legalName: formData.get('legalName'),
      legalStructure: JSON.parse(formData.get('legalStructure') || '[]'),
      natureOfBusiness: formData.get('natureOfBusiness'),
      placeOfEstablishment: formData.get('placeOfEstablishment'),
      dateOfEstablishment: formData.get('dateOfEstablishment'),
      annualTurnover: JSON.parse(formData.get('annualTurnover') || '[]'),
      tradeLicenseNumber: formData.get('tradeLicenseNumber'),
      tradeLicenseExpiry: formData.get('tradeLicenseExpiry'),
      taxRegistrationNumber: formData.get('taxRegistrationNumber'),
      businessAddress: formData.get('businessAddress'),
      emirates: JSON.parse(formData.get('emirates') || '[]'),
      country: formData.get('country'),
      emailAddress: formData.get('emailAddress'),
      businessPhoneNumber: formData.get('businessPhoneNumber'),
      realBeneficiary: formData.get('realBeneficiary'),
      isResident: formData.get('isResident') === 'true'
    };
    
    // Extract files
    const passportFile = formData.get('passportInfoPage');
    const tradeLicenseFile = formData.get('tradeLicenseDocument');
    const emiratesIdFile = formData.get('emiratesId');
    
    // Sanitize text data
    const sanitizedData = sanitizeInput(rawData);
    
    // Validate form data
    const validationErrors = validateFormData(sanitizedData);
    
    // Validate required file (passport)
    if (!passportFile || passportFile.size === 0) {
      validationErrors.push('Passport information page is required');
    } else {
      const fileValidation = validateFile(passportFile);
      if (!fileValidation.valid) {
        validationErrors.push(`Passport file: ${fileValidation.error}`);
      }
    }
    
    // Validate optional files if provided
    if (tradeLicenseFile && tradeLicenseFile.size > 0) {
      const fileValidation = validateFile(tradeLicenseFile);
      if (!fileValidation.valid) {
        validationErrors.push(`Trade license file: ${fileValidation.error}`);
      }
    }
    
    if (emiratesIdFile && emiratesIdFile.size > 0) {
      const fileValidation = validateFile(emiratesIdFile);
      if (!fileValidation.valid) {
        validationErrors.push(`Emirates ID file: ${fileValidation.error}`);
      }
    }
    
    if (validationErrors.length > 0) {
      logKYCSubmission(clientIP, false, new Error(`Validation failed: ${validationErrors.join(', ')}`));
      return NextResponse.json({
        success: false,
        message: 'Form validation failed',
        errors: validationErrors
      }, { status: 400 });
    }
    
    // Check for duplicate trade license number
    const existingForm = await KYCForm.findOne({ 
      tradeLicenseNumber: sanitizedData.tradeLicenseNumber 
    });
    
    if (existingForm) {
      logKYCSubmission(clientIP, false, new Error('Duplicate trade license number'));
      return NextResponse.json({
        success: false,
        message: 'A KYC form with this trade license number already exists',
        errorCode: 'DUPLICATE_LICENSE'
      }, { status: 409 });
    }
    
    // Create temporary KYC form to get ID for file storage
    const tempKycForm = new KYCForm({
      ...sanitizedData,
      submissionMetadata: {
        submittedAt: new Date(),
        ipAddress: clientIP,
        userAgent: userAgent.substring(0, 200),
        formVersion: '1.0'
      },
      reviewStatus: 'pending',
      consentGiven: true,
      consentTimestamp: new Date()
    });
    
    // Generate form ID
    const formId = tempKycForm._id.toString();
    
    // Upload files to Cloudinary
    const uploadedFiles = [];
    
    try {
      // Upload passport file (required)
      const passportInfo = await uploadToCloudinary(passportFile, formId, 'passport');
      tempKycForm.passportInfoPage = passportInfo;
      uploadedFiles.push(passportInfo.cloudinaryId);
      
      // Upload trade license if provided
      if (tradeLicenseFile && tradeLicenseFile.size > 0) {
        const tradeLicenseInfo = await uploadToCloudinary(tradeLicenseFile, formId, 'trade_license');
        tempKycForm.tradeLicenseDocument = tradeLicenseInfo;
        uploadedFiles.push(tradeLicenseInfo.cloudinaryId);
      }
      
      // Upload Emirates ID if provided and user is resident
      if (emiratesIdFile && emiratesIdFile.size > 0 && sanitizedData.isResident) {
        const emiratesIdInfo = await uploadToCloudinary(emiratesIdFile, formId, 'emirates_id');
        tempKycForm.emiratesId = emiratesIdInfo;
        tempKycForm.emiratesId.isResident = true;
        uploadedFiles.push(emiratesIdInfo.cloudinaryId);
      }
      
    } catch (fileError) {
      console.error('File upload error:', fileError);
      
      // Cleanup: Delete uploaded files from Cloudinary if submission fails
      if (uploadedFiles.length > 0) {
        try {
          await cloudinary.api.delete_resources(uploadedFiles);
        } catch (cleanupError) {
          console.error('Cleanup error:', cleanupError);
        }
      }
      
      return NextResponse.json({
        success: false,
        message: 'Failed to upload documents. Please try again.',
        error: fileError.message
      }, { status: 500 });
    }
    
    // Save the complete form to database
    try {
      await tempKycForm.save();
    } catch (saveError) {
      // If database save fails, cleanup uploaded files
      if (uploadedFiles.length > 0) {
        try {
          await cloudinary.api.delete_resources(uploadedFiles);
        } catch (cleanupError) {
          console.error('Cleanup error:', cleanupError);
        }
      }
      throw saveError;
    }
    
    // Log successful submission
    logKYCSubmission(clientIP, true, null, tempKycForm._id);
    
    // Send notification email (implement as needed)
    // await sendKYCNotificationEmail(tempKycForm);
    
    // Return success response with limited data
    return NextResponse.json({
      success: true,
      message: 'KYC form submitted successfully',
      data: {
        id: tempKycForm._id,
        submittedAt: tempKycForm.submissionMetadata.submittedAt,
        reviewStatus: tempKycForm.reviewStatus,
        legalName: tempKycForm.legalName,
        tradeLicenseNumber: tempKycForm.tradeLicenseNumber,
        documentsUploaded: {
          passport: !!tempKycForm.passportInfoPage,
          tradeLicense: !!tempKycForm.tradeLicenseDocument,
          emiratesId: !!tempKycForm.emiratesId
        }
      }
    }, { status: 201 });
    
  } catch (error) {
    console.error('KYC submission error:', error);
    logKYCSubmission(clientIP, false, error);
    
    // Handle specific MongoDB errors
    if (error.name === 'ValidationError') {
      const mongoErrors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json({
        success: false,
        message: 'Form validation failed',
        errors: mongoErrors
      }, { status: 400 });
    }
    
    if (error.code === 11000) {
      // Duplicate key error
      const field = Object.keys(error.keyPattern)[0];
      return NextResponse.json({
        success: false,
        message: `A record with this ${field} already exists`,
        errorCode: 'DUPLICATE_ENTRY'
      }, { status: 409 });
    }
    
    // Generic server error
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your submission. Please try again.',
      errorCode: 'SERVER_ERROR'
    }, { status: 500 });
  }
}

// GET method to retrieve submission status
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({
        success: false,
        message: 'Submission ID is required'
      }, { status: 400 });
    }
    
    await connectToDatabase();
    
    const kycForm = await KYCForm.findById(id).select(
      'legalName tradeLicenseNumber reviewStatus submissionMetadata.submittedAt reviewedAt passportInfoPage tradeLicenseDocument emiratesId'
    );
    
    if (!kycForm) {
      return NextResponse.json({
        success: false,
        message: 'Submission not found'
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      data: {
        id: kycForm._id,
        legalName: kycForm.legalName,
        tradeLicenseNumber: kycForm.tradeLicenseNumber,
        status: kycForm.reviewStatus,
        submittedAt: kycForm.submissionMetadata.submittedAt,
        reviewedAt: kycForm.reviewedAt,
        documents: {
          passport: kycForm.passportInfoPage ? {
            uploaded: true,
            filename: kycForm.passportInfoPage.originalName,
            url: kycForm.passportInfoPage.url,
            uploadedAt: kycForm.passportInfoPage.uploadedAt
          } : { uploaded: false },
          tradeLicense: kycForm.tradeLicenseDocument ? {
            uploaded: true,
            filename: kycForm.tradeLicenseDocument.originalName,
            url: kycForm.tradeLicenseDocument.url,
            uploadedAt: kycForm.tradeLicenseDocument.uploadedAt
          } : { uploaded: false },
          emiratesId: kycForm.emiratesId ? {
            uploaded: true,
            filename: kycForm.emiratesId.originalName,
            url: kycForm.emiratesId.url,
            uploadedAt: kycForm.emiratesId.uploadedAt,
            isResident: kycForm.emiratesId.isResident
          } : { uploaded: false }
        }
      }
    });
    
  } catch (error) {
    console.error('KYC retrieval error:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred while retrieving the submission'
    }, { status: 500 });
  }
}

// DELETE method to remove a submission and its files (admin only)
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({
        success: false,
        message: 'Submission ID is required'
      }, { status: 400 });
    }
    
    await connectToDatabase();
    
    const kycForm = await KYCForm.findById(id);
    
    if (!kycForm) {
      return NextResponse.json({
        success: false,
        message: 'Submission not found'
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
      }
    }
    
    // Delete from database
    await KYCForm.findByIdAndDelete(id);
    
    return NextResponse.json({
      success: true,
      message: 'Submission deleted successfully'
    });
    
  } catch (error) {
    console.error('KYC deletion error:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred while deleting the submission'
    }, { status: 500 });
  }
}

// OPTIONS handler for CORS
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}