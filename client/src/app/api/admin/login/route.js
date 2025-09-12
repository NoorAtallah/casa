// app/api/admin/login/route.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    
    // Get admin credentials from environment variables
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const jwtSecret = process.env.JWT_SECRET;
    
    if (!adminUsername || !adminPassword || !jwtSecret) {
      return NextResponse.json(
        { success: false, message: 'Admin credentials not configured' },
        { status: 500 }
      );
    }
    
    if (username === adminUsername && password === adminPassword) {
      // Generate JWT token
      const token = jwt.sign(
        { username: adminUsername, role: 'admin' },
        jwtSecret,
        { expiresIn: '24h' }
      );
      
      return NextResponse.json({ 
        success: true, 
        token,
        message: 'Login successful' 
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}