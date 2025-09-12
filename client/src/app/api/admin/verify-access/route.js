// app/api/admin/verify-access/route.js
import { NextResponse } from 'next/server';

// In-memory store for rate limiting (consider Redis for production)
const rateLimitStore = new Map();

// Rate limiting configuration
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxAttempts: 5, // 5 attempts per window
  blockDuration: 60 * 60 * 1000, // 1 hour block after max attempts
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

function isRateLimited(clientIP) {
  const now = Date.now();
  const key = `rate_limit_${clientIP}`;
  const clientData = rateLimitStore.get(key);

  if (!clientData) {
    // First attempt
    rateLimitStore.set(key, {
      attempts: 1,
      firstAttempt: now,
      blockedUntil: null
    });
    return { limited: false, attemptsLeft: RATE_LIMIT.maxAttempts - 1 };
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
  if (now - clientData.firstAttempt > RATE_LIMIT.windowMs) {
    // Reset window
    rateLimitStore.set(key, {
      attempts: 1,
      firstAttempt: now,
      blockedUntil: null
    });
    return { limited: false, attemptsLeft: RATE_LIMIT.maxAttempts - 1 };
  }

  // Within window, check attempts
  if (clientData.attempts >= RATE_LIMIT.maxAttempts) {
    // Block the IP
    rateLimitStore.set(key, {
      ...clientData,
      blockedUntil: now + RATE_LIMIT.blockDuration
    });
    return { 
      limited: true, 
      reason: 'max_attempts',
      timeLeft: Math.ceil(RATE_LIMIT.blockDuration / 1000 / 60),
      attemptsLeft: 0 
    };
  }

  // Increment attempts
  clientData.attempts++;
  rateLimitStore.set(key, clientData);
  
  return { 
    limited: false, 
    attemptsLeft: RATE_LIMIT.maxAttempts - clientData.attempts 
  };
}

function addSecurityHeaders(response) {
  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

export async function POST(request) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);
    
    // Check rate limit
    const rateLimitResult = isRateLimited(clientIP);
    
    if (rateLimitResult.limited) {
      const response = NextResponse.json(
        { 
          success: false, 
          message: rateLimitResult.reason === 'blocked' 
            ? `Too many failed attempts. Try again in ${rateLimitResult.timeLeft} minutes.`
            : `Maximum attempts exceeded. Access blocked for ${rateLimitResult.timeLeft} minutes.`,
          rateLimited: true,
          timeLeft: rateLimitResult.timeLeft
        },
        { status: 429 } // Too Many Requests
      );
      
      return addSecurityHeaders(response);
    }

    // Add artificial delay to slow down brute force attempts
    await new Promise(resolve => setTimeout(resolve, 1000));

    const { password } = await request.json();
    
    // Validate input
    if (!password || typeof password !== 'string') {
      const response = NextResponse.json(
        { success: false, message: 'Invalid request' },
        { status: 400 }
      );
      return addSecurityHeaders(response);
    }
    
    // Get the access password from environment variables
    const accessPassword = process.env.ADMIN_ACCESS_PASSWORD;
    
    if (!accessPassword) {
      const response = NextResponse.json(
        { success: false, message: 'Access password not configured' },
        { status: 500 }
      );
      return addSecurityHeaders(response);
    }
    
    // Use constant-time comparison to prevent timing attacks
    const isValidPassword = password.length === accessPassword.length && 
      password === accessPassword;
    
    if (isValidPassword) {
      // Clear rate limit on successful authentication
      rateLimitStore.delete(`rate_limit_${clientIP}`);
      
      const response = NextResponse.json({ 
        success: true,
        message: 'Access granted' 
      });
      return addSecurityHeaders(response);
    } else {
      // Don't provide specific error details
      const response = NextResponse.json(
        { 
          success: false, 
          message: 'Invalid access code',
          attemptsLeft: rateLimitResult.attemptsLeft 
        },
        { status: 401 }
      );
      return addSecurityHeaders(response);
    }
  } catch (error) {
    console.error('Access verification error:', error);
    const response = NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
    return addSecurityHeaders(response);
  }
}

// Add OPTIONS handler for CORS preflight
export async function OPTIONS(request) {
  const response = new NextResponse(null, { status: 200 });
  return addSecurityHeaders(response);
}

// Cleanup function to remove old entries (call periodically)
function cleanupRateLimitStore() {
  const now = Date.now();
  for (const [key, data] of rateLimitStore.entries()) {
    // Remove entries older than 2 hours
    if (now - data.firstAttempt > 2 * 60 * 60 * 1000) {
      rateLimitStore.delete(key);
    }
  }
}

// Clean up every hour
setInterval(cleanupRateLimitStore, 60 * 60 * 1000);