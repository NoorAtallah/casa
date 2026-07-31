'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Globe2, FileSignature } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const scenarios = [
  {
    icon: Coins,
    text: 'A new investment may require legal structuring and financial analysis.',
  },
  {
    icon: Globe2,
    text: 'A business expansion may require strategic planning, regulatory understanding, and commercial evaluation.',
  },
  {
    icon: FileSignature,
    text: 'A partnership may require contractual protection and long-term strategic alignment.',
  },
];

export default function OurStory() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="max-w-4xl mx-auto text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8B7355] font-semibold mb-5"
          >
            Our Story
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-8"
          >
            A Boutique Advisory Firm Built Around Better Decisions
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-left sm:text-center"
          >
            <p>
              Casa Di Consiglio was founded on a simple belief: businesses do not need more
              information; they need better guidance.
            </p>
            <p>
              In an increasingly complex business environment, decisions often require a combination
              of legal understanding, commercial awareness, financial insight, and strategic thinking.
            </p>
            <p>
              Many businesses seek separate advisors for separate challenges. However, the most
              important decisions rarely exist in isolation.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {scenarios.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="h-full bg-stone-50 rounded-2xl p-7 md:p-8 border border-gray-200/70 hover:border-[#8B7355]/40 shadow-sm hover:shadow-lg transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#8B7355]" />
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
        >
          Casa Di Consiglio brings these perspectives together to provide practical, integrated advice
          designed around each client&apos;s objectives.
        </motion.p>
      </div>
    </section>
  );
}
