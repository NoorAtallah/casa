'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Scale, ArrowRight, ChevronRight, ShieldCheck, Compass } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function LegalHero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(189,169,133,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(189,169,133,0.4) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#BDA985]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#6B5B47]/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-24">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs md:text-sm text-zinc-500 mb-12"
        >
          <Link href="/" className="hover:text-[#BDA985] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-[#BDA985] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#BDA985] font-semibold">Legal Advisory</span>
        </motion.nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left — headline + lead + CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            className="lg:col-span-7"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-[#BDA985]/40 mb-8"
            >
              <Scale className="w-4 h-4 text-[#BDA985] mr-3" />
              <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
                Legal Advisory
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-8"
            >
              Strategic Legal Guidance for{' '}
              <span className="bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">
                Confident Business Decisions
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-lg md:text-xl text-white font-semibold pl-5 border-l-2 border-[#BDA985] mb-8"
            >
              Every important business decision has legal implications.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-10"
            >
              At Casa Di Consiglio, we provide boutique legal advisory services in Dubai and the UAE,
              helping entrepreneurs, businesses, investors, and organisations navigate legal
              complexity, protect their interests, and make informed decisions with confidence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => router.push('/contact')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wide shadow-2xl"
                style={{ background: '#bda985', color: '#18181b' }}
              >
                <span className="flex items-center justify-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </motion.button>

              <motion.button
                onClick={() =>
                  document.getElementById('legal-services')?.scrollIntoView({ behavior: 'smooth' })
                }
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wide border-2 border-[#BDA985]/60 text-[#BDA985] hover:bg-[#BDA985] hover:text-zinc-900 transition-colors duration-300"
              >
                Our Legal Services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[360px] sm:h-[440px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqt-e-k4eFRhajDzIRkC0twbt1pIz2i8p9ZI2WVlV3v1Ab-jmsvqEoFyY&s=10"
                alt="Legal advisory in Dubai"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(0,0,0,0.35) 0%, rgba(9,9,11,0.55) 55%, rgba(189,169,133,0.35) 100%)',
                }}
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:block absolute -bottom-8 -left-8 p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-[#BDA985]/30 shadow-2xl max-w-[16rem]"
            >
              <ShieldCheck className="w-7 h-7 text-[#BDA985] mb-3" />
              <p className="text-white font-bold leading-snug">
                Legal expertise with a{' '}
                <span className="text-[#BDA985]">commercial mindset.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom band — remaining copy, placed as two supporting columns */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 md:gap-12 pt-10 border-t border-zinc-800"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-[#BDA985]/15 flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#BDA985]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BDA985] mb-3">
                Beyond traditional legal support
              </p>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                Our approach goes beyond traditional legal support. We combine legal expertise with
                commercial understanding to provide practical advice aligned with your business
                objectives.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-[#BDA985]/15 flex items-center justify-center">
              <Scale className="w-5 h-5 text-[#BDA985]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BDA985] mb-3">
                At every stage
              </p>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                Whether you are establishing a business, entering a partnership, reviewing agreements,
                managing regulatory requirements, or planning future growth, we help you understand
                the legal considerations behind every decision.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
