'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Layers, Lightbulb, Handshake, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const pillars = [
  {
    step: '01',
    icon: Search,
    title: 'Understanding',
    description: 'Understanding your goals, challenges, and business environment.',
  },
  {
    step: '02',
    icon: Layers,
    title: 'Insight',
    description: 'Combining expertise across multiple disciplines.',
  },
  {
    step: '03',
    icon: Lightbulb,
    title: 'Advice',
    description: 'Providing clear recommendations that support confident decisions.',
  },
  {
    step: '04',
    icon: Handshake,
    title: 'Partnership',
    description: 'Remaining a trusted advisor as your needs evolve.',
  },
];

export default function CasaDifference() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(189, 169, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 169, 133, 0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute -top-48 left-16 w-96 h-96 border border-[#BDA985] border-opacity-5 rotate-45" />
        <div className="absolute bottom-24 -right-48 w-96 h-96 border border-[#BDA985] border-opacity-10 rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">
          {/* Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zinc-900 to-zinc-800 backdrop-blur-xl rounded-full border border-[#BDA985] border-opacity-20 mb-8 shadow-2xl"
            >
              <Sparkles className="w-4 h-4 text-[#BDA985] mr-3" />
              <span className="text-[#BDA985] font-semibold tracking-wide text-sm uppercase">
                The Casa Difference
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8"
            >
              Advisory Built Around{' '}
              <span className="bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">
                Your Decisions
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed mb-8"
            >
              <p>
                Unlike traditional firms that focus on individual services, Casa Di Consiglio takes a
                broader advisory approach.
              </p>
              <p>
                We consider the legal, commercial, financial, and strategic aspects behind every
                decision to provide solutions that are practical, informed, and aligned with your
                objectives.
              </p>
              <p className="text-white font-semibold">Our approach is built on:</p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative h-[360px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
              <img
                src="https://d1imjpjik7kc4g.cloudfront.net/images/5-Law-Firm-Titles-You-Should-Know-About-new.jpg"
                alt="The Casa Di Consiglio advisory approach"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:block absolute -bottom-8 -left-8 p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-[#BDA985]/30 shadow-2xl max-w-xs"
            >
              <p className="text-white font-bold text-lg leading-snug">
                One advisory relationship. <span className="text-[#BDA985]">Every perspective.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-8 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-2xl hover:shadow-[#BDA985]/10 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute top-6 right-7 text-5xl font-black text-[#BDA985] opacity-10">
                  {pillar.step}
                </div>

                <div className="relative w-16 h-16 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#BDA985] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {pillar.description}
                </p>

                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#BDA985] bg-opacity-5 rotate-45" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent opacity-40" />
      </div>
    </section>
  );
}
