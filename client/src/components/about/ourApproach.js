'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Ear, BarChart3, Lightbulb, LifeBuoy } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const steps = [
  {
    icon: Ear,
    title: 'Listen',
    description:
      'We take the time to understand your business, objectives, challenges, and ambitions.',
  },
  {
    icon: BarChart3,
    title: 'Analyse',
    description:
      'We evaluate the legal, commercial, financial, and strategic considerations behind each decision.',
  },
  {
    icon: Lightbulb,
    title: 'Advise',
    description:
      'We provide clear recommendations designed to support informed decision-making.',
  },
  {
    icon: LifeBuoy,
    title: 'Support',
    description:
      'We remain a trusted partner beyond the initial engagement, supporting clients as their needs evolve.',
  },
];

export default function OurApproach() {
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
            Our Approach
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6"
          >
            From Understanding to Action
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
          >
            Every client relationship begins with understanding.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative h-full bg-stone-50 rounded-2xl p-7 md:p-8 border border-gray-200/70 hover:border-[#8B7355]/40 shadow-sm hover:shadow-xl transition-colors duration-300"
              >
                <span className="absolute top-6 right-7 text-4xl font-black text-[#8B7355]/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="w-[3.25rem] h-[3.25rem] rounded-xl bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#8B7355]" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
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
