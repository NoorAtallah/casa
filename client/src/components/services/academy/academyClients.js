'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Building2, User, Globe2, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const clients = [
  { icon: Briefcase, label: 'Professionals seeking international communication skills' },
  { icon: Rocket, label: 'Entrepreneurs expanding global networks' },
  { icon: Building2, label: 'Companies developing employee capabilities' },
  { icon: User, label: 'Individuals learning Spanish for personal growth' },
  { icon: Globe2, label: 'Businesses engaging with Spanish-speaking markets' },
];

export default function AcademyClients() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(189, 169, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 169, 133, 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute -top-48 left-16 w-96 h-96 border border-[#BDA985] border-opacity-5 rotate-45" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Who We Support */}
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
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-[#BDA985]/40 mb-6"
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
            Spanish Learning Solutions for{' '}
            <span className="bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">
              Individuals and Businesses
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-lg text-zinc-300"
          >
            Our programmes are suitable for:
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {clients.map((client, index) => {
            const Icon = client.icon;
            const isWide = index === clients.length - 1;
            return (
              <motion.div
                key={client.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className={`group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-[#BDA985]/50 shadow-xl transition-colors duration-300 ${
                  isWide ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#BDA985]/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[#BDA985]" />
                </div>
                <span className="text-white font-semibold leading-snug">{client.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Why Casa Academy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center p-8 md:p-12 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-radial from-[#BDA985] to-transparent opacity-5 rounded-full blur-xl" />

          <div className="relative">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#BDA985]/10 border border-[#BDA985]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#BDA985] mr-3" />
              <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
                Why Casa Academy?
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Learning Beyond <span className="text-[#BDA985]">Language</span>
            </h3>
          </div>

          <div className="relative space-y-5 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              Casa Academy is part of Casa Di Consiglio, a boutique advisory platform built around
              knowledge, communication, and better decisions.
            </p>
            <p className="pl-5 border-l-2 border-[#BDA985] text-white">
              We believe learning a language is not only about vocabulary and grammar — it is about
              creating stronger connections, understanding different cultures, and opening new
              opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
