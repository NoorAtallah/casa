'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Scale, GraduationCap, ArrowRight, Award, Shield, Compass } from 'lucide-react';
import Link from 'next/link';
import ScrollingArticlesBanner from './ScrollingArticlesBanner';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const practiceAreas = [
  {
    title: 'Legal Advisory',
    icon: Scale,
    tags: ['Corporate & Commercial Law', 'Contracts', 'Governance'],
    href: '/services/legal-advisory',
  },
  {
    title: 'Business & Financial Advisory',
    icon: TrendingUp,
    tags: ['Business Strategy', 'Financial Planning', 'Investment Advisory'],
    href: '/services/business-financial-advisory',
  },
  {
    title: 'Casa Academy',
    icon: GraduationCap,
    tags: ['Spanish Programmes', 'Business Spanish', 'Workshops'],
    href: '/services/spanish-language-programmes',
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-amber-100/50" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background: `radial-gradient(circle at 20% 20%, #8B7355 2px, transparent 2px),
                         radial-gradient(circle at 80% 60%, #8B7355 1px, transparent 1px)`,
            backgroundSize: '60px 60px, 30px 30px',
          }}
        />
        <div className="absolute -top-32 -left-24 w-[30rem] h-[30rem] rounded-full bg-[#BDA985]/25 blur-3xl" />
      </div>

      {/* Floating accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          'top-24 left-6 w-2 h-2 bg-[#8B7355]/50',
          'top-40 right-10 w-1.5 h-1.5 bg-[#8B7355]/70',
          'bottom-40 left-16 w-3 h-3 bg-[#8B7355]/40',
        ].map((cls, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${cls}`}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Credentials */}
      <div className="absolute top-3 right-3 md:top-8 md:right-8 z-20">
        <div className="flex items-center space-x-3 md:space-x-6">
          <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-800 font-medium">
            <Award className="w-4 h-4 text-[#8B7355]" />
            <span className="hidden sm:inline">Boutique</span>
          </div>
          <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-800 font-medium">
            <Shield className="w-4 h-4 text-[#8B7355]" />
            <span className="hidden sm:inline">Personal</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-14 md:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            className="lg:col-span-7"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-center gap-4 mb-7"
            >
              <span className="w-10 h-px bg-[#8B7355]" />
              <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8B7355] font-semibold">
                Casa Di Consiglio
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.08] mb-7"
            >
              Boutique Consulting &amp; Advisory for{' '}
              <span className="text-[#8B7355]">Better Business Decisions</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-lg md:text-xl text-[#382e22] font-semibold pl-5 border-l-2 border-[#8B7355] mb-10 max-w-2xl"
            >
              Helping businesses, entrepreneurs, investors, and family enterprises make informed
              decisions with confidence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-[#6B5B47] to-[#8B7355] text-white px-8 md:px-10 py-4 rounded-full text-sm md:text-base font-bold shadow-xl border border-[#8B7355]/30 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative">Schedule a Consultation</span>
                </motion.span>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center w-full sm:w-auto bg-white/80 backdrop-blur-sm text-[#6B5B47] px-8 md:px-10 py-4 rounded-full text-sm md:text-base font-bold border border-[#8B7355]/40 shadow-lg"
                >
                  Explore Our Practice Areas
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[320px] sm:h-[400px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://curleybusinesslaw.com/wp-content/uploads/2022/09/law-scaled.jpg"
                alt="Casa Di Consiglio boutique advisory"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 55%, rgba(139,115,85,0.55) 100%)',
                }}
              />
              <p className="absolute bottom-7 left-7 right-7 text-white font-bold text-lg md:text-xl leading-snug">
                Your trusted advisor before every important decision.
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:flex absolute -bottom-8 -left-8 items-center gap-4 p-5 rounded-2xl bg-white shadow-2xl border border-[#8B7355]/25"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#8B7355]" />
              </div>
              <p className="text-sm font-bold text-gray-900 leading-snug max-w-[10rem]">
                Boutique by choice.
                <span className="block text-[#8B7355]">Multidisciplinary by design.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Practice areas — compact row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-16 md:mt-20">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Link key={area.title} href={area.href}>
                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group h-full flex flex-col p-6 rounded-2xl bg-white/85 backdrop-blur-sm hover:bg-white border border-gray-200/70 hover:border-[#8B7355]/40 shadow-sm hover:shadow-lg transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 flex items-center justify-center group-hover:from-[#8B7355] group-hover:to-[#6B5B47] transition-colors duration-500">
                      <Icon className="w-6 h-6 text-[#8B7355] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h4 className="font-bold text-base md:text-lg text-gray-900 leading-tight group-hover:text-[#6B5B47] transition-colors duration-300">
                      {area.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#BDA985]/20 text-[#6B5B47] px-2.5 py-1 rounded-full font-medium border border-[#BDA985]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="mt-auto inline-flex items-center text-sm font-bold text-[#6B5B47]">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Supporting copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
          className="mt-14 md:mt-20 grid md:grid-cols-2 gap-8 md:gap-14 pt-10 border-t border-[#8B7355]/20"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7355] mb-3">
              An integrated advisory firm
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              At Casa Di Consiglio, we are a boutique consulting and advisory firm providing
              integrated legal advisory, business consulting, financial advisory, and professional
              learning solutions. We partner with clients to navigate complexity, manage risk, unlock
              opportunities, and make strategic decisions that support long-term success.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7355] mb-3">
              Advice before every decision
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Every important business decision deserves trusted advice. Whether you are launching a
              company, expanding into new markets, negotiating a commercial agreement, restructuring
              your business, or planning your next investment, our role is to help you move forward
              with clarity and confidence.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Articles banner */}
      <div className="relative z-10 pb-14 md:pb-20">
        <ScrollingArticlesBanner />
      </div>
    </section>
  );
};

export default Hero;
