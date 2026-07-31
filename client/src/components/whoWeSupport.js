'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Lightbulb,
  Building2,
  Home,
  TrendingUp,
  Network,
  Globe2,
  Briefcase,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const clients = [
  { icon: Lightbulb, label: 'Entrepreneurs' },
  { icon: Rocket, label: 'Start-ups' },
  { icon: Building2, label: 'Small & Medium Enterprises (SMEs)' },
  { icon: Home, label: 'Family-Owned Businesses' },
  { icon: TrendingUp, label: 'Investors' },
  { icon: Network, label: 'Corporate Groups' },
  { icon: Globe2, label: 'International Businesses Entering the UAE' },
  { icon: Briefcase, label: 'Professional Services Firms' },
];

export default function WhoWeSupport() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-stone-50 via-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="text-center max-w-4xl mx-auto mb-14 md:mb-16"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8B7355] font-semibold mb-5"
          >
            Who We Support
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6"
          >
            Advising Businesses Through Every Stage of Growth
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
          >
            Casa Di Consiglio proudly supports:
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-14 md:mb-16">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="flex items-center gap-4 h-full bg-white rounded-2xl p-6 border border-gray-200/70 hover:border-[#8B7355]/40 shadow-sm hover:shadow-lg transition-colors duration-300"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#8B7355]" />
                </div>
                <span className="text-sm md:text-base font-semibold text-gray-900 leading-snug">
                  {client.label}
                </span>
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
          Whether you are establishing a new venture, expanding internationally, restructuring your
          organisation, or seeking ongoing strategic advice, Casa Di Consiglio provides the insight and
          expertise to help you make confident business decisions.
        </motion.p>
      </div>
    </section>
  );
}
