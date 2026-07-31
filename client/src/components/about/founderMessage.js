'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const paragraphs = [
  'At Casa Di Consiglio, we believe that every important decision deserves thoughtful consideration, strategic insight, and trusted advice.',
  'Throughout my professional journey spanning more than 25 years in the legal field, I have had the privilege of working across different legal systems and business environments, combining experience in legal advisory, judicial practice, corporate matters, dispute resolution, and international cross-border consultations.',
  'My career has included serving as a Judge of the Court of First Instance in Amman, Jordan, where I handled complex civil, commercial, administrative, and criminal matters, as well as contributing to the development of judicial practices and legal frameworks. I have also worked as a Senior Legal Counsel in Abu Dhabi, advising businesses and organisations on corporate, commercial, and strategic legal matters.',
  'My international experience in Spain, including my engagement with Banco Santander in Madrid, provided valuable exposure to international financial transactions, cross-border agreements, and negotiations involving different legal and cultural environments.',
  'These experiences shaped my belief that effective advisory is not only about understanding laws and regulations; it is about understanding the commercial realities, challenges, and ambitions behind every decision.',
  'I founded Casa Di Consiglio with a vision to create a boutique advisory firm that helps clients navigate complex challenges and make informed choices with confidence.',
  'Throughout my career, I have seen that businesses and individuals often need more than technical advice — they need practical solutions that consider their objectives, risks, and opportunities.',
  'Casa Di Consiglio was established to provide personalised, solution-driven advisory support, combining legal expertise, business understanding, and strategic insight to help clients overcome challenges and move forward.',
  'Through our network of qualified bilingual professionals and international experience across the Middle East, Europe, and beyond, we support entrepreneurs, businesses, and investors with trusted guidance tailored to their unique needs.',
];

export default function FounderMessage() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(189, 169, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 169, 133, 0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.1 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#BDA985] font-semibold text-center mb-5"
        >
          Message from the Founder
        </motion.p>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight mb-10"
        >
          A Trusted Advisor Before Every Important Decision
        </motion.h2>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-8 md:p-12 border border-zinc-800 shadow-2xl"
        >
          <Quote className="w-10 h-10 text-[#BDA985]/40 mb-6" />

          <div className="space-y-5 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
            {paragraphs.map((text) => (
              <p key={text.slice(0, 40)}>{text}</p>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-zinc-800">
            <p className="text-lg md:text-xl font-bold text-white">Dr. Diaa Abu Fannas</p>
            <p className="text-sm md:text-base text-[#BDA985] font-semibold">Founder</p>
            <p className="text-sm md:text-base text-zinc-400">Casa Di Consiglio</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
