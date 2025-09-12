// app/articles/[slug]/page.js
'use client';
import { useState, useEffect, use } from 'react';
import { Clock, Eye, Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function ArticlePage({ params }) {
  // Unwrap the params Promise
  const resolvedParams = use(params);
  
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    if (resolvedParams.slug) {
      fetchArticle(resolvedParams.slug);
    }
  }, [resolvedParams.slug]);

  const fetchArticle = async (slug) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/articles/${slug}`);
      
      if (response.ok) {
        const data = await response.json();
        setArticle(data.article);
        
        // Fetch related articles from same category
        fetchRelatedArticles(data.article.category, data.article._id);
      } else {
        setError('Article not found');
      }
    } catch (error) {
      setError('Failed to load article');
      console.error('Error fetching article:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedArticles = async (category, articleId) => {
    try {
      const response = await fetch(`/api/articles/published?category=${encodeURIComponent(category)}&limit=3`);
      if (response.ok) {
        const data = await response.json();
        const filtered = data.articles.filter(a => a._id !== articleId);
        setRelatedArticles(filtered.slice(0, 3));
      }
    } catch (error) {
      console.error('Error fetching related articles:', error);
    }
  };

  const shareArticle = () => {
    if (navigator.share && article) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#8B7355]/30 border-t-[#8B7355] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#8B7355] text-white rounded-lg hover:bg-[#6B5B47] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  if (!article) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#8B7355] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <button
              onClick={shareArticle}
              className="flex items-center space-x-2 px-4 py-2 bg-[#8B7355]/10 text-[#8B7355] rounded-lg hover:bg-[#8B7355]/20 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="px-3 py-1 bg-[#8B7355] text-white text-sm font-medium rounded-full">
              {article.category}
            </span>
            {article.featured && (
              <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{article.readingTime} min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>{article.views} views</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {article.featuredImage && (
          <div className="mb-8">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        )}

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            lineHeight: '1.8',
            fontSize: '1.125rem'
          }}
        />

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-2 mb-3">
              <Tag className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[#BDA985]/20 text-[#6B5B47] text-sm rounded-full border border-[#BDA985]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <Link 
                key={relatedArticle._id}
                href={`/articles/${relatedArticle.slug}`}
                className="group"
              >
                <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200/60">
                  {relatedArticle.featuredImage && (
                    <img
                      src={relatedArticle.featuredImage}
                      alt={relatedArticle.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      loading="lazy"
                    />
                  )}
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#6B5B47] transition-colors line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {relatedArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{relatedArticle.readingTime} min read</span>
                    <span>{relatedArticle.views} views</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      <style jsx>{`
        .prose h2 {
          color: #1f2937;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          color: #374151;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          margin-bottom: 1.25rem;
          color: #4b5563;
        }
        .prose ul, .prose ol {
          margin: 1.25rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}