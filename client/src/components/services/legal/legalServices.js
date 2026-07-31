'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, FileSignature, Network, ShieldCheck, SearchCheck, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: Building2,
    title: 'Corporate & Commercial Advisory',
    intro: 'Supporting businesses with legal guidance throughout their lifecycle.',
    listLabel: 'Our services include:',
    items: [
      'Company Formation & Structuring',
      'Corporate Documentation',
      'Shareholder Agreements',
      'Corporate Governance',
      'Board Advisory',
      'Business Restructuring',
      'Corporate Legal Support',
    ],
    outro:
      'We help businesses establish strong legal foundations and create structures that support sustainable growth.',
    image:
      'https://www.bridgelawllp.com/wp-content/uploads/2015/05/bridge_law_llp_diy_legal_documents.jpg',
  },
  {
    icon: FileSignature,
    title: 'Commercial Contracts & Agreements',
    intro:
      'Strong agreements are essential for protecting business relationships and reducing risk.',
    listLabel: 'We assist businesses with:',
    items: [
      'Contract Drafting',
      'Contract Review',
      'Commercial Agreements',
      'Service Agreements',
      'Partnership Agreements',
      'Non-Disclosure Agreements (NDAs)',
      'Terms & Conditions',
    ],
    outro:
      'Our goal is to ensure agreements are commercially practical, clearly structured, and aligned with your objectives.',
    image:
      'https://i0.wp.com/foresightlaw.com.au/wp-content/uploads/2024/09/Contracts.png?fit=600%2C300&ssl=1',
  },
  {
    icon: Network,
    title: 'Business Structuring & Advisory',
    intro: 'Choosing the right structure is a critical business decision.',
    listLabel: 'We support entrepreneurs, investors, and companies with:',
    items: [
      'Business Structuring Advice',
      'Corporate Setup Considerations',
      'Ownership Structures',
      'Partnership Structures',
      'Expansion Planning',
    ],
    outro:
      'Our advice helps clients evaluate options and select structures that support their strategic goals.',
    image:
      'https://d1imjpjik7kc4g.cloudfront.net/images/5-Law-Firm-Titles-You-Should-Know-About-new.jpg',
  },
  {
    icon: ShieldCheck,
    title: 'Corporate Governance & Compliance',
    intro: 'Strong governance creates transparency, accountability, and long-term value.',
    listLabel: 'Our advisory services include:',
    items: [
      'Corporate Governance Frameworks',
      'Internal Policies',
      'Compliance Reviews',
      'Regulatory Requirements',
      'Risk Management Support',
    ],
    outro: 'We help businesses build governance practices that support responsible growth.',
    image: 'https://images.lawpath.com/2020/01/stencil.new-blog-image-71.jpg',
  },
  {
    icon: SearchCheck,
    title: 'Legal Due Diligence',
    intro:
      'Before making important investments, partnerships, or transactions, understanding legal risks is essential.',
    listLabel: 'Our legal due diligence services help clients evaluate:',
    items: [
      'Contractual Obligations',
      'Corporate Documents',
      'Regulatory Matters',
      'Potential Legal Risks',
      'Business Liabilities',
    ],
    outro: 'Providing clarity before important decisions are made.',
    image: 'https://kassenanankana.com/wp-content/uploads/2024/04/untitled-122-1.jpg',
  },
];

export default function LegalServices() {
  return (
    <section id="legal-services" className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
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
          transition={{ staggerChildren: 0.12 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6"
          >
            OUR LEGAL ADVISORY <span style={{ color: '#bda985' }}>SERVICES</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-32 h-1 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isWide = index === services.length - 1 && services.length % 2 === 1;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 2) * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group rounded-3xl overflow-hidden bg-white shadow-xl ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
                style={{
                  border: '1px solid rgba(189,169,133,0.25)',
                  boxShadow: '0 10px 30px rgba(189,169,133,0.12)',
                }}
              >
                <div className={isWide ? 'lg:flex' : ''}>
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      isWide ? 'h-56 lg:h-auto lg:w-2/5' : 'h-56'
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
                    <div className="absolute bottom-5 left-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ background: 'rgba(189,169,133,0.95)' }}
                      >
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
                      <span className="text-white text-xs font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-7 md:p-8 ${isWide ? 'lg:w-3/5' : ''}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-4 group-hover:text-[#bda985] transition-colors duration-300">
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
