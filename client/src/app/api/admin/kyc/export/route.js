// app/api/kyc/export/route.js
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

// Check KYC admin access
function verifyKYCAccess(request) {
  const kycAuth = request.headers.get('x-kyc-auth');
  return kycAuth === 'authorized';
}

// Convert data to CSV format
function convertToCSV(data) {
  if (!data || data.length === 0) {
    return 'No data available for export';
  }

  // Define CSV headers
  const headers = [
    'ID',
    'Legal Name',
    'Legal Structure',
    'Nature of Business',
    'Place of Establishment',
    'Date of Establishment',
    'Annual Turnover',
    'Trade License Number',
    'Trade License Expiry',
    'Tax Registration Number',
    'Business Address',
    'Emirates',
    'Country',
    'Email Address',
    'Business Phone Number',
    'Real Beneficiary',
    'Review Status',
    'Submitted At',
    'Reviewed At',
    'Review Notes'
  ];

  // Convert data to CSV rows
  const csvRows = data.map(kyc => [
    kyc._id,
    `"${kyc.legalName || ''}"`,
    `"${kyc.legalStructure?.join('; ') || ''}"`,
    `"${(kyc.natureOfBusiness || '').replace(/"/g, '""')}"`,
    `"${kyc.placeOfEstablishment || ''}"`,
    kyc.dateOfEstablishment ? new Date(kyc.dateOfEstablishment).toISOString().split('T')[0] : '',
    `"${kyc.annualTurnover?.join('; ') || ''}"`,
    `"${kyc.tradeLicenseNumber || ''}"`,
    kyc.tradeLicenseExpiry ? new Date(kyc.tradeLicenseExpiry).toISOString().split('T')[0] : '',
    `"${kyc.taxRegistrationNumber || ''}"`,
    `"${(kyc.businessAddress || '').replace(/"/g, '""')}"`,
    `"${kyc.emirates?.join('; ') || ''}"`,
    `"${kyc.country || ''}"`,
    `"${kyc.emailAddress || ''}"`,
    `"${kyc.businessPhoneNumber || ''}"`,
    `"${kyc.realBeneficiary || ''}"`,
    `"${kyc.reviewStatus || ''}"`,
    kyc.submissionMetadata?.submittedAt ? new Date(kyc.submissionMetadata.submittedAt).toISOString() : '',
    kyc.reviewedAt ? new Date(kyc.reviewedAt).toISOString() : '',
    `"${(kyc.reviewNotes || '').replace(/"/g, '""')}"`
  ]);

  // Combine headers and rows
  return [headers.join(','), ...csvRows.map(row => row.join(','))].join('\n');
}

// Log export activity
function logExportActivity(clientIP, success, recordCount = 0, filters = {}) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    ip: clientIP,
    success,
    type: 'KYC_DATA_EXPORT',
    recordCount,
    filters,
    exportedBy: 'admin' // You can enhance this with actual user info
  };
  
  console.log('KYC Export:', JSON.stringify(logEntry));
}

