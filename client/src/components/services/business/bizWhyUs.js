'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Briefcase, LineChart, HeartHandshake } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const reasons = [
  {
    icon: Gem,
    title: 'Boutique & Personalised',
    description:
      'We work closely with our clients, providing direct access and tailored advice aligned with their objectives.',
  },
  {
    icon: Briefcase,
    title: 'Commercially Focused',
    description: 'Our recommendations consider the realities of running and growing a business.',
  },
  {
    icon: LineChart,
    title: 'Financially Driven',
    description:
      'We use financial insight to help clients understand performance, opportunities, and risks.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Advisory Partnership',
    description:
      'We support clients beyond individual projects by becoming a trusted advisor throughout their business journey.',
  },
];

export default function BizWhyUs() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#BDA985]/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 w-80 h-80 rounded-full bg-[#8B7355]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6"
            >
              Why Choose{' '}
              <span style={{ color: '#bda985' }}>Casa Di Consiglio?</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-lg md:text-xl font-semibold text-gray-700 mb-8"
            >
              Business Advice Built Around Your Decisions
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-24 h-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)' }}
            />
          </motion.div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative p-8 rounded-3xl overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.07))',
                    border: '2px solid rgba(189,169,133,0.22)',
                    boxShadow: '0 10px 30px rgba(189,169,133,0.12)',
                  }}
                >
                  <span
                    className="absolute top-7 right-8 text-5xl font-black opacity-10"
                    style={{ color: '#bda985' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(189,169,133,0.25), rgba(189,169,133,0.1))',
                      border: '2px solid rgba(189,169,133,0.2)',
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: '#bda985' }} />
                  </div>

                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#bda985] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
