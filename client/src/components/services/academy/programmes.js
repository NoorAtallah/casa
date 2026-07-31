'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, TrendingUp, Briefcase, Check } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const programmes = [
  {
    level: 'A1 · A2',
    icon: Sprout,
    title: 'Beginner Spanish',
    description: 'Designed for individuals starting their Spanish journey.',
    items: [
      'Basic vocabulary',
      'Everyday conversations',
      'Pronunciation',
      'Essential grammar',
      'Building communication confidence',
    ],
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&h=600&fit=crop&auto=format',
  },
  {
    level: 'B1 · B2',
    icon: TrendingUp,
    title: 'Intermediate Spanish',
    description: 'Designed for learners who want to improve fluency and communication.',
    items: [
      'Conversation skills',
      'Expanded vocabulary',
      'Grammar development',
      'Real-life communication scenarios',
    ],
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=600&fit=crop&auto=format',
  },
  {
    level: 'Corporate',
    icon: Briefcase,
    title: 'Business Spanish',
    description:
      'Designed for professionals and organisations operating in international environments.',
    items: [
      'Business communication',
      'Professional vocabulary',
      'Meetings and negotiations',
      'Client interactions',
      'Cross-cultural communication',
    ],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop&auto=format',
  },
];

export default function Programmes() {
  return (
    <section id="programmes" className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            linear-gradient(45deg, rgba(189,169,133,0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(189,169,133,0.05) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(189,169,133,0.05) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(189,169,133,0.05) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="max-w-3xl mb-16"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-white border-2 border-[#bda985] shadow-lg mb-6"
          >
            Our Spanish Language Programmes
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6"
          >
            Practical Learning Tailored to{' '}
            <span style={{ color: '#bda985' }}>Your Goals</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-base md:text-lg text-gray-700 leading-relaxed"
          >
            Our Spanish programmes are designed around the learner&apos;s objectives, level, and
            communication needs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programmes.map((programme, index) => {
            const Icon = programme.icon;
            return (
              <motion.div
                key={programme.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
                whileHover={{ y: -10 }}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white shadow-xl"
                style={{
                  border: '1px solid rgba(189,169,133,0.25)',
                  boxShadow: '0 10px 30px rgba(189,169,133,0.12)',
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    src={programme.image}
                    alt={programme.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(189,169,133,0.35) 100%)',
                    }}
                  />

                  <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: '#bda985' }}
                    >
                      {programme.level}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ background: 'rgba(189,169,133,0.95)' }}
                    >
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-[#bda985] transition-colors duration-300">
                    {programme.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-6">{programme.description}</p>

                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#bda985] mb-4">
                    Focus areas
                  </p>

                  <div className="space-y-3">
                    {programme.items.map((item) => (
                      <div key={item} className="flex items-start">
                        <span
                          className="w-5 h-5 mr-3 mt-0.5 shrink-0 rounded-full flex items-center justify-center"
                          style={{ background: 'rgba(189,169,133,0.2)' }}
                        >
                          <Check className="w-3 h-3" style={{ color: '#bda985' }} />
                        </span>
                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="w-full h-1 rounded-full mt-auto pt-0 mb-0"
                    style={{
                      marginTop: '2rem',
                      background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
