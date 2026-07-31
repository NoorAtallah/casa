'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Handshake, Briefcase, Globe2, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const benefits = [
  { icon: MessageSquare, label: 'Communicate with Spanish-speaking clients and partners' },
  { icon: Handshake, label: 'Build stronger international relationships' },
  { icon: Briefcase, label: 'Expand professional opportunities' },
  { icon: Globe2, label: 'Improve cultural understanding' },
  { icon: Sparkles, label: 'Gain confidence in global environments' },
];

export default function WhySpanish() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop&auto=format"
          alt="Spanish creates global connections"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/95 via-zinc-950/85 to-[#6B5B47]/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-[#BDA985]/40 mb-8"
            >
              <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
                Why Learn Spanish?
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8"
            >
              A Language That Creates{' '}
              <span className="bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">
                Global Connections
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg text-zinc-300 leading-relaxed mb-6"
            >
              Spanish is one of the world&apos;s most widely spoken languages and plays an important
              role in international communication, culture, and business.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg text-white font-semibold"
            >
              Learning Spanish can help individuals and professionals:
            </motion.p>
          </motion.div>

          {/* Benefit list */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                  whileHover={{ x: -6 }}
                  className="group flex items-center gap-5 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#BDA985]/60 transition-colors duration-300"
                >
                  <span
                    className="text-2xl font-black shrink-0 opacity-40"
                    style={{ color: '#bda985' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#BDA985]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#BDA985]" />
                  </div>
                  <span className="text-white font-semibold leading-snug">{benefit.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
