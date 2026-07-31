'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function StartTheConversation() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-[#BDA985]/10 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#BDA985] font-semibold mb-5"
        >
          Let&apos;s Start the Conversation
        </motion.p>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
        >
          Every Important Business Decision Starts with the Right Advice.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-5 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed mb-10"
        >
          <p>
            Whether you require legal guidance, business strategy, financial advisory, or professional
            learning solutions, Casa Di Consiglio is ready to support your next step.
          </p>
          <p>
            Partner with a boutique consulting and advisory firm committed to helping you make better
            decisions with confidence.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center bg-[#BDA985] text-zinc-900 px-8 md:px-12 py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-2xl"
            >
              Schedule Your Consultation Today
              <ArrowRight className="ml-3 w-5 h-5" />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
