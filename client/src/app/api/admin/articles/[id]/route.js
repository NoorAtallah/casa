// app/api/admin/articles/[id]/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Article from '@/models/Article';
import jwt from 'jsonwebtoken';

function verifyAdminToken(request) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) return false;
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.role === 'admin';
  } catch (error) {
    return false;
  }
}

// GET - Fetch single article by ID (admin only)
export async function GET(request, { params }) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const { id } = await params;
    const article = await Article.findById(id);
    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    
    return NextResponse.json({ article });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Update article by ID
export async function PUT(request, { params }) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    
    const { id } = await params;
    const body = await request.json();

    // The admin form sends the whole article document back, which includes
    // fields Mongo refuses to update. Strip them before writing.
    const {
      _id,
      __v,
      createdAt,
      updatedAt,
      views,
      readingTime,
      ...updateData
    } = body;

    const article = await Article.findById(id);
    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    // Assign + save (rather than findByIdAndUpdate) so the model's pre-save
    // hooks still run: slug regeneration, reading time, publishedAt.
    Object.assign(article, updateData);
    await article.save();

    return NextResponse.json({ article });
  } catch (error) {
    console.error('Article update failed:', error);
    return NextResponse.json(
      {
        error: error.message,
        // Surface per-field validation messages so the admin UI can show them
        fields: error.errors
          ? Object.fromEntries(
              Object.entries(error.errors).map(([k, v]) => [k, v.message])
            )
          : undefined,
      },
      { status: 400 }
    );
  }
}

// DELETE - Delete article by ID
export async function DELETE(request, { params }) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    
    const { id } = await params;
    const article = await Article.findByIdAndDelete(id);
    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Article deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}