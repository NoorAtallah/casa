'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, TrendingUp, Home, Target, Globe2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const clients = [
  { icon: Lightbulb, label: 'Entrepreneurs establishing new businesses' },
  { icon: Rocket, label: 'Start-ups building their foundations' },
  { icon: TrendingUp, label: 'SMEs managing growth and expansion' },
  { icon: Home, label: 'Family businesses planning succession and governance' },
  { icon: Target, label: 'Investors evaluating opportunities' },
  { icon: Globe2, label: 'Companies entering the UAE market' },
];

export default function LegalClients() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://curleybusinesslaw.com/wp-content/uploads/2022/09/law-scaled.jpg"
          alt="Legal advisory for businesses at every stage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/95 via-zinc-950/85 to-[#6B5B47]/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="text-center mb-14 md:mb-16"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-[#BDA985]/40 mb-8"
          >
            <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
              Who We Support
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
          >
            Legal Advisory for Businesses at{' '}
            <span className="bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">
              Every Stage
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-lg md:text-xl text-zinc-300"
          >
            Our legal advisory services support:
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#BDA985]/60 transition-colors duration-300"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#BDA985]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[#BDA985]" />
                </div>
                <span className="text-white font-semibold leading-snug">{client.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
