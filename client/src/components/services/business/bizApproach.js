'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Search, BarChart3, Lightbulb, LifeBuoy } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const questions = [
  'Should we expand into a new market?',
  'Is our business financially ready for growth?',
  'How can we improve profitability?',
  'What is the true value of our company?',
  'Should we pursue an investment opportunity?',
];

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Understanding',
    description:
      'We begin by understanding your business model, objectives, challenges, and growth ambitions.',
  },
  {
    step: '02',
    icon: BarChart3,
    title: 'Assessing',
    description:
      'We analyse financial performance, market opportunities, operational considerations, and strategic options.',
  },
  {
    step: '03',
    icon: Lightbulb,
    title: 'Advising',
    description:
      'We provide clear recommendations designed to support informed decision-making.',
  },
  {
    step: '04',
    icon: LifeBuoy,
    title: 'Supporting',
    description:
      'We continue to support clients as strategies are implemented and businesses evolve.',
  },
];

export default function BizApproach() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          background: `radial-gradient(circle at 20% 20%, #bda985 2px, transparent 2px),
                       radial-gradient(circle at 80% 70%, #bda985 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 30px 30px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-white border-2 border-[#bda985] shadow-lg mb-6"
            >
              Our Advisory Approach
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6"
            >
              Turning Business Challenges into{' '}
              <span style={{ color: '#bda985' }}>Strategic Opportunities</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg font-bold text-black mb-8"
            >
              Every business faces critical decisions:
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg text-gray-700 leading-relaxed"
            >
              At Casa Di Consiglio, we help clients answer these questions by combining financial
              analysis with practical business advice.
            </motion.p>
          </motion.div>

          {/* Question cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {questions.map((question, index) => (
              <motion.div
                key={question}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative p-7 rounded-2xl overflow-hidden ${
                  index === questions.length - 1 ? 'sm:col-span-2' : ''
                }`}
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.08))',
                  border: '2px solid rgba(189,169,133,0.22)',
                  boxShadow: '0 10px 30px rgba(189,169,133,0.1)',
                }}
              >
                <HelpCircle
                  className="w-7 h-7 mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: '#bda985' }}
                />
                <p className="text-lg md:text-xl font-bold text-black leading-snug">{question}</p>

                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: '#bda985' }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg font-bold text-black mb-8"
        >
          Our advisory approach focuses on:
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative p-7 md:p-8 rounded-2xl bg-white"
                style={{
                  border: '2px solid rgba(189,169,133,0.2)',
                  boxShadow: '0 10px 30px rgba(189,169,133,0.1)',
                }}
              >
                <span
                  className="absolute top-6 right-7 text-4xl font-black opacity-10"
                  style={{ color: '#bda985' }}
                >
                  {item.step}
                </span>

                <div
                  className="w-[3.25rem] h-[3.25rem] rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(189,169,133,0.25), rgba(189,169,133,0.1))',
                    border: '2px solid rgba(189,169,133,0.2)',
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#bda985' }} />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
