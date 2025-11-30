'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  BookOpen, 
  Users, 
  ArrowRight,
  Star,
  Quote
} from 'lucide-react';

export default function CollaborationSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Elegant Light Background */}
      <div className="absolute inset-0">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-amber-50/30" />
        
        {/* Subtle texture */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, #bda985 0px, #bda985 1px, transparent 1px, transparent 20px),
              repeating-linear-gradient(-45deg, #bda985 0px, #bda985 1px, transparent 1px, transparent 20px)
            `
          }}
        />

        {/* Soft floating orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + i * 10}%`,
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              background: `radial-gradient(circle, rgba(189,169,133,0.08), transparent 70%)`,
              filter: 'blur(40px)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(189,169,133,0.1), rgba(189,169,133,0.05))',
              border: '1.5px solid rgba(189,169,133,0.2)'
            }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: '#bda985' }} />
            </motion.div>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#bda985' }}>
              Exclusive Partnership
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gray-900">Introducing </span>
            <span 
              className="inline-block"
              style={{ 
                background: 'linear-gradient(135deg, #bda985, #d4c4a0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Flow Spanish
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A groundbreaking collaboration between Casa di Consiglio and Cynthia Habib, 
            bringing you the most comprehensive Spanish learning experience designed for Arabic speakers
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left - Image & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/5.jpeg"
                  alt="Cynthia Habib - Spanish Language Expert"
                  className="w-full aspect-[4/5] object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Badge on image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div 
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full backdrop-blur-xl"
                    style={{ background: 'rgba(189,169,133,0.95)' }}
                  >
                    <Star className="w-5 h-5 text-white fill-white" />
                    <div>
                      <p className="text-white font-bold text-sm">Cynthia Habib</p>
                      <p className="text-white/80 text-xs">Pioneer Spanish Trainer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-32 h-32 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #bda985, #d4c4a0)',
                  opacity: 0.15,
                  filter: 'blur(30px)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl backdrop-blur-sm shadow-xl"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '2px solid rgba(189,169,133,0.2)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(189,169,133,0.2), rgba(189,169,133,0.1))' }}
                  >
                    <Sparkles className="w-6 h-6" style={{ color: '#bda985' }} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">New Partnership</p>
                    <p className="text-sm text-gray-600">Limited Launch Offer</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transform Your Spanish Journey
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We're proud to partner with <span className="font-bold" style={{ color: '#bda985' }}>Cynthia Habib</span>, 
                the first Arabic-speaking Spanish trainer, to bring you Flow Spanish—a revolutionary program 
                that combines modern learning methods with proven results.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: BookOpen,
                  title: "Complete Learning System",
                  description: "Videos, audio lessons, monthly magazines, and live conversations—all designed for Arabic speakers"
                },
                {
                  icon: Users,
                  title: "Flexible Learning Options",
                  description: "Choose from recorded programs, private classes, conversation sessions, or group learning"
                },
                {
                  icon: Star,
                  title: "Proven Track Record",
                  description: "Join 500+ successful students who went from zero to fluent conversations in 6 months"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-4 items-start group"
                  >
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(189,169,133,0.15), rgba(189,169,133,0.05))',
                        border: '2px solid rgba(189,169,133,0.2)'
                      }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: '#bda985' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-lg">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-6"
            >
              <motion.a
                href="/flow"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white relative overflow-hidden shadow-lg group"
                style={{
                  background: 'linear-gradient(135deg, #bda985, #d4c4a0)'
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(189,169,133,0.3)' }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <span className="relative z-10">Discover Flow Spanish</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-6 h-6 relative z-10" />
                </motion.div>

                {/* Hover shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: isHovered ? '100%' : '-100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div 
            className="relative rounded-3xl p-10 md:p-14"
            style={{
              background: 'linear-gradient(135deg, rgba(189,169,133,0.08), rgba(189,169,133,0.03))',
              border: '2px solid rgba(189,169,133,0.15)'
            }}
          >
            <Quote 
              className="absolute top-8 left-8 w-16 h-16 opacity-10"
              style={{ color: '#bda985' }}
            />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic mb-6">
                "No more getting lost among resources, no more memorizing without results. 
                Just a clear plan and practical steps that lead you to real Spanish fluency."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-0.5" style={{ background: '#bda985' }} />
                <p className="font-bold text-gray-900">Start Your Journey Today</p>
                <div className="w-12 h-0.5" style={{ background: '#bda985' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}