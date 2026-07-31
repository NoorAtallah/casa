'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Target, UserCheck, Telescope } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const pillars = [
  {
    icon: Wrench,
    title: 'Practical',
    description: 'Focused on solutions that can be implemented and create real value.',
  },
  {
    icon: Target,
    title: 'Strategic',
    description: 'Considering both immediate requirements and long-term objectives.',
  },
  {
    icon: UserCheck,
    title: 'Personalised',
    description: "Tailored to each client's unique circumstances, goals, and challenges.",
  },
  {
    icon: Telescope,
    title: 'Forward-Looking',
    description: 'Helping clients anticipate opportunities and challenges before they arise.',
  },
];

export default function OurPhilosophy() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-stone-50 via-white to-stone-50">
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
            Our Philosophy
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-8"
          >
            Decision Intelligence: Turning Complexity into Clarity
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-left sm:text-center"
          >
            <p>
              Our approach is built around Decision Intelligence — helping clients make better
              decisions by combining knowledge, experience, and strategic thinking.
            </p>
            <p>
              We believe successful advisory is not about providing generic recommendations. It is
              about understanding the context behind every decision and delivering advice that is:
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="h-full bg-white rounded-2xl p-7 md:p-8 border border-gray-200/70 hover:border-[#8B7355]/40 shadow-sm hover:shadow-xl transition-colors duration-300"
              >
                <div className="w-[3.25rem] h-[3.25rem] rounded-xl bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#8B7355]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
