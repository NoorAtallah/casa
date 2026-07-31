'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Layers, HeartHandshake } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const reasons = [
  {
    icon: Gem,
    title: 'Boutique by Choice',
    paragraphs: [
      'Our boutique structure allows us to provide a level of attention, accessibility, and personal involvement that larger firms often cannot offer.',
      'Clients work directly with experienced advisors who understand their objectives and provide solutions aligned with their specific needs.',
    ],
  },
  {
    icon: Layers,
    title: 'Multidisciplinary Perspective',
    paragraphs: [
      'Business decisions rarely involve only one area of expertise.',
      'By combining legal, business, and financial perspectives, we help clients see the complete picture before making important decisions.',
    ],
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    paragraphs: [
      'We believe the strongest advisory relationships are built on trust, transparency, and shared objectives.',
      "Our goal is not simply to complete assignments; our goal is to become a trusted advisor throughout our clients' journey.",
    ],
  },
];

export default function WhyCasa() {
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
            Why Casa Di Consiglio
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-20 h-px bg-[#8B7355] mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="h-full bg-white rounded-2xl p-7 md:p-8 border border-gray-200/70 hover:border-[#8B7355]/40 shadow-sm hover:shadow-xl transition-colors duration-300"
              >
                <div className="w-[3.25rem] h-[3.25rem] rounded-xl bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#8B7355]" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>

                <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  {reason.paragraphs.map((text) => (
                    <p key={text.slice(0, 30)}>{text}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
