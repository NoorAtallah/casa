'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollExpandHero from '../../components/Scrollexpandhero';
import { 
  Video, 
  Users, 
  Globe, 
  CheckCircle, 
  Star, 
  MessageCircle,
  Clock,
  Award,
  Headphones,
  Send,
  ArrowRight
} from 'lucide-react';

export default function FlowSpanishProgram() {
  const [hoveredProgram, setHoveredProgram] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    program: ''
  });

  const programs = [
    {
      icon: Video,
      title: "Recorded Program (6 Months)",
      description: "Learn at your own pace with comprehensive recorded content",
      features: [
        "Educational video lessons",
        "Story audio with interactive exercises in Spanish",
        "Monthly magazine",
        "Practice exercises",
        "Monthly support",
        "Conversation with a native speaker at the end of the program"
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&auto=format",
      duration: "6 months",
      value: "recorded"
    },
    {
      icon: Users,
      title: "Private Live Classes",
      description: "One-on-one personalized instruction for maximum progress",
      features: [
        "Conversation practice",
        "Pronunciation improvement",
        "Reading comprehension",
        "Writing skills",
        "One or two weekly sessions",
        "Personalized curriculum"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&auto=format",
      duration: "Flexible",
      value: "private"
    },
    {
      icon: MessageCircle,
      title: "Private Conversation Classes",
      description: "Focus on speaking fluency with native expressions",
      features: [
        "Conversation practice",
        "Native pronunciation",
        "Native expressions and idioms",
        "Real-life scenarios",
        "Cultural insights",
        "Confidence building"
      ],
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=250&fit=crop&auto=format",
      duration: "Flexible",
      value: "conversation"
    },
    {
      icon: Users,
      title: "Group Classes (Online Groups)",
      description: "Learn together with peers in an interactive environment",
      features: [
        "3 to 5 students per group",
        "Weekly class sessions",
        "Practical application",
        "Live corrections",
        "Peer learning",
        "Collaborative exercises"
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop&auto=format",
      duration: "Weekly",
      value: "group"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Comprehensive Curriculum",
      description: "A complete program designed specifically for Arabic speakers learning Spanish"
    },
    {
      icon: Globe,
      title: "All Levels Welcome",
      description: "Suitable for beginners, professionals, students, and anyone interested in Spanish"
    },
    {
      icon: Headphones,
      title: "Modern Learning Methods",
      description: "Combining videos, audio, magazines, and practical conversations"
    },
    {
      icon: Users,
      title: "Expert Instruction",
      description: "Led by Cynthia Habib, the pioneer Arabic Spanish language trainer"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! The Casa team will contact you within 24 hours.');
  };

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

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Elegant Hero Section */}
      <div className="relative overflow-hidden">
        {/* Luxurious Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Primary Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
          
          {/* Subtle Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop&auto=format)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)'
            }}
          />
          
          {/* Radiant Glow Effects */}
          <div className="absolute inset-0">
            <div 
              className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
              style={{
                background: 'radial-gradient(circle, #bda985 0%, transparent 70%)'
              }}
            />
            <div 
              className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
              style={{
                background: 'radial-gradient(circle, #bda985 0%, transparent 70%)'
              }}
            />
            <div 
              className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)'
              }}
            />
          </div>
          
          {/* Refined Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(189,169,133,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(189,169,133,0.5) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px'
            }}
          />
          
          {/* Diagonal Light Rays */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div 
              className="absolute inset-0"
              style={{
                background: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 100px,
                  rgba(189,169,133,0.3) 100px,
                  rgba(189,169,133,0.3) 102px
                )`
              }}
            />
          </div>
          
          {/* Floating Particles Animation */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                background: `rgba(189,169,133,${0.2 + Math.random() * 0.3})`,
                boxShadow: `0 0 ${10 + Math.random() * 20}px rgba(189,169,133,0.4)`
              }}
              animate={{
                y: [0, -30 - Math.random() * 40, 0],
                x: [0, Math.random() > 0.5 ? 20 : -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5
              }}
            />
          ))}
          
          {/* Elegant Corner Accents */}
          <div className="absolute top-0 left-0 w-96 h-96 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="cornerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#bda985', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#bda985', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <path d="M 0 0 L 100 0 L 0 100 Z" fill="url(#cornerGrad1)" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 rotate-180">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M 0 0 L 100 0 L 0 100 Z" fill="url(#cornerGrad1)" />
            </svg>
          </div>
          
          {/* Organic Morphing Shapes */}
          <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
            <motion.div
              className="absolute"
              style={{
                width: '400px',
                height: '400px',
                top: '15%',
                right: '10%',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                border: '2px solid rgba(189,169,133,0.4)',
                boxShadow: '0 0 60px rgba(189,169,133,0.2)'
              }}
              animate={{
                rotate: [0, 360],
                borderRadius: [
                  '30% 70% 70% 30% / 30% 30% 70% 70%',
                  '70% 30% 30% 70% / 70% 70% 30% 30%',
                  '30% 70% 70% 30% / 30% 30% 70% 70%'
                ]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute"
              style={{
                width: '350px',
                height: '350px',
                bottom: '15%',
                left: '8%',
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                border: '2px solid rgba(189,169,133,0.4)',
                boxShadow: '0 0 60px rgba(189,169,133,0.2)'
              }}
              animate={{
                rotate: [360, 0],
                borderRadius: [
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                  '30% 60% 70% 40% / 50% 60% 30% 60%',
                  '60% 40% 30% 70% / 60% 30% 70% 40%'
                ]
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          
          {/* Border Shine Effects */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#bda985]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#bda985]/40 to-transparent" />
        </div>

        {/* ScrollExpandHero Component */}
        <div className="relative z-10">
          <ScrollExpandHero
            mediaSrc="/images/1.mp4"
            posterSrc="https://www.gbabogados.co.uk/wp-content/uploads/2025/03/Untitled-design-14-4-1.jpg"
            bgImageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop&auto=format"
            title="FLOW SPANISH"
            subtitle="By Cynthia Habib - In Collaboration with Casa di Consiglio"
            scrollToExpand="Scroll to Expand"
            titleColor="#ffffff"
            accentColor="#bda985"
          />
        </div>
      </div>

      {/* Main Content */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative py-16 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
          
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              background: `radial-gradient(circle at 25% 25%, #bda985 2px, transparent 2px),
                          radial-gradient(circle at 75% 75%, #bda985 1px, transparent 1px)`,
              backgroundSize: '50px 50px, 25px 25px'
            }}
          />

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
          {/* Introduction */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Learn Spanish in a <span style={{ color: '#bda985' }}>Practical, Modern Way</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              A comprehensive Spanish learning program designed for Arabic speakers, combining videos, 
              audio lessons, monthly magazines, and practical conversations. Suitable for professionals, 
              students, and learners of all levels.
            </p>
          </motion.div>

          {/* Benefits Section */}
          <motion.div 
            variants={containerVariants}
            className="mb-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group p-6 rounded-2xl transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.05))',
                      border: '2px solid rgba(189,169,133,0.2)',
                      boxShadow: '0 10px 30px rgba(189,169,133,0.1)'
                    }}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(189,169,133,0.2), rgba(189,169,133,0.1))',
                        border: '2px solid rgba(189,169,133,0.2)'
                      }}
                    >
                      <IconComponent className="w-7 h-7" style={{color: '#bda985'}} />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#bda985] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Programs Section */}
          <motion.div 
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
                OUR <span style={{ color: '#bda985' }}>PROGRAMS</span>
              </h2>
              <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
                Choose the learning format that best fits your schedule and goals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    onHoverStart={() => setHoveredProgram(index)}
                    onHoverEnd={() => setHoveredProgram(null)}
                    className="group rounded-2xl overflow-hidden shadow-xl"
                    style={{
                      background: 'rgba(255,255,255,0.95)',
                      border: '1px solid rgba(189,169,133,0.2)',
                      boxShadow: hoveredProgram === index 
                        ? '0 20px 40px rgba(189,169,133,0.2)' 
                        : '0 10px 30px rgba(189,169,133,0.1)'
                    }}
                  >
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <div 
                          className="px-4 py-2 rounded-full backdrop-blur-sm text-white text-sm font-bold flex items-center"
                          style={{ background: 'rgba(189,169,133,0.9)' }}
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          {program.duration}
                        </div>
                      </div>
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
                        {program.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {program.description}
                      </p>

                      <div className="space-y-3">
                        {program.features.map((feature, featureIndex) => (
                          <motion.div 
                            key={featureIndex} 
                            className="flex items-start"
                            whileHover={{ x: 4 }}
                          >
                            <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{color: '#bda985'}} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600 italic">
                          Pricing: Contact us for details
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* About Cynthia Section */}
         <motion.div 
  variants={containerVariants}
  className="mb-24"
>
  <motion.div variants={itemVariants} className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
      MEET YOUR <span style={{ color: '#bda985' }}>INSTRUCTOR</span>
    </h2>
    <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
      Learn from the pioneer of Spanish education for Arabic speakers
    </p>
  </motion.div>

  <div className="grid lg:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <div className="relative">
        <img
          src="/images/5.jpeg"
          alt="Cynthia Habib"
          className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
        <div className="absolute bottom-6 left-6">
          <div 
            className="px-6 py-3 rounded-full backdrop-blur-sm"
            style={{ background: 'rgba(189,169,133,0.9)' }}
          >
            <p className="text-white font-bold flex items-center">
              <Star className="w-5 h-5 mr-2" />
              @cynthiaa.habib
            </p>
          </div>
        </div>
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
        <span className="font-bold text-xs uppercase tracking-wider" style={{color: '#bda985'}}>
          Pioneer Spanish Language Trainer
        </span>
      </div>

      <h3 className="text-3xl md:text-4xl font-black text-black">
        Cynthia Habib
      </h3>

      <div className="text-gray-700 space-y-4 leading-relaxed">
        <p>
          Cynthia is the first Arabic-speaking trainer to develop a comprehensive program for 
          teaching Spanish to professionals and beginners. She has worked with students from 
          diverse backgrounds and multiple fields across the Arab world.
        </p>
        <p>
          She has helped hundreds of learners transition from zero to their first real 
          conversation in Spanish with confidence. Her unique program combines practical learning, 
          audio content and podcasts, cultural articles, and conversations with native Spanish speakers.
        </p>
        <p>
          Through this methodology, her students achieve tangible results in just 6 months—from 
          their first Spanish sentence to deep, meaningful conversations. Her students can now 
          understand TV series, read Spanish texts easily, and speak confidently without mental 
          translation from their native language.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {[
          "7 years with native speakers",
          "Hundreds of success stories",
          "Expert in modern methods",
          "Results in 6 months"
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="flex items-center px-4 py-2 rounded-full"
            style={{
              background: 'rgba(189,169,133,0.1)',
              border: '1px solid rgba(189,169,133,0.2)'
            }}
          >
            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{color: '#bda985'}} />
            <span className="text-gray-700 text-sm font-medium">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div 
              className="p-12 rounded-3xl shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(189,169,133,0.15), rgba(255,255,255,0.95))',
                border: '2px solid rgba(189,169,133,0.3)'
              }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
                Ready to Start Your <span style={{ color: '#bda985' }}>Spanish Journey?</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                No more getting lost among resources, no more memorizing without results, and no more 
                boredom. Just a clear plan and practical steps that lead you to success.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-8 py-4 rounded-full font-bold text-white text-lg shadow-lg cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #bda985, #d4c4a0)'
                }}
              >
                <span>Transform Spanish into Your Lifestyle</span>
                <ArrowRight className="w-6 h-6 ml-3" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}