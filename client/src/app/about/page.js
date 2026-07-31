'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, Users, Shield, Award, Scale, TrendingUp, FileText, Handshake, ArrowRight, CheckCircle, Star, Globe, Clock, Target, Eye, Heart, Play, Wrench, Ear, BarChart3, Lightbulb, LifeBuoy, Gem, Layers, GraduationCap, Quote, ShieldCheck } from 'lucide-react';

export default function AboutUsPage() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  const philosophyPillars = [
    {
      icon: Wrench,
      title: "Practical",
      description: "Focused on solutions that can be implemented and create real value.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTubDJ5fAOfx2kApzKurbO5HmAdEsfqGtqt11rJF6Zb3k4qgYwT3zdQmgM&s=10"
    },
    {
      icon: Target,
      title: "Strategic",
      description: "Considering both immediate requirements and long-term objectives.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format"
    },
    {
      icon: Users,
      title: "Personalised",
      description: "Tailored to each client's unique circumstances, goals, and challenges.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop&auto=format"
    },
    {
      icon: Eye,
      title: "Forward-Looking",
      description: "Helping clients anticipate opportunities and challenges before they arise.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop&auto=format"
    }
  ];

  const approachSteps = [
    {
      icon: Ear,
      title: "Listen",
      description: "We take the time to understand your business, objectives, challenges, and ambitions."
    },
    {
      icon: BarChart3,
      title: "Analyse",
      description: "We evaluate the legal, commercial, financial, and strategic considerations behind each decision."
    },
    {
      icon: Lightbulb,
      title: "Advise",
      description: "We provide clear recommendations designed to support informed decision-making."
    },
    {
      icon: LifeBuoy,
      title: "Support",
      description: "We remain a trusted partner beyond the initial engagement, supporting clients as their needs evolve."
    }
  ];

  const differentiators = [
    {
      icon: Gem,
      title: "Boutique by Choice",
      paragraphs: [
        "Our boutique structure allows us to provide a level of attention, accessibility, and personal involvement that larger firms often cannot offer.",
        "Clients work directly with experienced advisors who understand their objectives and provide solutions aligned with their specific needs."
      ]
    },
    {
      icon: Layers,
      title: "Multidisciplinary Perspective",
      paragraphs: [
        "Business decisions rarely involve only one area of expertise.",
        "By combining legal, business, and financial perspectives, we help clients see the complete picture before making important decisions."
      ]
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      paragraphs: [
        "We believe the strongest advisory relationships are built on trust, transparency, and shared objectives.",
        "Our goal is not simply to complete assignments; our goal is to become a trusted advisor throughout our clients' journey."
      ]
    }
  ];

  const clientTypes = [
    { icon: Lightbulb, label: "Entrepreneurs launching new ventures" },
    { icon: TrendingUp, label: "Small and medium-sized businesses seeking growth" },
    { icon: Building2, label: "Family-owned businesses navigating strategic decisions" },
    { icon: Target, label: "Investors evaluating opportunities" },
    { icon: Globe, label: "Companies expanding into new markets" },
    { icon: GraduationCap, label: "Organisations seeking professional development solutions" }
  ];

  const founderParagraphs = [
    "At Casa Di Consiglio, we believe that every important decision deserves thoughtful consideration, strategic insight, and trusted advice.",
    "Throughout my professional journey spanning more than 25 years in the legal field, I have had the privilege of working across different legal systems and business environments, combining experience in legal advisory, judicial practice, corporate matters, dispute resolution, and international cross-border consultations.",
    "My career has included serving as a Judge of the Court of First Instance in Amman, Jordan, where I handled complex civil, commercial, administrative, and criminal matters, as well as contributing to the development of judicial practices and legal frameworks. I have also worked as a Senior Legal Counsel in Abu Dhabi, advising businesses and organisations on corporate, commercial, and strategic legal matters.",
    "My international experience in Spain, including my engagement with Banco Santander in Madrid, provided valuable exposure to international financial transactions, cross-border agreements, and negotiations involving different legal and cultural environments.",
    "These experiences shaped my belief that effective advisory is not only about understanding laws and regulations; it is about understanding the commercial realities, challenges, and ambitions behind every decision.",
    "I founded Casa Di Consiglio with a vision to create a boutique advisory firm that helps clients navigate complex challenges and make informed choices with confidence.",
    "Throughout my career, I have seen that businesses and individuals often need more than technical advice — they need practical solutions that consider their objectives, risks, and opportunities.",
    "Casa Di Consiglio was established to provide personalised, solution-driven advisory support, combining legal expertise, business understanding, and strategic insight to help clients overcome challenges and move forward.",
    "Through our network of qualified bilingual professionals and international experience across the Middle East, Europe, and beyond, we support entrepreneurs, businesses, and investors with trusted guidance tailored to their unique needs."
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
                    <span className="block">ABOUT CASA</span>
                    <span className="block" style={{ color: '#bda985' }}>DI CONSIGLIO</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-light">
                    Your Trusted Advisor Before Every Important Decision
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Intro Copy */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto text-left md:text-center space-y-5 text-base md:text-lg text-gray-700 leading-relaxed"
          >
            <p>
              At Casa Di Consiglio, we believe that every important business decision deserves thoughtful analysis, strategic insight, and trusted advice.
            </p>
            <p>
              We are a boutique consulting and advisory firm in Dubai, supporting entrepreneurs, businesses, investors, and family enterprises through integrated legal advisory, business consulting, financial advisory, and professional learning solutions.
            </p>
            <p>
              Our role extends beyond providing individual services. We work alongside our clients as trusted advisors, helping them understand opportunities, manage risks, and make confident decisions that support long-term success.
            </p>
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
                    Our Story
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-black leading-tight">
                A Boutique Advisory Firm Built Around <span style={{ color: '#bda985' }}>Better Decisions</span>
              </h2>

              <div className="text-gray-700 space-y-4 leading-relaxed">
                <p>
                  Casa Di Consiglio was founded on a simple belief: businesses do not need more information; they need better guidance.
                </p>
                <p>
                  In an increasingly complex business environment, decisions often require a combination of legal understanding, commercial awareness, financial insight, and strategic thinking.
                </p>
                <p>
                  Many businesses seek separate advisors for separate challenges. However, the most important decisions rarely exist in isolation.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "A new investment may require legal structuring and financial analysis.",
                  "A business expansion may require strategic planning, regulatory understanding, and commercial evaluation.",
                  "A partnership may require contractual protection and long-term strategic alignment."
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-4 h-4 mr-3 mt-1 flex-shrink-0" style={{color: '#bda985'}} />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                Casa Di Consiglio brings these perspectives together to provide practical, integrated advice designed around each client&apos;s objectives.
              </p>
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
              OUR <span style={{ color: '#bda985' }}>PHILOSOPHY</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Decision Intelligence: Turning Complexity into Clarity
            </h3>
            <div className="text-lg text-gray-700 font-light max-w-3xl mx-auto space-y-4 text-left md:text-center">
              <p>
                Our approach is built around Decision Intelligence — helping clients make better decisions by combining knowledge, experience, and strategic thinking.
              </p>
              <p>
                We believe successful advisory is not about providing generic recommendations. It is about understanding the context behind every decision and delivering advice that is:
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyPillars.map((service, index) => {
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
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
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
              MESSAGE FROM THE <span style={{ color: '#bda985' }}>FOUNDER</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-light max-w-3xl mx-auto">
              A Trusted Advisor Before Every Important Decision
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Founder Portrait */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-2 lg:sticky lg:top-28"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(189,169,133,0.1), rgba(255,255,255,0.9))',
                  border: '3px solid rgba(189,169,133,0.2)'
                }}
              >
                <img
                  src="/images/6.jpeg"
                  alt="Dr. Diaa Abu Fannas, Founder of Casa Di Consiglio"
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Dr. Diaa Abu Fannas</h3>
                  <p className="text-sm font-semibold" style={{ color: '#bda985' }}>Founder</p>
                  <p className="text-sm opacity-80">Casa Di Consiglio</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Founder Letter */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-3 relative p-8 md:p-10 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.05))',
                border: '2px solid rgba(189,169,133,0.2)',
                boxShadow: '0 10px 30px rgba(189,169,133,0.12)'
              }}
            >
              <Quote className="w-10 h-10 mb-6" style={{ color: 'rgba(189,169,133,0.5)' }} />

              <div className="space-y-5 text-gray-700 leading-relaxed">
                {founderParagraphs.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? 'text-lg font-medium text-black' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(189,169,133,0.3)' }}>
                <p className="text-xl font-bold text-black">Dr. Diaa Abu Fannas</p>
                <p className="font-semibold" style={{ color: '#bda985' }}>Founder</p>
                <p className="text-gray-600">Casa Di Consiglio</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Values with Images */}
        <motion.div 
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              OUR <span style={{ color: '#bda985' }}>APPROACH</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              From Understanding to Action
            </h3>
            <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
              Every client relationship begins with understanding.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approachSteps.map((value, index) => {
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

        {/* Why Casa Di Consiglio */}
        <motion.div variants={containerVariants} className="mb-24">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              WHY CASA <span style={{ color: '#bda985' }}>DI CONSIGLIO</span>
            </h2>
            <div
              className="w-24 h-1 rounded-full mx-auto"
              style={{ background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)' }}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group p-8 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    border: '2px solid rgba(189,169,133,0.2)',
                    boxShadow: '0 10px 30px rgba(189,169,133,0.1)'
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(189,169,133,0.2), rgba(189,169,133,0.1))',
                      border: '2px solid rgba(189,169,133,0.2)'
                    }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: '#bda985' }} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-[#bda985] transition-colors duration-300 mb-4">
                    {item.title}
                  </h3>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    {item.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Who We Support */}
        <motion.div variants={containerVariants} className="mb-24">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              WHO WE <span style={{ color: '#bda985' }}>SUPPORT</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Advising Businesses, Entrepreneurs, and Investors
            </h3>
            <p className="text-lg text-gray-700 font-light">Casa Di Consiglio works with:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {clientTypes.map((client, index) => {
              const ClientIcon = client.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group flex items-center gap-4 p-6 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.05))',
                    border: '2px solid rgba(189,169,133,0.2)',
                    boxShadow: '0 10px 30px rgba(189,169,133,0.08)'
                  }}
                >
                  <div
                    className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(189,169,133,0.2), rgba(189,169,133,0.1))',
                      border: '2px solid rgba(189,169,133,0.2)'
                    }}
                  >
                    <ClientIcon className="w-6 h-6" style={{ color: '#bda985' }} />
                  </div>
                  <span className="text-black font-semibold leading-snug group-hover:text-[#bda985] transition-colors duration-300">
                    {client.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            variants={itemVariants}
            className="max-w-4xl mx-auto text-center text-base md:text-lg text-gray-700 leading-relaxed"
          >
            Whether you are starting, growing, restructuring, or transforming your business, Casa Di Consiglio provides the clarity and expertise needed to move forward with confidence.
          </motion.p>
        </motion.div>

        {/* Our Commitment */}
        <motion.div variants={containerVariants} className="mb-24">
          <motion.div
            variants={cardVariants}
            className="relative p-10 md:p-16 rounded-3xl text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.08))',
              border: '2px solid rgba(189,169,133,0.25)',
              boxShadow: '0 20px 40px rgba(189,169,133,0.12)'
            }}
          >
            <div
              className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-8"
              style={{
                background: 'linear-gradient(135deg, rgba(189,169,133,0.2), rgba(189,169,133,0.1))',
                border: '2px solid rgba(189,169,133,0.2)'
              }}
            >
              <ShieldCheck className="w-8 h-8" style={{ color: '#bda985' }} />
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              OUR <span style={{ color: '#bda985' }}>COMMITMENT</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">
              Advice That Creates Confidence
            </h3>

            <div className="max-w-3xl mx-auto space-y-5 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>At Casa Di Consiglio, we measure success by the value we create for our clients.</p>
              <p>
                Every engagement is approached with professionalism, discretion, and a commitment to delivering advice that supports better decisions and stronger outcomes.
              </p>
              <p className="text-lg md:text-xl font-bold text-black">
                Because when decisions matter, having the right advisor matters.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={containerVariants} className="mb-8">
          <motion.div
            variants={cardVariants}
            className="relative p-10 md:p-16 rounded-3xl text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #18181b, #27272a)',
              border: '2px solid rgba(189,169,133,0.3)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.25)'
            }}
          >
            <div
              className="absolute -top-24 left-1/2 w-96 h-96 rounded-full blur-3xl"
              style={{ background: 'rgba(189,169,133,0.12)', transform: 'translateX(-50%)' }}
            />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 max-w-4xl mx-auto leading-tight">
                Ready to Discuss Your Next <span style={{ color: '#bda985' }}>Important Decision?</span>
              </h2>

              <p className="text-lg md:text-xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Whether you need legal guidance, business advice, financial insight, or strategic support, Casa Di Consiglio is ready to help.
              </p>

              <Link href="/contact">
                <button
                  className="group relative overflow-hidden px-10 py-5 rounded-2xl font-bold text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105"
                  style={{ background: '#bda985', color: '#18181b' }}
                >
                  <div className="relative flex items-center justify-center">
                    Schedule a Consultation
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}