'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, TrendingUp, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const practiceAreas = [
  {
    icon: Scale,
    title: 'Legal Advisory',
    description:
      'Providing practical legal solutions that protect businesses, reduce risk, and support sustainable growth.',
    listLabel: 'Our legal advisory services include:',
    items: [
      'Corporate & Commercial Law',
      'Commercial Contracts & Agreements',
      'Corporate Governance',
      'Regulatory & Compliance Advisory',
      'Business Structuring',
      'Shareholder Agreements',
      'Legal Due Diligence',
    ],
    href: '/legal-advisory',
  },
  {
    icon: TrendingUp,
    title: 'Business & Financial Advisory',
    description:
      'Helping businesses improve performance, strengthen financial management, and make strategic decisions with confidence.',
    listLabel: 'Our advisory services include:',
    items: [
      'Business Strategy & Growth Advisory',
      'Financial Planning & Analysis',
      'Business Valuation',
      'Financial Modelling',
      'Corporate Finance',
      'Investment Advisory',
      'Strategic Partnerships',
      'Business Performance Improvement',
    ],
    href: '/business-financial-advisory',
  },
  {
    icon: GraduationCap,
    title: 'Casa Academy',
    description:
      'Supporting professionals, organisations, and individuals through practical learning and international communication.',
    listLabel: 'Our programmes include:',
    items: [
      'Spanish Language Programmes',
      'Business Spanish',
      'Corporate Language Training',
      'Executive Learning Workshops',
      'Professional Development Programmes',
    ],
    href: '/casa-academy',
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="relative py-20 md:py-28 bg-gradient-to-b from-stone-50 via-white to-stone-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8B7355] font-semibold mb-5"
          >
            Our Practice Areas
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6"
          >
            Integrated Advisory Solutions Designed Around Better Decisions
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
          >
            Modern businesses require advisors who understand the complete picture. Our practice areas
            work together to help clients make confident decisions at every stage of their business
            journey.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group flex flex-col h-full bg-white rounded-2xl p-7 md:p-8 border border-gray-200/70 hover:border-[#8B7355]/40 shadow-sm hover:shadow-xl transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#8B7355]" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                  {area.description}
                </p>

                <p className="text-sm font-semibold text-[#6B5B47] mb-3">{area.listLabel}</p>

                <ul className="space-y-2 mb-8">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start text-sm text-gray-700">
                      <span className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-[#8B7355] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link
                    href={area.href}
                    className="inline-flex items-center text-sm font-bold text-[#6B5B47] hover:text-[#8B7355]"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
