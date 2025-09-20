// app/api/kyc/submit/route.js
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
    
    // Parse and sanitize input
    const rawData = await request.json();
    const sanitizedData = sanitizeInput(rawData);
    
    // Validate form data
    const validationErrors = validateFormData(sanitizedData);
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
    
    // Create KYC form document
    const kycFormData = {
      ...sanitizedData,
      submissionMetadata: {
        submittedAt: new Date(),
        ipAddress: clientIP,
        userAgent: userAgent.substring(0, 200), // Limit length
        formVersion: '1.0'
      },
      reviewStatus: 'pending',
      consentGiven: true,
      consentTimestamp: new Date()
    };
    
    const kycForm = new KYCForm(kycFormData);
    await kycForm.save();
    
    // Log successful submission
    logKYCSubmission(clientIP, true, null, kycForm._id);
    
    // Send notification email (implement as needed)
    // await sendKYCNotificationEmail(kycForm);
    
    // Return success response with limited data
    return NextResponse.json({
      success: true,
      message: 'KYC form submitted successfully',
      data: {
        id: kycForm._id,
        submittedAt: kycForm.submissionMetadata.submittedAt,
        reviewStatus: kycForm.reviewStatus,
        legalName: kycForm.legalName,
        tradeLicenseNumber: kycForm.tradeLicenseNumber
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

// GET method to retrieve submission status (optional)
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
      'legalName tradeLicenseNumber reviewStatus submissionMetadata.submittedAt reviewedAt'
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
        reviewedAt: kycForm.reviewedAt
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

// OPTIONS handler for CORS
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}