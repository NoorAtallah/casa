// app/articles/page.js
'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Clock,
  Eye,
  Calendar,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  Loader2,
  BadgeCheck,
} from 'lucide-react';

const GOLD = '#bda985';

const CATEGORIES = [
  'All',
  'Corporate Law',
  'Banking & Finance',
  'Business Advisory',
  'Language Programmes',
  'Private Client',
  'Family Law',
  'Tax Law',
  'Healthcare Law',
  'Legal Updates',
  'News',
];

const PER_PAGE = 9;

const formatDate = (value) => {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('All');
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ current: 1, pages: 1, total: 0 });

  // Debounce the search box
  useEffect(() => {
    const t = setTimeout(() => {
      setSearch(searchInput.trim());
      setPage(1);
    }, 400);
    return () => clearTimeout(t);
  }, [searchInput]);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ page: String(page), limit: String(PER_PAGE) });
      if (category !== 'All') params.set('category', category);
      if (search) params.set('search', search);

      const res = await fetch(`/api/articles/published?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to fetch articles');

      const data = await res.json();
      setArticles(data.articles || []);
      setPagination(data.pagination || { current: 1, pages: 1, total: 0 });
    } catch (err) {
      console.error(err);
      setError('We could not load the articles right now. Please try again.');
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [page, category, search]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleCategory = (value) => {
    setCategory(value);
    setPage(1);
  };

  const goToPage = (next) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
          borderColor: 'rgba(189,169,133,0.2)',
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(189,169,133,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(189,169,133,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.25em] whitespace-nowrap"
                style={{ color: GOLD }}
              >
                From Our Experts
              </span>
              <span className="h-px w-24" style={{ background: 'rgba(189,169,133,0.4)' }} />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Articles &amp; <span style={{ color: GOLD }}>Legal Updates</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
              Commentary, regulatory updates and practical guidance written by our legal
              and financial advisory teams across the UAE, Jordan, Spain and India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white/90 backdrop-blur-xl border-b" style={{ borderColor: 'rgba(189,169,133,0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5">
            {/* Search */}
            <div className="relative lg:w-72 shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search articles"
                className="w-full pl-11 pr-4 py-2.5 text-sm rounded-full border bg-white text-black placeholder:text-gray-400 outline-none transition-colors duration-300 focus:border-[#bda985]"
                style={{ borderColor: 'rgba(189,169,133,0.35)' }}
              />
            </div>

            {/* Categories */}
            <div className="flex-1 overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max pb-1">
                {CATEGORIES.map((cat) => {
                  const active = cat === category;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategory(cat)}
                      className="relative px-4 py-2 text-sm rounded-full whitespace-nowrap transition-colors duration-300"
                      style={{
                        color: active ? '#000' : '#6b7280',
                      }}
                    >
                      {active && (
                        <motion.span
                          layoutId="activeCategory"
                          className="absolute inset-0 rounded-full border"
                          style={{
                            background: 'rgba(189,169,133,0.15)',
                            borderColor: 'rgba(189,169,133,0.4)',
                          }}
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative">{cat}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {!loading && !error && (
          <p className="text-sm text-gray-500 mb-10">
            {pagination.total} {pagination.total === 1 ? 'article' : 'articles'}
            {category !== 'All' && ` in ${category}`}
            {search && ` matching “${search}”`}
          </p>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-28 text-gray-500">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="mb-4"
            >
              <Loader2 className="w-7 h-7" style={{ color: GOLD }} />
            </motion.span>
            <span className="text-sm">Loading articles…</span>
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-28">
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={fetchArticles}
              className="px-6 py-3 rounded-full text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #bda985, #d4c4a0)' }}
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-28">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(189,169,133,0.15)' }}
            >
              <FileText className="w-7 h-7" style={{ color: GOLD }} />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">No articles found</h3>
            <p className="text-gray-500 text-sm">
              Try a different category or clear your search.
            </p>
          </div>
        )}

        {!loading && !error && articles.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${search}-${page}`}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {articles.map((article) => (
                <motion.article key={article._id} variants={item}>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="group flex flex-col h-full rounded-2xl border overflow-hidden bg-white transition-colors duration-300 hover:border-[#bda985]"
                    style={{ borderColor: 'rgba(189,169,133,0.25)' }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      {article.featuredImage ? (
                        <motion.img
                          src={article.featuredImage}
                          alt={article.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="w-8 h-8" style={{ color: 'rgba(189,169,133,0.5)' }} />
                        </div>
                      )}

                      {article.category && (
                        <span
                          className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-black backdrop-blur-sm"
                          style={{ background: 'rgba(255,255,255,0.85)' }}
                        >
                          {article.category}
                        </span>
                      )}

                      {article.featured && (
                        <span
                          className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-black backdrop-blur-sm"
                          style={{ background: 'rgba(189,169,133,0.9)' }}
                        >
                          <BadgeCheck className="w-3.5 h-3.5" />
                          From Our Experts
                        </span>
                      )}
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        {article.publishedAt && (
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(article.publishedAt)}
                          </span>
                        )}
                        {article.readingTime > 0 && (
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {article.readingTime} min
                          </span>
                        )}
                      </div>

                      <h2 className="text-lg font-bold text-black leading-snug mb-3 group-hover:text-[#bda985] transition-colors duration-300">
                        {article.title}
                      </h2>

                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
                        {article.excerpt}
                      </p>

                      <div
                        className="mt-auto pt-4 border-t flex items-center justify-between"
                        style={{ borderColor: 'rgba(189,169,133,0.2)' }}
                      >
                        <span className="flex items-center gap-2 text-xs text-gray-500">
                          <User className="w-3.5 h-3.5" />
                          {article.author}
                        </span>
                        <span
                          className="flex items-center gap-1.5 text-xs font-semibold"
                          style={{ color: GOLD }}
                        >
                          Read
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Pagination */}
        {!loading && !error && pagination.pages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page <= 1}
              className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-600 transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-black"
              style={{ borderColor: 'rgba(189,169,133,0.35)' }}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((n) => {
              const active = n === page;
              return (
                <button
                  key={n}
                  onClick={() => goToPage(n)}
                  className="w-10 h-10 rounded-full text-sm font-semibold border transition-colors duration-300"
                  style={{
                    color: active ? '#000' : '#6b7280',
                    background: active ? 'rgba(189,169,133,0.2)' : 'transparent',
                    borderColor: active ? GOLD : 'rgba(189,169,133,0.25)',
                  }}
                >
                  {n}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(page + 1)}
              disabled={page >= pagination.pages}
              className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-600 transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-black"
              style={{ borderColor: 'rgba(189,169,133,0.35)' }}
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
