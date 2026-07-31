'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Briefcase, Layers, HeartHandshake } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const reasons = [
  {
    icon: UserCheck,
    title: 'Personalised Attention',
    description:
      'We provide direct access to advisors who understand your business needs and priorities.',
  },
  {
    icon: Briefcase,
    title: 'Business-Focused Legal Solutions',
    description: 'Our advice considers both legal requirements and commercial objectives.',
  },
  {
    icon: Layers,
    title: 'Integrated Advisory Perspective',
    description:
      'Where legal decisions overlap with financial and strategic considerations, we provide a broader perspective.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    description:
      'We aim to become a trusted advisor supporting your business decisions over time.',
  },
];

export default function LegalWhyUs() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#BDA985]/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 w-80 h-80 rounded-full bg-[#8B7355]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6"
          >
            Why Choose Casa Di Consiglio for{' '}
            <span style={{ color: '#bda985' }}>Legal Advisory?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-lg md:text-xl font-semibold text-gray-700 mb-8"
          >
            Boutique Legal Advice with a Commercial Mindset
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-32 h-1 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 md:p-10 rounded-3xl overflow-hidden"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.07))',
                  border: '2px solid rgba(189,169,133,0.22)',
                  boxShadow: '0 10px 30px rgba(189,169,133,0.12)',
                }}
              >
                <div
                  className="absolute top-7 right-9 text-5xl font-black opacity-10"
                  style={{ color: '#bda985' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(189,169,133,0.25), rgba(189,169,133,0.1))',
                    border: '2px solid rgba(189,169,133,0.2)',
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: '#bda985' }} />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 group-hover:text-[#bda985] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{reason.description}</p>

                <div
                  className="w-full h-1 rounded-full mt-8"
                  style={{ background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)' }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
