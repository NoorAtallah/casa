'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-amber-100/50" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-4 sm:top-32 sm:left-16 w-12 sm:w-24 h-px bg-gradient-to-r from-[#8B7355]/50 to-transparent" />
        <div className="absolute top-16 left-4 sm:top-32 sm:left-16 w-px h-12 sm:h-24 bg-gradient-to-b from-[#8B7355]/50 to-transparent" />
        <div className="absolute bottom-16 right-4 sm:bottom-32 sm:right-16 w-12 sm:w-24 h-px bg-gradient-to-l from-[#8B7355]/50 to-transparent" />
        <div className="absolute bottom-16 right-4 sm:bottom-32 sm:right-16 w-px h-12 sm:h-24 bg-gradient-to-t from-[#8B7355]/50 to-transparent" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-16 md:w-24 h-px bg-[#8B7355] mx-auto mb-6 md:mb-8"
        />

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-5"
        >
          About Casa Di Consiglio
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#382e22] font-medium mb-10"
        >
          Your Trusted Advisor Before Every Important Decision
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-left sm:text-center"
        >
          <p>
            At Casa Di Consiglio, we believe that every important business decision deserves
            thoughtful analysis, strategic insight, and trusted advice.
          </p>
          <p>
            We are a boutique consulting and advisory firm in Dubai, supporting entrepreneurs,
            businesses, investors, and family enterprises through integrated legal advisory, business
            consulting, financial advisory, and professional learning solutions.
          </p>
          <p>
            Our role extends beyond providing individual services. We work alongside our clients as
            trusted advisors, helping them understand opportunities, manage risks, and make confident
            decisions that support long-term success.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
