'use client';
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
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

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = useMemo(() => title ? title.split(' ')[0] : '', [title]);
  const restOfTitle = useMemo(() => title ? title.split(' ').slice(1).join(' ') : '', [title]);

  // Reduced particles from 40 to 12
  const particles = useMemo(() => 
    [...Array(12)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 10
    })), []
  );

  return (
    <div ref={sectionRef} className="transition-colors duration-700 ease-in-out overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {/* Image Background with Glassmorphism */}
          <motion.div
            className="absolute inset-0 z-0 h-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            {/* Background Image with Blur */}
            <div className="absolute inset-0">
              <img
                src={bgImageSrc}
                alt="Background"
                className="w-full h-full object-cover scale-110"
                style={{
                  filter: 'blur(8px)',
                }}
              />
              {/* Glassmorphism overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              />
            </div>

            {/* Floating particles */}
            {particles.map(({ id, left, top, delay }) => (
              <motion.div
                key={id}
                className="absolute"
                style={{ left, top }}
                animate={{
                  y: [0, -200],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                  delay
                }}
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.8)',
                    boxShadow: `0 0 6px ${accentColor}60`
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              {/* Video Container - Simplified decorations */}
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  transition: 'none'
                }}
              >
                <div 
                  className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer group"
                  onClick={toggleMute}
                  style={{
                    boxShadow: `
                      0 8px 32px ${accentColor}30,
                      0 20px 60px rgba(0, 0, 0, 0.1)
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

                  {/* Sound Control */}
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

                  {/* Subtle overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ 
                      background: `linear-gradient(135deg, rgba(255,255,255,0.2), transparent 40%)`,
                      opacity: 0.3 - scrollProgress * 0.3
                    }}
                  />

                  {/* Simple border */}
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{ 
                      border: `2px solid ${accentColor}`,
                      opacity: 0.4
                    }}
                  />
                </div>

                {/* Simplified scroll indicator */}
                <motion.div 
                  className="flex flex-col items-center text-center relative z-10 mt-8"
                  style={{ opacity: 1 - scrollProgress }}
                >
                  {scrollToExpand && (
                    <div
                      className="flex flex-col items-center gap-3"
                      style={{ 
                        transform: `translateX(${textTranslateX}vw)`,
                      }}
                    >
                      <p
                        className="font-serif text-sm tracking-[0.4em] uppercase font-light"
                        style={{ color: titleColor }}
                      >
                        {scrollToExpand}
                      </p>
                      
                      {/* Simple scroll icon */}
                      <div className="relative">
                        <div
                          className="w-7 h-11 rounded-full border-2 flex items-start justify-center p-2"
                          style={{ borderColor: `${accentColor}60` }}
                        >
                          <motion.div
                            className="w-1.5 h-2 rounded-full"
                            style={{ background: accentColor }}
                            animate={{
                              y: [0, 14, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Simplified Typography */}
              <div className="flex items-center justify-center text-center gap-6 w-full relative z-10 flex-col">
                <motion.h2
                  className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter"
                  style={{ 
                    transform: `translateX(-${textTranslateX}vw)`,
                    color: titleColor,
                    textShadow: `2px 2px 0 ${accentColor}20`
                  }}
                >
                  {firstWord}
                </motion.h2>

                <motion.h2
                  className="text-6xl md:text-7xl lg:text-8xl font-black text-center tracking-tighter"
                  style={{ 
                    transform: `translateX(${textTranslateX}vw)`,
                    color: accentColor,
                    textShadow: `0 0 30px ${accentColor}40`
                  }}
                >
                  {restOfTitle}
                </motion.h2>

                {subtitle && (
                  <motion.p
                    className="text-xl md:text-2xl lg:text-3xl font-light mt-2 max-w-4xl px-6 font-serif italic"
                    style={{ 
                      color: `${titleColor}DD`,
                      opacity: 1 - scrollProgress
                    }}
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