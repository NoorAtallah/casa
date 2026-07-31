'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, LineChart, Calculator, Coins, Briefcase, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: Rocket,
    title: 'Business Strategy & Growth Advisory',
    intro:
      'Helping businesses define their direction and identify opportunities for sustainable growth.',
    listLabel: 'Our services include:',
    items: [
      'Business Strategy Development',
      'Growth Planning',
      'Market Expansion Advisory',
      'Business Model Assessment',
      'Strategic Planning',
      'Performance Improvement',
    ],
    outro:
      'We help business owners move from ideas and challenges to clear strategies and actionable plans.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=700&fit=crop&auto=format',
  },
  {
    icon: LineChart,
    title: 'Financial Advisory & Business Performance',
    intro:
      'Providing financial insight to improve decision-making and strengthen business performance.',
    listLabel: 'Our services include:',
    items: [
      'Financial Analysis',
      'Financial Planning & Analysis (FP&A)',
      'Budgeting & Forecasting',
      'Cash Flow Management',
      'Profitability Analysis',
      'Financial Performance Reviews',
    ],
    outro:
      'We help businesses understand their financial position and identify opportunities to improve performance.',
    image:
      'https://www.24forextrading.com/wp-content/uploads/2024/06/Settlement-Funding-and-Lawsuit-Loans.jpg',
  },
  {
    icon: Calculator,
    title: 'Business Valuation & Financial Modelling',
    intro:
      'Supporting entrepreneurs, investors, and companies with financial analysis required for important decisions.',
    listLabel: 'Our services include:',
    items: [
      'Business Valuation',
      'Financial Modelling',
      'Investment Analysis',
      'Scenario Planning',
      'Feasibility Studies',
      'Due Diligence Support',
    ],
    outro:
      'Whether preparing for investment, evaluating an opportunity, or planning a transaction, we provide financial insight to support confident decisions.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=700&fit=crop&auto=format',
  },
  {
    icon: Coins,
    title: 'Corporate Finance & Investment Advisory',
    intro: 'Helping clients evaluate strategic financial opportunities.',
    listLabel: 'Our advisory support includes:',
    items: [
      'Investment Readiness',
      'Capital Planning',
      'Strategic Partnerships',
      'Transaction Support',
      'Investor Presentations',
      'Financial Evaluation of Opportunities',
    ],
    outro:
      'We help businesses and investors assess opportunities with a clear understanding of risks, returns, and strategic impact.',
    image:
      'https://cdn-res.keymedia.com/cms/images/ca/119/0422_638628674961501400.jpg',
  },
  {
    icon: Briefcase,
    title: 'Fractional CFO Advisory',
    intro:
      'Providing experienced financial leadership for businesses that need strategic finance support without the cost of a full-time CFO.',
    listLabel: 'Our Fractional CFO services include:',
    items: [
      'Financial Strategy',
      'Management Reporting',
      'KPI Development',
      'Cash Flow Planning',
      'Budgeting & Forecasting',
      'Financial Decision Support',
      'Business Performance Management',
    ],
    outro:
      'We work alongside business owners and management teams to strengthen financial discipline and support growth.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&h=700&fit=crop&auto=format',
  },
];

export default function BizServices() {
  return (
    <section id="advisory-services" className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
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
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-6"
          >
            Our Business &amp; Financial{' '}
            <span style={{ color: '#bda985' }}>Advisory Services</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-32 h-1 rounded-full"
            style={{ background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)' }}
          />
        </motion.div>

        {/* Alternating rows */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="group rounded-3xl overflow-hidden bg-white shadow-xl lg:flex"
                style={{
                  border: '1px solid rgba(189,169,133,0.25)',
                  boxShadow: '0 10px 30px rgba(189,169,133,0.12)',
                }}
              >
                {/* Image */}
                <div
                  className={`relative h-56 lg:h-auto lg:w-2/5 overflow-hidden ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(189,169,133,0.35) 100%)',
                    }}
                  />
                  <div className="absolute bottom-6 left-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ background: 'rgba(189,169,133,0.95)' }}
                    >
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
                    <span className="text-white text-xs font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-7 md:p-10 lg:w-3/5 ${isReversed ? 'lg:order-1' : ''}`}>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 group-hover:text-[#bda985] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-6">{service.intro}</p>

                  <p className="text-sm font-bold text-black mb-4">{service.listLabel}</p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.items.map((item) => (
                      <motion.div key={item} whileHover={{ x: 4 }} className="flex items-start">
                        <CheckCircle
                          className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0"
                          style={{ color: '#bda985' }}
                        />
                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div
                    className="pt-5 text-sm md:text-base text-gray-700 leading-relaxed"
                    style={{ borderTop: '1px solid rgba(189,169,133,0.3)' }}
                  >
                    {service.outro}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
