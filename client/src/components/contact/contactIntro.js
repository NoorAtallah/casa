'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, TrendingUp, GraduationCap, MessageCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const supportAreas = [
  { icon: Scale, label: 'Legal guidance' },
  { icon: TrendingUp, label: 'Business & financial advisory' },
  { icon: GraduationCap, label: 'Spanish language programmes' },
];

export default function ContactIntro() {
  return (
    <section className="relative py-20 md:py-28 bg-zinc-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(189,169,133,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(189,169,133,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute -top-40 right-0 w-[32rem] h-[32rem] rounded-full bg-[#BDA985]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-7"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-[#BDA985]/40 mb-8"
            >
              <MessageCircle className="w-4 h-4 text-[#BDA985] mr-3" />
              <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
                Get in Touch
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] mb-8"
            >
              Let&apos;s Discuss Your Next{' '}
              <span className="bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">
                Important Decision
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg text-zinc-300 leading-relaxed mb-6"
            >
              Every business journey involves important decisions — from starting a company and
              entering new partnerships to improving performance, managing risks, and planning future
              growth.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg text-white leading-relaxed pl-5 border-l-2 border-[#BDA985]"
            >
              At Casa Di Consiglio, we provide boutique advisory support designed around your
              objectives, helping you approach complex decisions with clarity and confidence.
            </motion.p>
          </motion.div>

          {/* Support areas */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8">
              Whether you require legal guidance, business and financial advisory, or Spanish language
              programmes, our team is ready to understand your needs and explore how we can support
              you.
            </p>

            <div className="space-y-4">
              {supportAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-[#BDA985]/50 transition-colors duration-300"
                  >
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-[#BDA985]/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#BDA985]" />
                    </div>
                    <span className="text-white font-semibold">{area.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
