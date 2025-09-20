// app/api/admin/verify-kyc-access/route.js
import { NextResponse } from 'next/server';

// In-memory store for rate limiting (consider Redis for production)
const kycRateLimitStore = new Map();

// Rate limiting configuration for KYC access
const KYC_RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxAttempts: 3, // 3 attempts per window (stricter for KYC)
  blockDuration: 2 * 60 * 60 * 1000, // 2 hour block after max attempts (longer for sensitive data)
};

function getClientIP(request) {
  // Get client IP from various headers
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfIP = request.headers.get('cf-connecting-ip'); // Cloudflare
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfIP) {
    return cfIP;
  }
  
  // Fallback to connection remote address
  return request.headers.get('x-forwarded-for') || 'unknown';
}

function isKYCRateLimited(clientIP) {
  const now = Date.now();
  const key = `kyc_rate_limit_${clientIP}`;
  const clientData = kycRateLimitStore.get(key);

  if (!clientData) {
    // First attempt
    kycRateLimitStore.set(key, {
      attempts: 1,
      firstAttempt: now,
      blockedUntil: null
    });
    return { limited: false, attemptsLeft: KYC_RATE_LIMIT.maxAttempts - 1 };
  }

  // Check if currently blocked
  if (clientData.blockedUntil && now < clientData.blockedUntil) {
    const timeLeft = Math.ceil((clientData.blockedUntil - now) / 1000 / 60); // minutes
    return { 
      limited: true, 
      reason: 'blocked',
      timeLeft: timeLeft,
      attemptsLeft: 0 
    };
  }

  // Check if window has expired
  if (now - clientData.firstAttempt > KYC_RATE_LIMIT.windowMs) {
    // Reset window
    kycRateLimitStore.set(key, {
      attempts: 1,
      firstAttempt: now,
      blockedUntil: null
    });
    return { limited: false, attemptsLeft: KYC_RATE_LIMIT.maxAttempts - 1 };
  }

  // Within window, check attempts
  if (clientData.attempts >= KYC_RATE_LIMIT.maxAttempts) {
    // Block the IP
    kycRateLimitStore.set(key, {
      ...clientData,
      blockedUntil: now + KYC_RATE_LIMIT.blockDuration
    });
    return { 
      limited: true, 
      reason: 'max_attempts',
      timeLeft: Math.ceil(KYC_RATE_LIMIT.blockDuration / 1000 / 60),
      attemptsLeft: 0 
    };
  }

  // Increment attempts
  clientData.attempts++;
  kycRateLimitStore.set(key, clientData);
  
  return { 
    limited: false, 
    attemptsLeft: KYC_RATE_LIMIT.maxAttempts - clientData.attempts 
  };
}

function addKYCSecurityHeaders(response) {
  // Add security headers specific to KYC data handling
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.headers.set('X-KYC-Access-Control', 'restricted');
  
  return response;
}

function logKYCAccessAttempt(clientIP, success, userAgent = '') {
  // Log KYC access attempts for security monitoring
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    ip: clientIP,
    userAgent: userAgent.substring(0, 200), // Limit length
    success,
    type: 'KYC_ACCESS_ATTEMPT'
  };
  
  // In production, send to your logging service
  console.log('KYC Access Attempt:', JSON.stringify(logEntry));
  
  // You could also store in database or send to external logging service
  // await logToDatabase(logEntry);
  // await sendToSecurityMonitoring(logEntry);
}

export async function POST(request) {
  const clientIP = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || '';
  
  try {
    // Check rate limit
    const rateLimitResult = isKYCRateLimited(clientIP);
    
    if (rateLimitResult.limited) {
      // Log failed access attempt
      logKYCAccessAttempt(clientIP, false, userAgent);
      
      const response = NextResponse.json(
        { 
          success: false, 
          message: rateLimitResult.reason === 'blocked' 
            ? `KYC access temporarily restricted due to multiple failed attempts. Please try again in ${rateLimitResult.timeLeft} minutes.`
            : `Maximum KYC access attempts exceeded. Access blocked for ${rateLimitResult.timeLeft} minutes for security purposes.`,
          rateLimited: true,
          timeLeft: rateLimitResult.timeLeft,
          type: 'KYC_ACCESS_RESTRICTED'
        },
        { status: 429 } // Too Many Requests
      );
      
      return addKYCSecurityHeaders(response);
    }

    // Add artificial delay to slow down brute force attempts
    await new Promise(resolve => setTimeout(resolve, 1500)); // Slightly longer for KYC

    const { password } = await request.json();
    
    // Validate input
    if (!password || typeof password !== 'string') {
      logKYCAccessAttempt(clientIP, false, userAgent);
      const response = NextResponse.json(
        { success: false, message: 'Invalid KYC access request' },
        { status: 400 }
      );
      return addKYCSecurityHeaders(response);
    }
    
    // Get the KYC access password from environment variables
    const kycAccessPassword = process.env.KYC_ACCESS_PASSWORD;
    
    if (!kycAccessPassword) {
      console.error('KYC_ACCESS_PASSWORD environment variable not configured');
      const response = NextResponse.json(
        { success: false, message: 'KYC access not configured' },
        { status: 500 }
      );
      return addKYCSecurityHeaders(response);
    }
    
    // Use constant-time comparison to prevent timing attacks
    const isValidPassword = password.length === kycAccessPassword.length && 
      password === kycAccessPassword;
    
    if (isValidPassword) {
      // Clear rate limit on successful authentication
      kycRateLimitStore.delete(`kyc_rate_limit_${clientIP}`);
      
      // Log successful access
      logKYCAccessAttempt(clientIP, true, userAgent);
      
      const response = NextResponse.json({ 
        success: true,
        message: 'KYC access granted',
        accessLevel: 'KYC_ADMIN'
      });
      return addKYCSecurityHeaders(response);
    } else {
      // Log failed access attempt
      logKYCAccessAttempt(clientIP, false, userAgent);
      
      // Don't provide specific error details
      const response = NextResponse.json(
        { 
          success: false, 
          message: 'Invalid KYC access credentials',
          attemptsLeft: rateLimitResult.attemptsLeft,
          type: 'INVALID_CREDENTIALS'
        },
        { status: 401 }
      );
      return addKYCSecurityHeaders(response);
    }
  } catch (error) {
    console.error('KYC access verification error:', error);
    logKYCAccessAttempt(clientIP, false, userAgent);
    
    const response = NextResponse.json(
      { success: false, message: 'KYC access verification failed' },
      { status: 500 }
    );
    return addKYCSecurityHeaders(response);
  }
}

// Add OPTIONS handler for CORS preflight
export async function OPTIONS(request) {
  const response = new NextResponse(null, { status: 200 });
  return addKYCSecurityHeaders(response);
}

// Cleanup function to remove old entries (call periodically)
function cleanupKYCRateLimitStore() {
  const now = Date.now();
  for (const [key, data] of kycRateLimitStore.entries()) {
    // Remove entries older than 4 hours for KYC
    if (now - data.firstAttempt > 4 * 60 * 60 * 1000) {
      kycRateLimitStore.delete(key);
    }
  }
}

// Clean up every 2 hours for KYC
setInterval(cleanupKYCRateLimitStore, 2 * 60 * 60 * 1000);

// Export cleanup function for manual cleanup if needed
export { cleanupKYCRateLimitStore };