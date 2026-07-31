'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Building2, Home, TrendingUp, Globe2, GraduationCap } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const clients = [
  { icon: Lightbulb, label: 'Entrepreneurs launching new ventures' },
  { icon: Building2, label: 'Small and medium-sized businesses seeking growth' },
  { icon: Home, label: 'Family-owned businesses navigating strategic decisions' },
  { icon: TrendingUp, label: 'Investors evaluating opportunities' },
  { icon: Globe2, label: 'Companies expanding into new markets' },
  { icon: GraduationCap, label: 'Organisations seeking professional development solutions' },
];

export default function AboutWhoWeSupport() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="max-w-4xl mx-auto text-center mb-14 md:mb-16"
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
            Advising Businesses, Entrepreneurs, and Investors
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
          >
            Casa Di Consiglio works with:
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14 md:mb-16">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="flex items-center gap-4 h-full bg-stone-50 rounded-2xl p-6 border border-gray-200/70 hover:border-[#8B7355]/40 shadow-sm hover:shadow-lg transition-colors duration-300"
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
          Whether you are starting, growing, restructuring, or transforming your business, Casa Di
          Consiglio provides the clarity and expertise needed to move forward with confidence.
        </motion.p>
      </div>
    </section>
  );
}
