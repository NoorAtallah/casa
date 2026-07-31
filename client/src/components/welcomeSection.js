'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, TrendingUp, GraduationCap, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const perspectives = [
  { icon: Scale, label: 'Legal Expertise' },
  { icon: TrendingUp, label: 'Business Strategy' },
  { icon: GraduationCap, label: 'Financial Insight' },
];

export default function WelcomeSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background: `radial-gradient(circle at 20% 20%, #bda985 2px, transparent 2px),
                         radial-gradient(circle at 80% 70%, #bda985 1px, transparent 1px)`,
            backgroundSize: '60px 60px, 30px 30px',
          }}
        />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#BDA985]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 w-80 h-80 rounded-full bg-[#8B7355]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative h-[380px] sm:h-[460px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://www.burgerhuyserattorneys.co.za/wp-content/uploads/2025/04/Top-law-firms-in-Centurion-1.jpg"
                alt="Casa Di Consiglio advisory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-4">
                  <Sparkles className="w-4 h-4 text-[#BDA985] mr-2" />
                  <span className="text-white text-xs font-bold uppercase tracking-wider">
                    Boutique Advisory
                  </span>
                </div>
                <p className="text-white text-lg sm:text-xl font-semibold leading-snug">
                  A select number of clients. The full attention of experienced advisors.
                </p>
              </div>
            </div>

            {/* Floating perspective chips */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:block absolute -right-6 top-10 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-56"
            >
              <div className="space-y-4">
                {perspectives.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#8B7355]" />
                      </div>
                      <span className="text-sm font-bold text-gray-900">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider border-2 border-[#BDA985] bg-white shadow-lg mb-8"
            >
              Welcome to Casa Di Consiglio
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-[1.1] mb-6"
            >
              Your Trusted Advisor Before{' '}
              <span className="text-[#bda985]">Every Important Decision</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-24 h-1 rounded-full mb-8"
              style={{ background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)' }}
            />

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed"
            >
              <p className="relative pl-6 border-l-2 border-[#BDA985]/40">
                Business decisions are rarely made in isolation. Every legal matter has commercial
                implications. Every financial decision carries strategic consequences. Every
                opportunity presents both potential and risk.
              </p>
              <p>
                At Casa Di Consiglio, we bring these perspectives together through a multidisciplinary
                advisory approach that combines legal expertise, business strategy, financial insight,
                and practical guidance.
              </p>
              <p>
                As a boutique advisory firm, we intentionally work with a select number of clients to
                ensure every engagement receives the attention, responsiveness, and strategic thinking
                it deserves. We believe trusted relationships create better outcomes, which is why our
                clients view us not simply as consultants, but as long-term advisors invested in their
                success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
