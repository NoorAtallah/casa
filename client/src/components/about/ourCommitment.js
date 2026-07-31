'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function OurCommitment() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-stone-50 to-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 flex items-center justify-center mb-8"
        >
          <ShieldCheck className="w-7 h-7 text-[#8B7355]" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8B7355] font-semibold mb-5"
        >
          Our Commitment
        </motion.p>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-8"
        >
          Advice That Creates Confidence
        </motion.h2>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-left sm:text-center"
        >
          <p>
            At Casa Di Consiglio, we measure success by the value we create for our clients.
          </p>
          <p>
            Every engagement is approached with professionalism, discretion, and a commitment to
            delivering advice that supports better decisions and stronger outcomes.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-[#6B5B47]">
            Because when decisions matter, having the right advisor matters.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
