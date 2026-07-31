'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Scale, TrendingUp, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const practiceAreas = [
  {
    icon: Scale,
    title: 'Legal Advisory',
    tagline: 'Practical Legal Guidance to Protect and Support Your Business',
    intro: [
      'Every business decision carries legal implications. Our legal advisory services help businesses establish strong foundations, manage risks, and navigate commercial matters with confidence.',
    ],
    listLabel: 'Our legal advisory services include:',
    items: [
      'Corporate & Commercial Law',
      'Business Structuring',
      'Commercial Contracts & Agreements',
      'Shareholder Agreements',
      'Corporate Governance',
      'Regulatory Compliance',
      'Legal Due Diligence',
    ],
    outro:
      'Whether you are establishing a company, entering a partnership, negotiating agreements, or managing ongoing legal requirements, we provide practical legal solutions aligned with your business objectives.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepP7t6McwVUaGNzLld2PvK6M1NfUHuPfGbGMvrzSv7rfN-W3E2MpLqEw&s=10',
    href: '/services/legal-advisory',
  },
  {
    icon: TrendingUp,
    title: 'Business & Financial Advisory',
    tagline: 'Strategic Insight to Improve Performance and Create Growth',
    intro: [
      'Businesses require more than financial information; they require insight that supports better decisions.',
      'Our business and financial advisory services help organisations evaluate opportunities, improve performance, strengthen financial management, and plan for sustainable growth.',
    ],
    listLabel: 'Our services include:',
    items: [
      'Business Strategy & Growth Advisory',
      'Financial Planning & Analysis',
      'Business Valuation',
      'Financial Modelling',
      'Corporate Finance Advisory',
      'Investment Advisory',
      'Business Performance Improvement',
      'Strategic Partnerships',
    ],
    outro:
      'From developing growth strategies to evaluating investments and improving financial decision-making, we help businesses understand their options and choose the right path forward.',
    image:
      'https://static.vecteezy.com/system/resources/previews/003/049/866/non_2x/financial-advisory-services-group-of-business-advisor-showing-plan-free-photo.jpg',
    href: '/services/business-financial-advisory',
  },
  {
    icon: GraduationCap,
    title: 'Casa Academy',
    tagline: 'Learning Solutions for Individuals and Organisations',
    intro: [
      'Continuous learning strengthens businesses and creates new opportunities.',
      'Casa Academy provides practical learning and development solutions designed to enhance communication, professional capabilities, and international business relationships.',
    ],
    listLabel: 'Our programmes include:',
    items: [
      'Spanish Language Programmes',
      'Business Spanish',
      'Corporate Language Training',
      'Professional Development Workshops',
    ],
    outro:
      'Through Casa Academy, we help individuals and organisations develop skills that support personal and professional growth.',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=900&fit=crop&auto=format',
    href: '/services/spanish-language-programmes',
  },
];

export default function PracticeAreaBlocks() {
  const router = useRouter();

  return (
    <section id="practice-areas" className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      {/* Background pattern */}
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
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-white border-2 border-[#bda985] shadow-lg mb-8"
          >
            Our Practice Areas
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6"
          >
            Supporting Clients Through{' '}
            <span style={{ color: '#bda985' }}>Every Stage of Their Journey</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-32 h-1 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)' }}
          />
        </motion.div>

        {/* Alternating blocks */}
        <div className="space-y-24 md:space-y-32">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={area.title}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`relative ${isReversed ? 'lg:order-2' : ''}`}
                >
                  <div className="relative h-[340px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                    <motion.img
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(189,169,133,0.45) 100%)',
                      }}
                    />

                    {/* Icon badge */}
                    <div className="absolute top-8 left-8">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
                        style={{ background: 'rgba(189,169,133,0.95)' }}
                      >
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                    </div>

                    {/* Service count */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="inline-flex items-center px-5 py-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25">
                        <span className="text-3xl font-black mr-3" style={{ color: '#bda985' }}>
                          {String(area.items.length).padStart(2, '0')}
                        </span>
                        <span className="text-white text-sm font-semibold uppercase tracking-wider">
                          {index === 2 ? 'Programmes' : 'Service Areas'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative offset frame */}
                  <div
                    className={`hidden lg:block absolute -z-10 w-40 h-40 rounded-3xl ${
                      isReversed ? '-right-6 -bottom-6' : '-left-6 -bottom-6'
                    }`}
                    style={{ border: '2px solid rgba(189,169,133,0.4)' }}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ staggerChildren: 0.1 }}
                  className={isReversed ? 'lg:order-1' : ''}
                >
                  <motion.h3
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-3xl md:text-4xl font-black text-black mb-4"
                  >
                    {area.title}
                  </motion.h3>

                  <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-lg md:text-xl font-semibold mb-6"
                    style={{ color: '#bda985' }}
                  >
                    {area.tagline}
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="space-y-4 text-gray-700 leading-relaxed mb-8"
                  >
                    {area.intro.map((paragraph) => (
                      <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                    ))}
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="p-6 rounded-2xl mb-8"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.08))',
                      border: '2px solid rgba(189,169,133,0.25)',
                      boxShadow: '0 10px 30px rgba(189,169,133,0.1)',
                    }}
                  >
                    <p className="font-bold text-black mb-5">{area.listLabel}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {area.items.map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{ x: 4 }}
                          className="flex items-start"
                        >
                          <CheckCircle
                            className="w-4 h-4 mr-3 mt-1 flex-shrink-0"
                            style={{ color: '#bda985' }}
                          />
                          <span className="text-sm text-gray-700 font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-gray-700 leading-relaxed mb-8"
                  >
                    {area.outro}
                  </motion.p>

                  <motion.button
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    onClick={() => router.push(area.href)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden px-9 py-4 rounded-xl font-bold text-sm uppercase tracking-wide shadow-lg"
                    style={{ background: '#bda985', color: '#000000' }}
                  >
                    <span className="relative flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
