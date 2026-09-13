// app/api/articles/published/route.js (Updated with more features)
import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/db';
import Article from '../../../../models/Article';

export async function GET(request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const category = searchParams.get('category');
    const featured = searchParams.get('featured') === 'true';
    const search = searchParams.get('search');
    
    // Scheduled publishing: an article is only public once its publishedAt
    // has actually arrived. Future-dated articles stay hidden until their day.
    let query = {
      status: 'published',
      publishedAt: { $ne: null, $lte: new Date() }
    };

    if (category) query.category = category;
    if (featured) query.featured = true;
    if (search) {
      query.$text = { $search: search };
    }
    
    const skip = (page - 1) * limit;
    
    const articles = await Article.find(query)
      .select('title slug excerpt category author featuredImage readingTime views publishedAt featured')
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    const total = await Article.countDocuments(query);
    
    return NextResponse.json({
      articles: articles.map(article => ({
        ...article,
        publishedAt: article.publishedAt ? article.publishedAt.toISOString() : null
      })),
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total
      }
    });
  } catch (error) {
    console.error('Error fetching published articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}