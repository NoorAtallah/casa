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

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#8B7355]/10 via-[#BDA985]/5 to-[#8B7355]/10 border-y border-[#8B7355]/20 backdrop-blur-sm">
      {/* Floating label */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <span className="bg-[#8B7355] text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
          Latest Articles
        </span>
      </div>

      {/* Scrolling container */}
      <div className="flex animate-scroll-left py-3 pl-32 pr-4">
        {/* Duplicate articles for seamless scrolling */}
        {[...articles, ...articles].map((article, index) => (
          <div
            key={`${article._id}-${index}`}
            className="flex-shrink-0 mx-4 group"
          >
            <Link href={`/articles/${article.slug}`}>
              <div className="flex items-center space-x-3 bg-white/70 hover:bg-white/90 rounded-xl px-4 py-2 border border-gray-200/60 hover:border-[#8B7355]/30 transition-all duration-300 shadow-sm hover:shadow-md min-w-[300px] max-w-[400px]">
                {/* Article image or icon */}
                <div className="flex-shrink-0">
                  {article.featuredImage ? (
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 rounded-lg flex items-center justify-center">
                      <span className="text-[#8B7355] font-bold text-sm">
                        {article.category.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Article content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm truncate group-hover:text-[#6B5B47] transition-colors">
                    {article.title}
                  </h4>
                  <div className="flex items-center space-x-3 text-xs text-gray-600 mt-1">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readingTime}min</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{article.views}</span>
                    </span>
                    <span className="text-[#8B7355] font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Arrow icon */}
                <div className="flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-[#8B7355] group-hover:translate-x-1 transition-transform duration-300" />
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
          animation: scroll-left 5s linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}