'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldAlert, Wrench, Sprout } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const approach = [
  {
    icon: Search,
    title: 'Understanding Your Business',
    description:
      'We take the time to understand your objectives, operations, industry, and challenges before providing recommendations.',
  },
  {
    icon: ShieldAlert,
    title: 'Identifying Risks',
    description:
      'We help identify potential legal and commercial risks before they become obstacles.',
  },
  {
    icon: Wrench,
    title: 'Providing Practical Solutions',
    description:
      'Our advice is focused on solutions that support business objectives while protecting your interests.',
  },
  {
    icon: Sprout,
    title: 'Supporting Long-Term Growth',
    description:
      'We work with clients beyond individual matters, becoming trusted advisors throughout their business journey.',
  },
];

export default function LegalApproach() {
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy + cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-white border-2 border-[#bda985] shadow-lg mb-8"
            >
              Our Legal Advisory Approach
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6"
            >
              More Than Legal Advice —{' '}
              <span style={{ color: '#bda985' }}>Strategic Guidance</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg text-gray-700 leading-relaxed mb-4"
            >
              Businesses require legal advisors who understand not only the law but also the
              commercial realities behind every decision.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg font-bold text-black mb-8"
            >
              Our legal advisory approach focuses on:
            </motion.p>

            <div className="space-y-5">
              {approach.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    whileHover={{ x: 6 }}
                    className="group flex items-start gap-5 p-6 rounded-2xl"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.06))',
                      border: '2px solid rgba(189,169,133,0.2)',
                      boxShadow: '0 10px 30px rgba(189,169,133,0.08)',
                    }}
                  >
                    <div
                      className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(189,169,133,0.25), rgba(189,169,133,0.1))',
                        border: '2px solid rgba(189,169,133,0.2)',
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#bda985' }} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-2 group-hover:text-[#bda985] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative h-[420px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.squarespace-cdn.com/content/v1/59b27d89cd39c304a1265209/a8694a02-abcd-4b73-a6c7-d0ee6782ab1c/pexels-sora-shimazaki-5669619.jpg"
                alt="Legal advisory approach"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 45%, rgba(189,169,133,0.4) 100%)',
                }}
              />
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:block absolute -bottom-8 -left-8 p-6 rounded-2xl bg-white shadow-2xl max-w-xs"
              style={{ border: '2px solid rgba(189,169,133,0.3)' }}
            >
              <p className="text-black font-bold text-lg leading-snug">
                Legal expertise, paired with{' '}
                <span style={{ color: '#bda985' }}>commercial understanding.</span>
              </p>
            </motion.div>

            <div
              className="hidden lg:block absolute -z-10 -right-6 -top-6 w-40 h-40 rounded-3xl"
              style={{ border: '2px solid rgba(189,169,133,0.4)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
