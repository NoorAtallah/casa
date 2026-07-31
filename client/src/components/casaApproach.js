'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart3, Lightbulb, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const steps = [
  {
    icon: Search,
    title: 'Understand',
    description:
      'We begin by understanding your objectives, business environment, challenges, and long-term ambitions before offering recommendations.',
  },
  {
    icon: BarChart3,
    title: 'Analyse',
    description:
      'Our multidisciplinary approach considers the legal, commercial, financial, and operational implications of every decision to ensure nothing is overlooked.',
  },
  {
    icon: Lightbulb,
    title: 'Advise',
    description:
      'We provide clear, practical, and tailored recommendations that help you make informed decisions with confidence.',
  },
  {
    icon: Users,
    title: 'Partner',
    description:
      "Our relationship extends beyond advice. We remain alongside our clients, providing ongoing support as businesses evolve and new opportunities emerge.",
  },
];

export default function CasaApproach() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(189, 169, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 169, 133, 0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="text-center max-w-4xl mx-auto mb-14 md:mb-20"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#BDA985] font-semibold mb-5"
          >
            The Casa Approach
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Better Decisions Begin with Better Advice
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed"
          >
            Every client engagement follows a structured advisory approach designed to deliver
            practical, informed, and commercially focused outcomes.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="relative h-full bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-[#BDA985]/50 shadow-xl transition-colors duration-300"
              >
                <span className="absolute top-6 right-7 text-4xl font-black text-[#BDA985]/15">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="w-14 h-14 rounded-2xl bg-[#BDA985]/15 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#BDA985]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
