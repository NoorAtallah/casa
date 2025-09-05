'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Shield, Award, Scale, TrendingUp, FileText, Handshake, ArrowRight, CheckCircle, Star, Globe, Clock, Target, Eye, Heart, Play } from 'lucide-react';

export default function AboutUsPage() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  const coreServices = [
    {
      icon: FileText,
      title: "Assist in preparatin of Documentation",
      description: "Articles of Association, MOA, Shareholding Agreements, and comprehensive corporate documentation",
      features: ["Articles of Association", "MOA Preparation", "Shareholding Agreements", "Corporate Documentation"],
      image: "https://www.bridgelawllp.com/wp-content/uploads/2015/05/bridge_law_llp_diy_legal_documents.jpg"
    },
    {
      icon: Shield,
      title: "Confidentiality & NDAs", 
      description: "Non-disclosure agreements, confidentiality agreements, and privacy protection services",
      features: ["Non-Disclosure Agreements", "Confidentiality Agreements", "Privacy Protection", "Data Security"],
      image: "https://images.lawpath.com/2020/01/stencil.new-blog-image-71.jpg"
    },
    {
      icon: Handshake,
      title: "Contracts & Agreements",
      description: "Purchase and sales agreements, contract drafting, and comprehensive agreement review services",
      features: ["Purchase & Sales Agreements", "Contract Drafting", "Agreement Review", "Legal Analysis"],
      image: "https://www.lawbase.com.au/wp-content/uploads/2023/09/Do-we-have-an-agreement-contract-law-1024x682.jpg.webp"
    },
    {
      icon: Scale,
      title: "Study, Research and Advice",
      description: "Expert legal opinions, professional advisory services, and strategic legal consulting",
      features: ["Legal Standing Research and Professional Advice", "Strategy and Analysis", "Risk Assessment"],
      image: "https://kassenanankana.com/wp-content/uploads/2024/04/untitled-122-1.jpg"
    }
  ];

  const companyValues = [
    {
      icon: Award,
      title: "Offer Service Quality",
      description: "We deliver exceptional, high-quality services that exceed expectations and set industry standards.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&auto=format"
    },
    {
      icon: Users,
      title: "Personalized Approach", 
      description: "Tailored solutions designed specifically for our client's unique needs, ensuring maximum relevance and effectiveness.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop&auto=format"
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective Excellence",
      description: "Professional services offered at reasonable rates with flexible arrangements.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&auto=format"
    },
    {
      icon: Globe,
      title: "Comprehensive Coverage",
      description: "Services extending across multiple lines of businesses and industry sectors.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop&auto=format"
    }
  ];



  const teamMembers = [
    {
      name: "Dr.Dia",
      role: "Founder and Director",
      image: "/images/4.png"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
        
        {/* Geometric Patterns */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at 25% 25%, #bda985 2px, transparent 2px),
                        radial-gradient(circle at 75% 75%, #bda985 1px, transparent 1px)`,
            backgroundSize: '50px 50px, 25px 25px'
          }}
        />

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i * 8)}%`,
              width: `${20 + i * 5}px`,
              height: `${20 + i * 5}px`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: `linear-gradient(45deg, rgba(189,169,133,0.2), transparent)`,
                filter: 'blur(1px)'
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          variants={containerVariants}
          className="text-center mb-20"
        >
      
          
          <motion.div className="relative mb-12">
            {/* Hero Image */}
            <div className="relative h-64 md:h-80 lg:h-96 mb-8 rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                src="https://www.burgerhuyserattorneys.co.za/wp-content/uploads/2025/04/Top-law-firms-in-Centurion-1.jpg"
                alt="Casa Di Consiglio Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                    <span className="block">CASA DI</span>
                    <span className="block" style={{ color: '#bda985' }}>CONSIGLIO</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-light">
                    Business Consulting & Legal Studies and Research Services
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>



        {/* Company Story with Images */}
        <motion.div 
          variants={itemVariants}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://d1imjpjik7kc4g.cloudfront.net/images/5-Law-Firm-Titles-You-Should-Know-About-new.jpg"
                  alt="Modern Office"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              <div 
                className="inline-block px-4 py-2 rounded-full border"
                style={{
                  background: 'rgba(189,169,133,0.1)',
                  borderColor: 'rgba(189,169,133,0.3)'
                }}
              >
                <div className="flex items-center">
                  <Building2 className="w-4 h-4 mr-2" style={{color: '#bda985'}} />
                  <span className="font-bold text-xs uppercase tracking-wider" style={{color: '#bda985'}}>
                    Reg. No. 4202724.01 SPC
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-black">
                Expertise
              </h2>

              <div className="text-gray-700 space-y-4 leading-relaxed">
               
                <p>

We specialise in providing professional personalised service
to both companies and individuals by conducting thorough
studies and research unique to every client in order to provide
a tailored innovative solution to enhance client&apos;s business, commercial and
legal standing</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "High-complexity solutions",
                  "Cost-effective packages", 
                  "Flexible arrangements",
                  "Elite service quality"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-4 h-4 mr-3 flex-shrink-0" style={{color: '#bda985'}} />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Services with Images */}
        <motion.div 
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              OUR <span style={{ color: '#bda985' }}>SERVICES</span>
            </h2>
            <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
              Comprehensive legal documentation and advisory services backed by years of experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="group rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    border: '1px solid rgba(189,169,133,0.2)',
                    boxShadow: hoveredService === index 
                      ? '0 20px 40px rgba(189,169,133,0.2)' 
                      : '0 10px 30px rgba(189,169,133,0.1)'
                  }}
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      variants={imageVariants}
                      whileHover="hover"
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm"
                        style={{ background: 'rgba(189,169,133,0.9)' }}
                      >
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black group-hover:text-[#bda985] transition-colors duration-300 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center"
                          whileHover={{ x: 4 }}
                        >
                          <div className="w-2 h-2 rounded-full mr-3" style={{background: '#bda985'}} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              WHO WE <span style={{ color: '#bda985' }}>ARE</span>
            </h2>
            <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
              Expert  dedicated to delivering exceptional business solutions
            </p>
          </motion.div>

          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="text-center group max-w-sm"
              >
                <div className="relative mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-64 h-64 mx-auto rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(189,169,133,0.1), rgba(255,255,255,0.9))',
                      border: '3px solid rgba(189,169,133,0.2)'
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                      style={{ 
                        background: 'linear-gradient(135deg, #bda985, #d4c4a0)',
                        border: '3px solid white'
                      }}
                    >
                      <Star className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>
                <div className="px-6">
                  <h3 className="text-2xl font-bold text-black group-hover:text-[#bda985] transition-colors duration-300 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">{member.role}</p>
                  <div 
                    className="w-16 h-1 rounded-full mx-auto"
                    style={{
                      background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values with Images */}
        <motion.div 
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              WHY CHOOSE <span style={{ color: '#bda985' }}>US</span>
            </h2>
            <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
              The values and principles that set us apart in the legal consulting industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredValue(index)}
                  onHoverEnd={() => setHoveredValue(null)}
                  className="group p-8 rounded-2xl transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.05))',
                    border: '2px solid rgba(189,169,133,0.2)',
                    boxShadow: hoveredValue === index 
                      ? '0 20px 40px rgba(189,169,133,0.2)' 
                      : '0 10px 30px rgba(189,169,133,0.1)',
                    borderColor: hoveredValue === index ? '#bda985' : 'rgba(189,169,133,0.2)'
                  }}
                >
                  <div className="flex items-start mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-all duration-300"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(189,169,133,0.2), rgba(189,169,133,0.1))',
                        border: '2px solid rgba(189,169,133,0.2)'
                      }}
                    >
                      <IconComponent className="w-8 h-8" style={{color: '#bda985'}} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black group-hover:text-[#bda985] transition-colors duration-300 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                  <div 
                    className="w-full h-1 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)',
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

 
      </div>
    </motion.section>
  );
}