// GET - Export KYC data
export async function GET(request) {
  const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
  
  try {
    // Verify authorization
    if (!verifyAdminToken(request) && !verifyKYCAccess(request)) {
      logExportActivity(clientIP, false, 0, {});
      return NextResponse.json({ error: 'Unauthorized access to KYC export' }, { status: 401 });
    }

    await connectToDatabase();
    
    const { searchParams } = new URL(request.url);
    
    // Parse query parameters for filtering
    const status = searchParams.get('status');
    const emirate = searchParams.get('emirate');
    const dateFrom = searchParams.get('dateFrom');
    const dateTo = searchParams.get('dateTo');
    const format = searchParams.get('format') || 'csv'; // csv or json
    const includeNotes = searchParams.get('includeNotes') === 'true';
    
    // Build query filters
    let query = {};
    
    if (status && status !== 'all') {
      query.reviewStatus = status;
    }
    
    if (emirate && emirate !== 'all') {
      query.emirates = { $in: [emirate] };
    }
    
    // Date range filter
    if (dateFrom || dateTo) {
      query['submissionMetadata.submittedAt'] = {};
      if (dateFrom) {
        query['submissionMetadata.submittedAt'].$gte = new Date(dateFrom);
      }
      if (dateTo) {
        const endDate = new Date(dateTo);
        endDate.setHours(23, 59, 59, 999); // End of day
        query['submissionMetadata.submittedAt'].$lte = endDate;
      }
    }
    
    // Fetch KYC data (excluding sensitive information)
    const kycData = await KYCForm.find(query)
      .select('-submissionMetadata.ipAddress -submissionMetadata.userAgent -complianceFlags')
      .sort({ 'submissionMetadata.submittedAt': -1 })
      .lean();
    
    const recordCount = kycData.length;
    const filters = { status, emirate, dateFrom, dateTo, includeNotes };
    
    // Log export activity
    logExportActivity(clientIP, true, recordCount, filters);
    
    if (format === 'json') {
      // Return JSON format
      const filename = `kyc_export_${new Date().toISOString().split('T')[0]}.json`;
      
      return new NextResponse(JSON.stringify(kycData, null, 2), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Content-Disposition': `attachment; filename="${filename}"`,
          'X-Record-Count': recordCount.toString()
        }
      });
    } else {
      // Return CSV format (default)
      const csvContent = convertToCSV(kycData);
      const filename = `kyc_export_${new Date().toISOString().split('T')[0]}.csv`;
      
      return new NextResponse(csvContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="${filename}"`,
          'X-Record-Count': recordCount.toString()
        }
      });
    }
    
  } catch (error) {
    console.error('KYC export error:', error);
    logExportActivity(clientIP, false, 0, {});
    
    return NextResponse.json({
      success: false,
      error: 'An error occurred while exporting KYC data',
      message: error.message
    }, { status: 500 });
  }
}

// POST - Export with advanced filters (for complex exports)
export async function POST(request) {
  const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
  
  try {
    if (!verifyAdminToken(request) && !verifyKYCAccess(request)) {
      return NextResponse.json({ error: 'Unauthorized access to KYC export' }, { status: 401 });
    }

    await connectToDatabase();
    
    const exportConfig = await request.json();
    const {
      filters = {},
      fields = [],
      format = 'csv',
      sortBy = 'submissionMetadata.submittedAt',
      sortOrder = 'desc'
    } = exportConfig;
    
    // Build MongoDB query from filters
    let query = {};
    
    if (filters.status && filters.status.length > 0) {
      query.reviewStatus = { $in: filters.status };
    }
    
    if (filters.emirates && filters.emirates.length > 0) {
      query.emirates = { $in: filters.emirates };
    }
    
    if (filters.dateRange) {
      query['submissionMetadata.submittedAt'] = {
        $gte: new Date(filters.dateRange.from),
        $lte: new Date(filters.dateRange.to)
      };
    }
    
    if (filters.search) {
      query.$or = [
        { legalName: { $regex: filters.search, $options: 'i' } },
        { tradeLicenseNumber: { $regex: filters.search, $options: 'i' } },
        { emailAddress: { $regex: filters.search, $options: 'i' } }
      ];
    }
    
    // Build field selection
    let selectFields = '-submissionMetadata.ipAddress -submissionMetadata.userAgent';
    if (fields.length > 0) {
      selectFields = fields.join(' ');
    }
    
    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
    
    const kycData = await KYCForm.find(query)
      .select(selectFields)
      .sort(sort)
      .lean();
    
    logExportActivity(clientIP, true, kycData.length, filters);
    
    if (format === 'json') {
      const filename = `kyc_advanced_export_${Date.now()}.json`;
      return new NextResponse(JSON.stringify(kycData, null, 2), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Content-Disposition': `attachment; filename="${filename}"`,
          'X-Record-Count': kycData.length.toString()
        }
      });
    } else {
      const csvContent = convertToCSV(kycData);
      const filename = `kyc_advanced_export_${Date.now()}.csv`;
      
      return new NextResponse(csvContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="${filename}"`,
          'X-Record-Count': kycData.length.toString()
        }
      });
    }
    
  } catch (error) {
    console.error('Advanced KYC export error:', error);
    logExportActivity(clientIP, false, 0, {});
    
    return NextResponse.json({
      success: false,
      error: 'An error occurred during advanced export',
      message: error.message
    }, { status: 500 });
  }
}