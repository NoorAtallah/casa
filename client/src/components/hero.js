'use client';
import React, { useEffect, useRef } from 'react';
import { Building, TrendingUp, Scale, Users, ArrowRight, Award, Shield } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LawFirmHero = () => {
  const containerRef = useRef(null);
  const heroBackgroundRef = useRef(null);
  const titleRef = useRef(null);
  const leftCardsRef = useRef([]);
  const rightCardsRef = useRef([]);
  const mobileCardsRef = useRef([]);
  const particlesRef = useRef([]);
  const linesRef = useRef([]);
  const credentialsRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);

  const practiceAreas = [
    {
      title: "Corporate & Commercial Law",
      subtitle: "Comprehensive business legal solutions",
      description: "Corporate structuring, commercial contracts, mergers & acquisitions, and employment law guidance for businesses of all sizes.",
      stats: { value: "200+", label: "Corporate Clients" },
      icon: Building,
      areas: ["Corporate", "Commercial", "Employment", "Construction"]
    },
    {
      title: "Banking & Finance",
      subtitle: "Expert financial and investment counsel",
      description: "Banking regulations, investment structuring, financial compliance, and specialized advice for financial institutions.",
      stats: { value: "$500M+", label: "Deals Advised" },
      icon: TrendingUp,
      areas: ["Banking & Finance", "Investments"]
    },
  
    {
      title: "Private Client & Family Services",
      subtitle: "Personalized and tailored advice and research ",
      description: "Family business structuring, private client services, tax planning, and healthcare law for individuals and families.",
      stats: { value: "150+", label: "Private Clients" },
      icon: Users,
      areas: ["Family Business", "Private Client", "Tax", "Healthcare"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, heroBackgroundRef.current, credentialsRef.current, testimonialRef.current, ctaRef.current], { 
        opacity: 0, 
        y: 50 
      });
      
      gsap.set(leftCardsRef.current, { 
        opacity: 0, 
        x: -80,
        rotation: -5
      });
      
      gsap.set(rightCardsRef.current, { 
        opacity: 0, 
        x: 80,
        rotation: 5
      });

      gsap.set(mobileCardsRef.current, { 
        opacity: 0, 
        y: 30,
        scale: 0.95
      });
      
      gsap.set(particlesRef.current, { 
        opacity: 0, 
        scale: 0,
        rotation: 0
      });
      
      gsap.set(linesRef.current, { 
        scaleX: 0,
        scaleY: 0,
        transformOrigin: "left top"
      });

      // Master timeline - Much faster and more responsive
      const masterTl = gsap.timeline();

      // 1. Animate particles and lines simultaneously
      masterTl.to(particlesRef.current, {
        opacity: 0.6,
        scale: 1,
        rotation: 180,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      })
      .to(linesRef.current, {
        scaleX: 1,
        scaleY: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out"
      }, "-=0.6");

      // 2. Animate title and credentials immediately after
      masterTl.to([titleRef.current, credentialsRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.3");

      // 3. Animate hero background quickly
      masterTl.to(heroBackgroundRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.2)"
      }, "-=0.4");

      // 4. Animate all cards together for faster load
      masterTl.to([...leftCardsRef.current, ...rightCardsRef.current], {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out"
      }, "-=0.4")
      .to(mobileCardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out"
      }, "-=0.3");

      // 5. Animate final elements quickly
      masterTl.to(testimonialRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.2")
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4");

      // Continuous animations - Faster and more subtle
      // Floating particles
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          gsap.to(particle, {
            y: -15,
            rotation: 180,
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
          });
        }
      });

      // Hero background subtle movement - Much more subtle
      if (heroBackgroundRef.current) {
        gsap.to(heroBackgroundRef.current, {
          y: -5,
          rotation: 0.5,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

      // Card hover animations
      [...leftCardsRef.current, ...rightCardsRef.current, ...mobileCardsRef.current].forEach(card => {
        if (card) {
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -6,
              scale: 1.02,
              rotationY: 3,
              duration: 0.2,
              ease: "power2.out"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 0.2,
              ease: "power2.out"
            });
          };

          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);

          // Cleanup
          return () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
          };
        }
      });

      // Orbiting elements around hero background
      const orbitElements = document.querySelectorAll('.orbit-element');
      orbitElements.forEach((element, index) => {
        gsap.to(element, {
          rotation: 360,
          duration: 15 + index * 5,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center"
        });
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Responsive Background */}
      <div className="absolute inset-0">
        {/* Mobile Background - Simple gradient */}
        <div className="block md:hidden absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-amber-100/50"></div>
        
        {/* Desktop Background - Image with gradient overlay */}
        <div className="hidden md:block absolute inset-0">
          <div 
            ref={heroBackgroundRef}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: 'url(https://curleybusinesslaw.com/wp-content/uploads/2022/09/law-scaled.jpg)',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-stone-200/70 via-stone-100/60 to-amber-100/40"></div>
        </div>
      </div>

      {/* Elegant floating particles - Responsive positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={el => particlesRef.current[0] = el} className="absolute top-10 left-4 sm:top-20 sm:left-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B7355]/60 rounded-full shadow-sm"></div>
        <div ref={el => particlesRef.current[1] = el} className="absolute top-20 right-4 sm:top-40 sm:right-32 w-1 h-1 bg-[#8B7355]/80 rounded-full shadow-sm"></div>
        <div ref={el => particlesRef.current[2] = el} className="absolute bottom-32 left-4 sm:bottom-40 sm:left-40 w-2 h-2 sm:w-3 sm:h-3 bg-[#8B7355]/50 rounded-full shadow-sm"></div>
        <div ref={el => particlesRef.current[3] = el} className="absolute bottom-40 right-4 sm:bottom-60 sm:right-20 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#8B7355]/70 rounded-full shadow-sm"></div>
      </div>

      {/* Subtle geometric lines - Responsive */}
      <div className="absolute inset-0">
        <div ref={el => linesRef.current[0] = el} className="absolute top-16 left-4 sm:top-32 sm:left-16 w-12 sm:w-24 h-px bg-gradient-to-r from-[#8B7355]/50 to-transparent"></div>
        <div ref={el => linesRef.current[1] = el} className="absolute top-16 left-4 sm:top-32 sm:left-16 w-px h-12 sm:h-24 bg-gradient-to-b from-[#8B7355]/50 to-transparent"></div>
        <div ref={el => linesRef.current[2] = el} className="absolute bottom-16 right-4 sm:bottom-32 sm:right-16 w-12 sm:w-24 h-px bg-gradient-to-l from-[#8B7355]/50 to-transparent"></div>
        <div ref={el => linesRef.current[3] = el} className="absolute bottom-16 right-4 sm:bottom-32 sm:right-16 w-px h-12 sm:h-24 bg-gradient-to-t from-[#8B7355]/50 to-transparent"></div>
      </div>

      {/* Boutique credentials - Improved responsive design */}
      <div ref={credentialsRef} className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 z-20">
        <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 md:space-x-6">
          <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-800 font-medium">
            <Award className="w-3 h-3 md:w-4 md:h-4 text-[#8B7355]" />
            <span className="hidden sm:inline">Boutique</span>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-800 font-medium">
            <Shield className="w-3 h-3 md:w-4 md:h-4 text-[#8B7355]" />
            <span className="hidden sm:inline">Personal</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 pt-12 sm:pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Casa Di Consiglio Brand Title - More responsive */}
          <div ref={titleRef} className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24">
            <div className="w-12 sm:w-16 md:w-20 lg:w-32 h-px bg-[#8B7355] mx-auto mb-4 sm:mb-6 md:mb-8"></div>
            
            {/* Elegant backdrop glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-[#BDA985]/20 via-[#BDA985]/5 to-transparent rounded-full scale-150 blur-3xl"></div>
              
              {/* Firm Name - Better responsive typography */}
              <div className="relative z-10 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
                  Casa Di<br />
                  <span className="text-black">Consiglio</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#382e22] max-w-xs sm:max-w-md md:max-w-2xl mx-auto font-medium px-4">
                  Boutique legal excellence with personalized service
                </p>
              </div>
              
              {/* Orbiting elements - Responsive */}
              <div className="absolute inset-0 orbit-element">
                <div className="absolute top-8 left-8 sm:top-16 sm:left-16 md:top-32 md:left-32 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-4 md:h-4 bg-[#8B7355]/50 rounded-full blur-sm"></div>
              </div>
              <div className="absolute inset-0 orbit-element">
                <div className="absolute bottom-8 right-8 sm:bottom-16 sm:right-16 md:bottom-32 md:right-32 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-3 md:h-3 bg-[#8B7355]/60 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Practice Areas Cards - Better responsive grid */}
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-xs sm:max-w-2xl lg:max-w-5xl mx-auto justify-items-center w-full">
              {practiceAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div 
                    key={index}
                    ref={el => {
                      if (index < 2) {
                        leftCardsRef.current[index] = el;
                      } else {
                        rightCardsRef.current[index - 2] = el;
                      }
                      mobileCardsRef.current[index] = el;
                    }}
                    className="group cursor-pointer w-full max-w-sm"
                  >
                    <div className="flex flex-col p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white/98 transition-all duration-500 border border-gray-200/60 hover:border-[#8B7355]/30 shadow-sm hover:shadow-md h-full">
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:from-[#8B7355] group-hover:to-[#6B5B47] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B7355] group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-base sm:text-lg text-gray-900 group-hover:text-[#6B5B47] transition-colors duration-300 leading-tight">
                            {area.title}
                          </h4>
                        </div>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed font-medium flex-grow">
                        {area.subtitle}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-2 sm:mb-4">
                        {area.areas.slice(0, 3).map((specialty, idx) => (
                          <span key={idx} className="text-xs bg-[#BDA985]/20 text-[#6B5B47] px-2 py-1 rounded-full font-medium border border-[#BDA985]/30">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section - More responsive */}
          <div ref={ctaRef} className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 px-4">
              <button className="group relative bg-gradient-to-r from-[#6B5B47] to-[#8B7355] text-white px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-xl font-bold hover:from-[#5A4A39] hover:to-[#6B5B47] transition-all duration-700 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#6B5B47]/40 overflow-hidden border border-[#8B7355]/30">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Link href={"/contact"}>
                  <span className="relative">Schedule Your Consultation</span>
                </Link>
              </button>
              
              <p className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold px-2">
                Personalized legal counsel tailored to you
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8 text-xs sm:text-sm text-gray-800 font-medium mt-4">
                <span className="flex items-center">📞 Personalized Service</span>
                <span className="flex items-center">🏛️ Boutique Excellence</span>
                <span className="flex items-center">⚖️ Complete Legal Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default LawFirmHero;