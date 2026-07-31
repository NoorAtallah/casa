'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, HeartHandshake, Layers } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesCta() {
  const router = useRouter();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://kassenanankana.com/wp-content/uploads/2024/04/untitled-122-1.jpg"
          alt="Speak with Casa Di Consiglio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-[#6B5B47]/80" />
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
          <HeartHandshake className="w-4 h-4 text-[#BDA985] mr-3" />
          <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
            Let&apos;s Talk
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8"
        >
          Have an Important{' '}
          <span className="bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">
            Decision Ahead?
          </span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-5 text-base md:text-lg lg:text-xl text-zinc-200 leading-relaxed mb-12"
        >
          <p>
            The right advice can make the difference between uncertainty and opportunity.
          </p>
          <p>
            Speak with Casa Di Consiglio and discover how our boutique advisory approach can support
            your next step.
          </p>
        </motion.div>

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
            onClick={() => router.push('/about')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 rounded-2xl font-bold text-base md:text-lg uppercase tracking-wide border-2 border-[#BDA985] text-[#BDA985] hover:bg-[#BDA985] hover:text-zinc-900 transition-colors duration-300"
          >
            <span className="flex items-center justify-center">
              <Layers className="w-5 h-5 mr-3" />
              About Casa Di Consiglio
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
