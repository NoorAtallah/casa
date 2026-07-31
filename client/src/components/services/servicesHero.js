'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Scale, TrendingUp, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const quickLinks = [
  { icon: Scale, label: 'Legal Advisory', href: '/services/legal-advisory' },
  { icon: TrendingUp, label: 'Business & Financial Advisory', href: '/services/business-financial-advisory' },
  { icon: GraduationCap, label: 'Casa Academy', href: '/services/spanish-language-programmes' },
];

export default function ServicesHero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://www.burgerhuyserattorneys.co.za/wp-content/uploads/2025/04/Top-law-firms-in-Centurion-1.jpg"
          alt="Casa Di Consiglio advisory services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-[#6B5B47]/70" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(189,169,133,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(189,169,133,0.4) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating accents */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#BDA985]/40"
            style={{
              left: `${15 + i * 30}%`,
              top: `${25 + i * 15}%`,
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              filter: 'blur(1px)',
            }}
            animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
        className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-28 md:pt-32 md:pb-36 text-center"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-[#BDA985]/40 mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#BDA985] mr-3" />
          <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
            Our Advisory Services
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8"
        >
          Integrated Solutions for{' '}
          <span className="bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">
            Better Business Decisions
          </span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-32 h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent mx-auto mb-10 opacity-70"
        />

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto space-y-5 text-base md:text-lg lg:text-xl text-zinc-200 leading-relaxed text-left md:text-center"
        >
          <p>
            At Casa Di Consiglio, we believe that important decisions require more than isolated
            advice.
          </p>
          <p>
            Businesses today operate in an environment where legal, financial, and strategic
            considerations are interconnected. A successful decision requires understanding the
            complete picture.
          </p>
          <p>
            Through our boutique advisory approach, we provide tailored solutions across Legal
            Advisory, Business &amp; Financial Advisory, and Professional Learning, helping
            entrepreneurs, businesses, and investors move forward with clarity and confidence.
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 max-w-4xl mx-auto"
        >
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.button
                key={link.href}
                onClick={() => router.push(link.href)}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#BDA985]/60 text-left transition-colors duration-300"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#BDA985]/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#BDA985]" />
                </div>
                <span className="text-white text-sm font-bold leading-snug flex-1">
                  {link.label}
                </span>
                <ArrowRight className="w-4 h-4 text-[#BDA985] group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
