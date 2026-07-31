'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Mic, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const highlights = [
  { icon: GraduationCap, label: '10+ years teaching Spanish' },
  { icon: Sparkles, label: 'Spanish Language & Translation, Lebanese University' },
  { icon: Mic, label: 'Theatre, voice & storytelling informed' },
  { icon: Users, label: 'One-to-one coaching & conversation sessions' },
];

const paragraphs = [
  'Cynthia Habib is a Spanish language educator and translator with over 10 years of experience helping individuals develop confidence and fluency in Spanish through personalised and practical learning experiences.',
  'She holds a degree in Spanish Language and Translation from the Lebanese University and has extensive experience teaching Spanish to learners of different ages, backgrounds, and proficiency levels.',
  'Cynthia believes that learning a language is not only about memorising vocabulary and grammar; it is about developing the ability to communicate, connect, and engage with different cultures. Her teaching approach combines language education with insights from theatre, psychology, philosophy, voice performance, and visual storytelling to create immersive learning experiences that encourage confidence, creativity, and real communication.',
  'Throughout her career, Cynthia has taught in schools, universities, and private educational institutions, supporting students with different goals, including relocation, professional development, higher education, travel, and building stronger connections with Spanish-speaking communities.',
  'Her approach focuses on transforming language knowledge into practical communication by helping learners speak naturally, overcome hesitation, and develop the confidence to use Spanish in real-life situations.',
  'Through personalised one-to-one coaching and interactive conversation sessions, Cynthia creates tailored learning journeys designed around each learner’s objectives, strengths, and areas for improvement.',
  'At Casa Academy, Cynthia brings her passion for language, culture, and communication to help individuals and professionals discover Spanish as a skill that opens new personal and professional opportunities.',
];

export default function Instructor() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#BDA985]/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          background: `radial-gradient(circle at 80% 20%, #bda985 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="mb-14"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-white border-2 border-[#bda985] shadow-lg mb-6"
          >
            Meet Your Instructor
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-24 h-1 rounded-full"
            style={{ background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)' }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: '3px solid rgba(189,169,133,0.25)' }}
            >
              <img
                src="/images/5.jpeg"
                alt="Cynthia Habib, Spanish Language Educator at Casa Academy"
                className="w-full h-[440px] sm:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 text-white">
                <h3 className="text-2xl md:text-3xl font-black mb-1">Cynthia Habib</h3>
                <p className="text-sm font-bold uppercase tracking-wider" style={{ color: '#bda985' }}>
                  Spanish Language Educator
                </p>
              </div>
            </div>

            {/* Highlight chips */}
            <div className="grid gap-3 mt-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.07))',
                      border: '1px solid rgba(189,169,133,0.25)',
                    }}
                  >
                    <Icon className="w-4 h-4 shrink-0" style={{ color: '#bda985' }} />
                    <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.08 }}
            className="lg:col-span-7"
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl md:text-4xl font-black text-black leading-tight mb-8"
            >
              Language, culture and{' '}
              <span style={{ color: '#bda985' }}>real communication</span>
            </motion.h2>

            <div className="space-y-5">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={
                    index === 0
                      ? 'text-lg md:text-xl text-black font-semibold leading-relaxed pl-5 border-l-2 border-[#bda985]'
                      : 'text-base md:text-lg text-gray-700 leading-relaxed'
                  }
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
