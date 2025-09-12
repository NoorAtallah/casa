// app/api/articles/[slug]/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/db';
import Article from '../../../../models/Article';

// GET - Fetch single article by slug (public)
export async function GET(request, { params }) {
  try {
    await dbConnect();
    
    const article = await Article.findOne({ 
      slug: params.slug, 
      status: 'published' 
    });
    
    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    
    // Increment view count
    await Article.findByIdAndUpdate(article._id, { $inc: { views: 1 } });
    
    return NextResponse.json({ 
      article: {
        ...article.toObject(),
        publishedAt: article.publishedAt ? article.publishedAt.toISOString() : null,
        createdAt: article.createdAt.toISOString(),
        updatedAt: article.updatedAt.toISOString()
      }
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}



// app/api/articles/categories/route.js
// import { NextResponse } from 'next/server';
// import dbConnect from '../../../../lib/db';
// import Article from '../../../../models/Article';

// export async function GET() {
//   try {
//     await dbConnect();
    
//     const categories = await Article.aggregate([
//       { $match: { status: 'published' } },
//       { $group: { 
//           _id: '$category', 
//           count: { $sum: 1 },
//           latestArticle: { $max: '$publishedAt' }
//         }
//       },
//       { $sort: { count: -1 } }
//     ]);
    
//     return NextResponse.json({ categories });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }