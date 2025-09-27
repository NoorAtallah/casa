// components/ScrollingArticlesBanner.js
'use client';
import { useState, useEffect } from 'react';
import { Clock, Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ScrollingArticlesBanner() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublishedArticles();
  }, []);

  const fetchPublishedArticles = async () => {
    try {
      // You'll need to create a public API endpoint for published articles
      const response = await fetch('/api/articles/published');
      if (response.ok) {
        const data = await response.json();
        setArticles(data.articles || []);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || articles.length === 0) {
    return null; // Hide banner if no articles or still loading
  }

  // Create enough duplicates to ensure seamless scrolling
  const duplicatedArticles = [
    ...articles,
    ...articles,
    ...articles,
    ...articles
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#8B7355]/10 via-[#BDA985]/5 to-[#8B7355]/10 border-y border-[#8B7355]/20 backdrop-blur-sm">
      {/* Floating label - responsive positioning */}
      <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10">
        <span className="bg-[#8B7355] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-sm">
          <span className="hidden sm:inline">Latest Articles</span>
          <span className="sm:hidden">Latest</span>
        </span>
      </div>

      {/* Scrolling container - responsive padding */}
      <div className="flex animate-scroll-left py-3 pl-16 sm:pl-32 pr-4">
        {duplicatedArticles.map((article, index) => (
          <div
            key={`${article._id}-${Math.floor(index / articles.length)}-${index % articles.length}`}
            className="flex-shrink-0 mx-2 sm:mx-4 group"
          >
            <Link href={`/articles/${article.slug}`}>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/70 hover:bg-white/90 rounded-xl px-3 sm:px-4 py-2 border border-gray-200/60 hover:border-[#8B7355]/30 transition-all duration-300 shadow-sm hover:shadow-md w-[240px] sm:w-[300px]">
                {/* Article image or icon */}
                <div className="flex-shrink-0">
                  {article.featuredImage ? (
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 rounded-lg flex items-center justify-center">
                      <span className="text-[#8B7355] font-bold text-xs sm:text-sm">
                        {article.category?.charAt(0) || 'A'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Article content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm truncate group-hover:text-[#6B5B47] transition-colors">
                    {article.title}
                  </h4>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-xs text-gray-600 mt-1">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readingTime || 5}min</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{article.views || 0}</span>
                    </span>
                    <span className="text-[#8B7355] font-medium hidden sm:inline">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Arrow icon */}
                <div className="flex-shrink-0">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B7355] group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 4s linear infinite;
          will-change: transform;
        }
        
        /* Pause animation on hover */
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
        
        /* Responsive animation speed for mobile */
        @media (max-width: 640px) {
          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}