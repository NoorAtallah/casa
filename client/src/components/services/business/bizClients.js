'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, TrendingUp, Home, Target, Globe2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const clients = [
  { icon: Lightbulb, label: 'Entrepreneurs launching new businesses' },
  { icon: Rocket, label: 'Start-ups preparing for growth' },
  { icon: TrendingUp, label: 'SMEs improving performance' },
  { icon: Home, label: 'Family businesses planning their future' },
  { icon: Target, label: 'Investors evaluating opportunities' },
  { icon: Globe2, label: 'Companies expanding into new markets' },
];

export default function BizClients() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop&auto=format"
          alt="Advisory solutions for businesses at every stage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/95 via-zinc-950/85 to-[#6B5B47]/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="max-w-3xl mb-14"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-[#BDA985]/40 mb-6"
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
            Advisory Solutions for Businesses at{' '}
            <span className="bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">
              Every Stage
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-lg text-zinc-300"
          >
            Casa Di Consiglio supports:
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.label}
                initial={{ opacity: 0, y: 28 }}
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl text-base md:text-lg text-zinc-300 leading-relaxed pl-5 border-l-2 border-[#BDA985]"
        >
          Whether your business is facing a challenge, evaluating an opportunity, or preparing for its
          next stage of growth, we provide the strategic and financial insight required to make better
          decisions.
        </motion.p>
      </div>
    </section>
  );
}
