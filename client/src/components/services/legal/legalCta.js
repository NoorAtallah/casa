'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, HeartHandshake, Scale } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function LegalCta() {
  const router = useRouter();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://www.bridgelawllp.com/wp-content/uploads/2015/05/bridge_law_llp_diy_legal_documents.jpg"
          alt="Legal advice before important decisions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/92 via-black/82 to-[#6B5B47]/80" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-[#BDA985]/10 blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
        className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-[#BDA985]/40 mb-8"
        >
          <Scale className="w-4 h-4 text-[#BDA985] mr-3" />
          <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
            Legal Advisory
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-8"
        >
          Need Legal Advice Before Making an{' '}
          <span className="bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">
            Important Decision?
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-base md:text-lg lg:text-xl text-zinc-200 leading-relaxed mb-12"
        >
          Whether you are starting a business, reviewing an agreement, managing legal risks, or
          planning your next strategic move, Casa Di Consiglio provides practical legal guidance
          tailored to your objectives.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <motion.button
            onClick={() => router.push('/contact')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group px-10 py-5 rounded-2xl font-bold text-base md:text-lg uppercase tracking-wide shadow-2xl"
            style={{ background: '#bda985', color: '#18181b' }}
          >
            <span className="flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 mr-3" />
              Schedule a Consultation
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </motion.button>

          <motion.button
            onClick={() => router.push('/services')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 rounded-2xl font-bold text-base md:text-lg uppercase tracking-wide border-2 border-[#BDA985] text-[#BDA985] hover:bg-[#BDA985] hover:text-zinc-900 transition-colors duration-300"
          >
            All Advisory Services
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
