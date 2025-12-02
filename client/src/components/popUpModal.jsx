'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, Target, Clock, GraduationCap, MessageCircle } from 'lucide-react';

export default function FlowSpanishPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup today
    const popupShown = sessionStorage.getItem('flowSpanishPopupShown');
    
    if (!popupShown) {
      // Show popup after 1 second delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Remember that user has seen the popup for this session
    sessionStorage.setItem('flowSpanishPopupShown', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                aria-label="Close popup"
              >
                <X className="w-4 h-4 text-gray-700" />
              </button>

              {/* Modal Content */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                    style={{
                      background: 'linear-gradient(135deg, #bda985, #d4c4a0)',
                      boxShadow: '0 6px 16px rgba(189,169,133,0.3)'
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-white fill-white" />
                    </motion.div>
                    <span className="text-white font-bold text-xs uppercase tracking-wider">
                      Exciting News
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-black text-gray-900 mb-3 leading-tight"
                  >
                    Introducing <br />
                    <span 
                      style={{ 
                        background: 'linear-gradient(135deg, #bda985, #d4c4a0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Flow Spanish
                    </span>
                  </motion.h2>

                  {/* Subheadline */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-gray-700 mb-6 leading-relaxed"
                  >
                    Casa di Consiglio proudly presents our exclusive partnership with 
                    <span className="font-bold" style={{ color: '#bda985' }}> Cynthia Habib</span> &mdash; 
                    the first comprehensive Spanish program designed for Arabic speakers.
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3 mb-6"
                  >
                    {[
                      { icon: Target, text: 'Built for Arabic Speakers' },
                      { icon: Clock, text: 'Master in 6 Months' },
                      { icon: GraduationCap, text: 'Expert Guidance' },
                      { icon: MessageCircle, text: 'Real Conversations' }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div 
                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ 
                              background: 'linear-gradient(135deg, rgba(189,169,133,0.15), rgba(189,169,133,0.08))',
                            }}
                          >
                            <IconComponent className="w-4 h-4" style={{ color: '#bda985' }} />
                          </div>
                          <span className="text-sm font-medium text-gray-700">{item.text}</span>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="space-y-3"
                  >
                    <motion.a
                      href="/flow"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #bda985, #d4c4a0)'
                      }}
                      whileHover={{ scale: 1.02, boxShadow: '0 12px 28px rgba(189,169,133,0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleClose}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>

                    <motion.button
                      onClick={handleClose}
                      className="w-full px-6 py-3 rounded-full font-bold text-sm text-gray-600 hover:text-gray-800 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Maybe Later
                    </motion.button>
                  </motion.div>
                </div>

                {/* Bottom accent line */}
                <div 
                  className="h-1.5"
                  style={{
                    background: 'linear-gradient(90deg, #bda985, #d4c4a0, #bda985)'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}