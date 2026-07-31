'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MessagesSquare, UserCheck, Globe2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const pillars = [
  {
    icon: MessagesSquare,
    title: 'Practical Communication',
    description: 'Helping learners develop confidence in speaking and understanding Spanish.',
  },
  {
    icon: UserCheck,
    title: 'Personalised Learning',
    description: "Adapting programmes according to the learner's level and objectives.",
  },
  {
    icon: Globe2,
    title: 'Real-World Application',
    description: 'Using scenarios relevant to everyday life and professional environments.',
  },
];

export default function LearningApproach() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute -bottom-40 -right-24 w-96 h-96 rounded-full bg-[#BDA985]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-5"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-white border-2 border-[#bda985] shadow-lg mb-6"
            >
              Our Learning Approach
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6"
            >
              Practical. Engaging.{' '}
              <span style={{ color: '#bda985' }}>Purpose-Driven.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg text-gray-700 leading-relaxed mb-4"
            >
              At Casa Academy, we believe language learning should be connected to real-life
              situations.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg font-bold text-black"
            >
              Our approach focuses on:
            </motion.p>
          </motion.div>

          {/* Pillars */}
          <div className="lg:col-span-7 grid gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="group flex items-start gap-6 p-7 md:p-8 rounded-2xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.07))',
                    border: '2px solid rgba(189,169,133,0.22)',
                    boxShadow: '0 10px 30px rgba(189,169,133,0.1)',
                  }}
                >
                  <div
                    className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(189,169,133,0.25), rgba(189,169,133,0.1))',
                      border: '2px solid rgba(189,169,133,0.2)',
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: '#bda985' }} />
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-[#bda985] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                  </div>

                  <span
                    className="hidden sm:block ml-auto text-4xl font-black opacity-10"
                    style={{ color: '#bda985' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
