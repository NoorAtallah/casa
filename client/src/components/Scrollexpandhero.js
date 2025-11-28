'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const ScrollExpandHero = ({ 
  mediaSrc, 
  posterSrc, 
  bgImageSrc, 
  title, 
  subtitle,
  scrollToExpand = "Scroll to Expand",
  titleColor = "#1a1a1a",
  accentColor = "#bda985"
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div ref={sectionRef} className="transition-colors duration-700 ease-in-out overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {/* Luxurious White/Light Background */}
          <motion.div
            className="absolute inset-0 z-0 h-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            {/* Base white gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-stone-100" />
            
            {/* Soft colored gradients */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
                style={{ background: `radial-gradient(circle, ${accentColor}40, transparent)` }}
                animate={{
                  x: [-100, 100, -100],
                  y: [-50, 50, -50],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl"
                style={{ background: `radial-gradient(circle, ${accentColor}30, transparent)` }}
                animate={{
                  x: [100, -100, 100],
                  y: [50, -50, 50],
                  scale: [1.2, 1, 1.2]
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
                style={{ background: `radial-gradient(circle, rgba(255,255,255,0.8), transparent)` }}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Elegant line patterns */}
            <div 
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: `
                  linear-gradient(${accentColor}20 1.5px, transparent 1.5px),
                  linear-gradient(90deg, ${accentColor}20 1.5px, transparent 1.5px)
                `,
                backgroundSize: '80px 80px'
              }}
            />

            {/* Floating decorative circles with images */}
            <div className="absolute inset-0">
              {/* Top Left Ornament */}
              <motion.div
                className="absolute top-[12%] left-[8%]"
                animate={{
                  y: [-15, 15, -15],
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative">
                  {/* Outer rotating ring */}
                  <motion.div
                    className="absolute inset-0 w-72 h-72 rounded-full border-2"
                    style={{ borderColor: `${accentColor}30` }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Decorative dots on ring */}
                    <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: accentColor, boxShadow: `0 0 15px ${accentColor}` }} />
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 translate-y-1/2" style={{ background: accentColor, boxShadow: `0 0 15px ${accentColor}` }} />
                  </motion.div>

                  {/* Image circle */}
                  <div 
                    className="w-52 h-52 rounded-full overflow-hidden relative mx-auto my-auto mt-10 ml-10"
                    style={{
                      boxShadow: `
                        0 20px 60px ${accentColor}30,
                        0 0 0 1px ${accentColor}20,
                        inset 0 0 40px rgba(255,255,255,0.3)
                      `
                    }}
                  >
                    <img
                      src={bgImageSrc}
                      alt="Decorative"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10" />
                  </div>

                  {/* Inner rotating ring */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-dashed"
                    style={{ borderColor: `${accentColor}40` }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>

              {/* Bottom Right Ornament */}
              <motion.div
                className="absolute bottom-[12%] right-[8%]"
                animate={{
                  y: [15, -15, 15],
                  rotate: [0, -360],
                  scale: [1.05, 1, 1.05]
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative">
                  {/* Outer decorative squares */}
                  <motion.div
                    className="absolute inset-0 w-64 h-64 border-2 rounded-lg"
                    style={{ borderColor: `${accentColor}25`, transform: 'rotate(45deg)' }}
                    animate={{ rotate: [45, 405] }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Image circle */}
                  <div 
                    className="w-48 h-48 rounded-full overflow-hidden relative mx-auto my-auto mt-8 mr-8"
                    style={{
                      boxShadow: `
                        0 20px 60px ${accentColor}30,
                        0 0 0 1px ${accentColor}20,
                        inset 0 0 40px rgba(255,255,255,0.3)
                      `
                    }}
                  >
                    <img
                      src={bgImageSrc}
                      alt="Decorative"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-transparent to-black/10" />
                  </div>

                  {/* Orbiting dots */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-56 h-56"
                    style={{ marginLeft: '-112px', marginTop: '-112px' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 w-2.5 h-2.5 rounded-full -translate-x-1/2" style={{ background: accentColor, boxShadow: `0 0 12px ${accentColor}` }} />
                    <div className="absolute top-1/2 right-0 w-2.5 h-2.5 rounded-full -translate-y-1/2" style={{ background: accentColor, boxShadow: `0 0 12px ${accentColor}` }} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Top Right Small Ornament */}
              <motion.div
                className="absolute top-[20%] right-[15%]"
                animate={{
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative w-32 h-32">
                  <motion.div
                    className="absolute inset-0 rounded-full border"
                    style={{ borderColor: `${accentColor}30` }}
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <div 
                    className="w-full h-full rounded-full overflow-hidden"
                    style={{
                      boxShadow: `0 10px 30px ${accentColor}20, inset 0 0 20px rgba(255,255,255,0.5)`
                    }}
                  >
                    <img
                      src={bgImageSrc}
                      alt="Decorative"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Bottom Left Accent */}
              <motion.div
                className="absolute bottom-[25%] left-[12%]"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative w-36 h-36">
                  {/* Hexagon shape */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      border: `2px solid ${accentColor}30`,
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <div 
                    className="w-28 h-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden"
                    style={{
                      boxShadow: `0 10px 30px ${accentColor}20`
                    }}
                  >
                    <img
                      src={bgImageSrc}
                      alt="Decorative"
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating particles */}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -150 - Math.random() * 100, -300],
                  x: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 150],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0.5]
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: Math.random() * 10
                }}
              >
                <div 
                  className="w-1 h-1 rounded-full"
                  style={{ 
                    background: accentColor,
                    boxShadow: `0 0 8px ${accentColor}80`
                  }}
                />
              </motion.div>
            ))}

            {/* Geometric line connections */}
            <svg className="absolute inset-0 w-full h-full opacity-20" style={{ mixBlendMode: 'multiply' }}>
              <defs>
                <linearGradient id="lineGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: accentColor, stopOpacity: 0 }} />
                  <stop offset="50%" style={{ stopColor: accentColor, stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: accentColor, stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              
              <motion.path 
                d="M 15 15 Q 50 50, 85 15" 
                stroke="url(#lineGradLight)" 
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path 
                d="M 85 85 Q 50 50, 15 85" 
                stroke="url(#lineGradLight)" 
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              />
            </svg>

            {/* Radial light beams */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-1 origin-left"
                  style={{
                    height: '50vh',
                    background: `linear-gradient(to bottom, ${accentColor}, transparent)`,
                    transform: `rotate(${i * 30}deg)`,
                  }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              {/* Premium Video Container */}
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                }}
              >
                {/* Decorative frame elements */}
                <motion.div 
                  className="absolute -inset-8"
                  style={{ opacity: 1 - scrollProgress * 0.7 }}
                >
                  {/* Corner ornaments */}
                  <div className="absolute -top-6 -left-6">
                    <motion.div 
                      className="w-20 h-20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.3" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.5" strokeDasharray="5,5" />
                        <circle cx="50" cy="10" r="4" fill={accentColor} />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="absolute -top-6 -right-6">
                    <motion.div 
                      className="w-20 h-20"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.3" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.5" strokeDasharray="5,5" />
                        <circle cx="90" cy="50" r="4" fill={accentColor} />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="absolute -bottom-6 -left-6">
                    <motion.div 
                      className="w-20 h-20"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.3" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.5" strokeDasharray="5,5" />
                        <circle cx="10" cy="50" r="4" fill={accentColor} />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="absolute -bottom-6 -right-6">
                    <motion.div 
                      className="w-20 h-20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.3" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.5" strokeDasharray="5,5" />
                        <circle cx="50" cy="90" r="4" fill={accentColor} />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                <div 
                  className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer group"
                  onClick={toggleMute}
                  style={{
                    boxShadow: `
                      0 0 0 1px ${accentColor}30,
                      0 20px 80px ${accentColor}40,
                      0 40px 120px ${accentColor}20,
                      inset 0 0 60px rgba(255,255,255,0.5)
                    `,
                  }}
                >
                  <video
                    ref={videoRef}
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  />

                  {/* Sound Control Button */}
                  <motion.div
                    className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md cursor-pointer z-20"
                    style={{
                      background: `rgba(189,169,133,0.9)`,
                      boxShadow: `0 4px 20px ${accentColor}60`
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6 text-white" />
                    ) : (
                      <Volume2 className="w-6 h-6 text-white" />
                    )}
                  </motion.div>

                  {/* Click to unmute hint */}
                  {isMuted && (
                    <motion.div
                      className="absolute bottom-6 right-6 px-4 py-2 rounded-full backdrop-blur-sm"
                      style={{ background: 'rgba(189,169,133,0.8)' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    >
                      <p className="text-white text-xs font-medium">Click for sound</p>
                    </motion.div>
                  )}

                  {/* Glass morphism overlay */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ 
                      background: `linear-gradient(135deg, rgba(255,255,255,0.3), transparent 40%, ${accentColor}10)`,
                      backdropFilter: 'blur(0px)'
                    }}
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: 0.2 - scrollProgress * 0.2 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Animated shimmer effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(110deg, transparent 30%, ${accentColor}20 50%, transparent 70%)`,
                    }}
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 2
                    }}
                  />

                  {/* Elegant border animation */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{ 
                      border: `2px solid ${accentColor}`,
                    }}
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      boxShadow: [
                        `0 0 20px ${accentColor}40, inset 0 0 20px ${accentColor}20`,
                        `0 0 40px ${accentColor}60, inset 0 0 40px ${accentColor}30`,
                        `0 0 20px ${accentColor}40, inset 0 0 20px ${accentColor}20`
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Scroll indicator */}
                <motion.div 
                  className="flex flex-col items-center text-center relative z-10 mt-8 transition-none"
                  style={{ opacity: 1 - scrollProgress }}
                >
                  {scrollToExpand && (
                    <div
                      className="flex flex-col items-center gap-4"
                      style={{ 
                        transform: `translateX(${textTranslateX}vw)`,
                      }}
                    >
                      {/* Elegant divider */}
                      <motion.div 
                        className="w-24 h-px"
                        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
                        animate={{
                          scaleX: [0.5, 1, 0.5],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      <p
                        className="font-serif text-sm tracking-[0.4em] uppercase font-light"
                        style={{ 
                          color: titleColor,
                          textShadow: `0 1px 3px rgba(0,0,0,0.1)`
                        }}
                      >
                        {scrollToExpand}
                      </p>
                      
                      {/* Elegant scroll animation */}
                      <div className="relative">
                        <motion.div
                          className="w-7 h-11 rounded-full border-2 flex items-start justify-center p-2"
                          style={{ borderColor: `${accentColor}60` }}
                          animate={{
                            borderColor: [`${accentColor}40`, `${accentColor}80`, `${accentColor}40`]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <motion.div
                            className="w-1.5 h-2 rounded-full"
                            style={{ background: accentColor }}
                            animate={{
                              y: [0, 14, 0],
                              opacity: [1, 0.3, 1]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>

                        {/* Circular progress indicator */}
                        <motion.div
                          className="absolute -inset-3 rounded-full border"
                          style={{ borderColor: `${accentColor}20` }}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      </div>

                      {/* Decorative dots */}
                      <div className="flex gap-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1 h-1 rounded-full"
                            style={{ background: accentColor }}
                            animate={{
                              scale: [1, 1.8, 1],
                              opacity: [0.3, 1, 0.3]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.2
                            }}
                          />
                        ))}
                      </div>

                      {/* Bottom divider */}
                      <motion.div 
                        className="w-16 h-px"
                        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
                        animate={{
                          scaleX: [1, 0.5, 1],
                          opacity: [1, 0.3, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Elegant Typography */}
              <div className="flex items-center justify-center text-center gap-8 w-full relative z-10 transition-none flex-col">
                {/* Top decorative element */}
                <motion.div 
                  className="flex items-center gap-3"
                  style={{ opacity: 1 - scrollProgress }}
                >
                  <motion.div 
                    className="w-20 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${accentColor})` }}
                    animate={{ scaleX: [0, 1], opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.div 
                    className="w-2 h-2 rounded-full"
                    style={{ background: accentColor, boxShadow: `0 0 15px ${accentColor}` }}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="w-20 h-px"
                    style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
                    animate={{ scaleX: [0, 1], opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.div>

                <motion.h2
                  className="text-6xl md:text-7xl lg:text-8xl font-black transition-none tracking-tighter relative"
                  style={{ 
                    transform: `translateX(-${textTranslateX}vw)`,
                    color: titleColor,
                    textShadow: `
                      2px 2px 0 ${accentColor}20,
                      4px 4px 0 ${accentColor}10,
                      0 0 40px ${accentColor}30
                    `
                  }}
                >
                  <span className="relative inline-block">
                    {firstWord}
                    {/* Underline decoration */}
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </span>
                </motion.h2>

                <motion.h2
                  className="text-6xl md:text-7xl lg:text-8xl font-black text-center transition-none tracking-tighter relative"
                  style={{ 
                    transform: `translateX(${textTranslateX}vw)`,
                    color: accentColor,
                    textShadow: `
                      0 0 60px ${accentColor}50,
                      2px 2px 4px rgba(0,0,0,0.1)
                    `
                  }}
                >
                  <span className="relative inline-block">
                    {restOfTitle}
                    {/* Accent mark */}
                    <motion.div
                      className="absolute -top-4 -right-6 w-8 h-8"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg viewBox="0 0 40 40" className="w-full h-full">
                        <path
                          d="M20,5 L25,15 L35,20 L25,25 L20,35 L15,25 L5,20 L15,15 Z"
                          fill={accentColor}
                          opacity="0.6"
                        />
                      </svg>
                    </motion.div>
                  </span>
                </motion.h2>

                {/* Bottom decorative element */}
                <motion.div 
                  className="flex items-center gap-3"
                  style={{ opacity: 1 - scrollProgress }}
                >
                  <motion.div 
                    className="w-20 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${accentColor})` }}
                    animate={{ scaleX: [0, 1], opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                  <motion.div 
                    className="w-2 h-2 rounded-full"
                    style={{ background: accentColor, boxShadow: `0 0 15px ${accentColor}` }}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  <motion.div 
                    className="w-20 h-px"
                    style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
                    animate={{ scaleX: [0, 1], opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </motion.div>

                {subtitle && (
                  <motion.p
                    className="text-xl md:text-2xl lg:text-3xl font-light mt-2 max-w-4xl px-6 font-serif italic"
                    style={{ 
                      color: `${titleColor}DD`,
                      textShadow: `0 2px 10px rgba(0,0,0,0.05)`,
                      letterSpacing: '0.02em'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 - scrollProgress }}
                    transition={{ duration: 0.3 }}
                  >
                    {subtitle}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandHero;