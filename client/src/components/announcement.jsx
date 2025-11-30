'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

export default function FlowSpanishBanner({ 
  sticky = true,
  closeable = true 
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const BannerContent = () => (
    <div 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #bda985, #d4c4a0)',
        boxShadow: '0 4px 20px rgba(189,169,133,0.4)'
      }}
    >
      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{
          x: ['-100%', '200%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between gap-3 md:gap-4">
          {/* Left - Announcement */}
          <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
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
              className="hidden sm:block flex-shrink-0"
            >
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
            </motion.div>
            
            <div className="flex-1 min-w-0">
              <p className="text-white font-black text-sm sm:text-base md:text-xl flex items-center gap-2">
                <span className="text-xl sm:text-2xl md:text-3xl flex-shrink-0">🎉</span>
                <span className="truncate">
                  <span className="hidden md:inline">Exciting News: Casa di Consiglio × Cynthia Habib Present </span>
                  <span className="md:hidden">New Partnership: </span>
                  <span className="font-black">Flow Spanish</span>
                </span>
              </p>
              <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium hidden sm:block">
                Master Spanish in 6 months - The first program designed for Arabic speakers
              </p>
            </div>
          </div>

          {/* Right - CTA */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            {/* CTA Button */}
            <motion.a
              href="/flow"
              className="px-3 sm:px-5 md:px-7 py-2 md:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base bg-black text-white hover:bg-gray-900 transition-colors shadow-lg whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden sm:inline">Learn More →</span>
              <span className="sm:hidden">View →</span>
            </motion.a>

            {/* Close Button */}
            {closeable && (
              <button
                onClick={() => setIsVisible(false)}
                className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                aria-label="Close banner"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom pulse line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-white/40"
        animate={{
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={sticky ? "fixed top-0 left-0 right-0 z-50" : "relative z-10"}
        >
          <BannerContent />
        </motion.div>
      )}
    </AnimatePresence>
  );
}