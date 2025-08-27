'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
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
  const heroImageRef = useRef(null);
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
      title: "Dispute Resolution & Litigation",
      subtitle: "Strategic dispute resolution services",
      description: "Arbitration, litigation, white collar crime defense, and criminal law representation with proven track record.",
      stats: { value: "95%", label: "Success Rate" },
      icon: Scale,
      areas: ["Arbitration", "Litigation", "Dispute Resolution", "Criminal", "White Collar Crime"]
    },
    {
      title: "Private Client & Family Services",
      subtitle: "Personalized legal and tax advisory",
      description: "Family business structuring, private client services, tax planning, and healthcare law for individuals and families.",
      stats: { value: "150+", label: "Private Clients" },
      icon: Users,
      areas: ["Family Business", "Private Client", "Tax", "Healthcare"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, heroImageRef.current, credentialsRef.current, testimonialRef.current, ctaRef.current], { 
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

      // 3. Animate hero image quickly
      masterTl.to(heroImageRef.current, {
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

      // Hero image subtle movement - Much more subtle
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
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

      // Orbiting elements around hero image
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
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-stone-200 via-stone-100 to-amber-100/30 relative overflow-hidden">
      {/* Elegant floating particles - More visible */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={el => particlesRef.current[0] = el} className="absolute top-20 left-20 w-2 h-2 bg-[#8B7355]/60 rounded-full shadow-sm"></div>
        <div ref={el => particlesRef.current[1] = el} className="absolute top-40 right-32 w-1 h-1 bg-[#8B7355]/80 rounded-full shadow-sm"></div>
        <div ref={el => particlesRef.current[2] = el} className="absolute bottom-40 left-40 w-3 h-3 bg-[#8B7355]/50 rounded-full shadow-sm"></div>
        <div ref={el => particlesRef.current[3] = el} className="absolute bottom-60 right-20 w-1.5 h-1.5 bg-[#8B7355]/70 rounded-full shadow-sm"></div>
      </div>

      {/* Subtle geometric lines - More visible */}
      <div className="absolute inset-0">
        <div ref={el => linesRef.current[0] = el} className="absolute top-32 left-16 w-24 h-px bg-gradient-to-r from-[#8B7355]/50 to-transparent"></div>
        <div ref={el => linesRef.current[1] = el} className="absolute top-32 left-16 w-px h-24 bg-gradient-to-b from-[#8B7355]/50 to-transparent"></div>
        <div ref={el => linesRef.current[2] = el} className="absolute bottom-32 right-16 w-24 h-px bg-gradient-to-l from-[#8B7355]/50 to-transparent"></div>
        <div ref={el => linesRef.current[3] = el} className="absolute bottom-32 right-16 w-px h-24 bg-gradient-to-t from-[#8B7355]/50 to-transparent"></div>
      </div>

      {/* Boutique credentials - Improved contrast */}
      <div ref={credentialsRef} className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
        <div className="flex items-center space-x-3 md:space-x-6">
          <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-700 font-medium">
            <Award className="w-3 h-3 md:w-4 md:h-4 text-[#8B7355]" />
            <span className="hidden sm:inline">Boutique Firm</span>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-700 font-medium">
            <Shield className="w-3 h-3 md:w-4 md:h-4 text-[#8B7355]" />
            <span className="hidden sm:inline">Personalized Service</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Casa Di Consiglio Brand Title */}
          <div ref={titleRef} className="text-center mb-12 md:mb-20">
            <div className="w-20 md:w-32 h-px bg-[#8B7355] mx-auto mb-4 md:mb-6"></div>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* LEFT TEXT - Hidden on mobile, shows on lg+ */}
            <div className="hidden lg:block lg:col-span-3 space-y-6 xl:space-y-10">
              <div className="mb-6 xl:mb-8">
                <div className="w-8 xl:w-12 h-0.5 bg-[#8B7355] mb-4 xl:mb-6"></div>
              </div>
              
              {/* Practice area cards */}
              <div className="space-y-6 xl:space-y-8">
                {practiceAreas.slice(0, 2).map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div 
                      key={index}
                      ref={el => leftCardsRef.current[index] = el}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-start space-x-3 xl:space-x-5 p-4 xl:p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white/95 transition-all duration-500 border border-gray-200/50 hover:border-[#8B7355]/30 shadow-sm hover:shadow-md">
                        <div className="w-10 h-10 xl:w-12 xl:h-12 bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 rounded-xl flex items-center justify-center group-hover:from-[#8B7355] group-hover:to-[#6B5B47] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <IconComponent className="w-5 h-5 xl:w-6 xl:h-6 text-[#8B7355] group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-base xl:text-lg text-gray-900 group-hover:text-[#6B5B47] transition-colors duration-300 mb-2">
                            {area.title}
                          </h4>
                          <p className="text-xs xl:text-sm text-gray-700 mb-3 leading-relaxed font-medium">{area.subtitle}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {area.areas.slice(0, 2).map((specialty, idx) => (
                              <span key={idx} className="text-xs bg-[#BDA985]/20 text-[#6B5B47] px-2 py-1 rounded-full font-medium border border-[#BDA985]/30">
                                {specialty}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#6B5B47] font-bold text-base xl:text-lg">{area.stats.value}</span>
                            <ArrowRight className="w-3 h-3 xl:w-4 xl:h-4 text-gray-600 group-hover:text-[#6B5B47] group-hover:translate-x-2 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CENTER - JUSTICE STATUE */}
            <div className="lg:col-span-6 flex justify-center relative order-first lg:order-none">
              <div  className="relative">
                {/* Elegant backdrop glow */}
                <div className="absolute inset-0 bg-gradient-radial from-[#BDA985]/30 via-[#BDA985]/10 to-transparent rounded-full scale-125 blur-3xl"></div>
                
                {/* Justice Statue - Hero Element */}
                <Image 
                  src="/images/2.png"
                  alt="Lady Justice 3D Statue"
                  width={520}
                  height={750}
                  priority
                  className="w-[280px] h-[400px] sm:w-[350px] sm:h-[500px] md:w-[420px] md:h-[600px] lg:w-[520px] lg:h-[750px] object-contain mx-auto filter drop-shadow-[0_15px_30px_rgba(107,91,71,0.4)] md:drop-shadow-[0_30px_60px_rgba(107,91,71,0.5)] relative z-10"
                />
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 orbit-element">
                  <div className="absolute top-16 left-16 md:top-32 md:left-32 w-2 h-2 md:w-4 md:h-4 bg-[#8B7355]/50 rounded-full blur-sm"></div>
                </div>
                <div className="absolute inset-0 orbit-element">
                  <div className="absolute bottom-16 right-16 md:bottom-32 md:right-32 w-1.5 h-1.5 md:w-3 md:h-3 bg-[#8B7355]/60 rounded-full blur-sm"></div>
                </div>
              </div>
            </div>

            {/* RIGHT TEXT - Hidden on mobile, shows on lg+ */}
            <div className="hidden lg:block lg:col-span-3 space-y-6 xl:space-y-10">              
              {/* Practice area cards */}
              <div className="space-y-6 xl:space-y-8">
                {practiceAreas.slice(2, 4).map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div 
                      key={index}
                      ref={el => rightCardsRef.current[index] = el}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-start space-x-3 xl:space-x-5 p-4 xl:p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white/95 transition-all duration-500 border border-gray-200/50 hover:border-[#8B7355]/30 shadow-sm hover:shadow-md">
                        <div className="w-10 h-10 xl:w-12 xl:h-12 bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 rounded-xl flex items-center justify-center group-hover:from-[#8B7355] group-hover:to-[#6B5B47] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <IconComponent className="w-5 h-5 xl:w-6 xl:h-6 text-[#8B7355] group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-base xl:text-lg text-gray-900 group-hover:text-[#6B5B47] transition-colors duration-300 mb-2">
                            {area.title}
                          </h4>
                          <p className="text-xs xl:text-sm text-gray-700 mb-3 leading-relaxed font-medium">{area.subtitle}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {area.areas.slice(0, 3).map((specialty, idx) => (
                              <span key={idx} className="text-xs bg-[#BDA985]/20 text-[#6B5B47] px-2 py-1 rounded-full font-medium border border-[#BDA985]/30">
                                {specialty}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#6B5B47] font-bold text-base xl:text-lg">{area.stats.value}</span>
                            <ArrowRight className="w-3 h-3 xl:w-4 xl:h-4 text-gray-600 group-hover:text-[#6B5B47] group-hover:translate-x-2 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Practice Areas Cards - Shows only on mobile/tablet */}
          <div className="lg:hidden mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {practiceAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div 
                    key={index}
                    ref={el => mobileCardsRef.current[index] = el}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-start space-x-4 p-4 md:p-6 rounded-2xl bg-white/85 backdrop-blur-sm hover:bg-white/95 transition-all duration-500 border border-gray-200/60 hover:border-[#8B7355]/40 shadow-sm hover:shadow-md">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#BDA985]/30 to-[#8B7355]/20 rounded-xl flex items-center justify-center group-hover:from-[#8B7355] group-hover:to-[#6B5B47] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0 shadow-sm">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-[#8B7355] group-hover:text-white transition-colors duration-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm md:text-lg text-gray-900 group-hover:text-[#6B5B47] transition-colors duration-300 mb-1 md:mb-2">
                          {area.title}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-700 mb-3 leading-relaxed font-medium">{area.subtitle}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {area.areas.slice(0, 2).map((specialty, idx) => (
                            <span key={idx} className="text-xs bg-[#BDA985]/20 text-[#6B5B47] px-2 py-1 rounded-full font-medium border border-[#BDA985]/30">
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#6B5B47] font-bold text-sm md:text-lg">{area.stats.value}</span>
                          <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#6B5B47] group-hover:translate-x-2 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Client testimonial */}
          {/* <div ref={testimonialRef} className="mt-16 md:mt-20">
            <div className="text-center max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg mx-4 md:mx-0 border border-gray-200/50">
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#BDA985] text-base md:text-lg">★</div>
                    ))}
                  </div>
                </div>
                <p className="text-sm md:text-lg text-gray-800 italic mb-4 leading-relaxed font-medium">
                  &ldquo;Casa Di Consiglio provided exceptional personalized service for our corporate restructuring. Their boutique approach meant we received dedicated attention and tailored solutions that larger firms simply couldn&rsquo;t match.&rdquo;
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#8B7355]/20 rounded-full flex items-center justify-center border border-[#BDA985]/30">
                    <span className="text-[#6B5B47] font-bold text-xs md:text-sm">MR</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-base text-gray-900">Marco Rodriguez</p>
                    <p className="text-xs md:text-sm text-gray-600 font-medium">CEO, TechCorp Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* CTA Section */}
          <div ref={ctaRef} className="text-center mt-16 md:mt-20 pb-16 md:pb-20">
            <div className="space-y-4 md:space-y-6 px-4">
              <button className="group relative bg-gradient-to-r from-[#6B5B47] to-[#8B7355] text-white px-8 md:px-16 py-4 md:py-5 rounded-full text-base md:text-xl font-bold hover:from-[#5A4A39] hover:to-[#6B5B47] transition-all duration-700 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#6B5B47]/40 overflow-hidden border border-[#8B7355]/30">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
               <Link href={"/contact"}>
                <span className="relative">Schedule Your Consultation</span>
                </Link>
              </button>
              
              <p className="text-gray-700 text-base md:text-lg font-semibold">Personalized legal counsel tailored to you</p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-xs md:text-sm text-gray-700 font-medium mt-4">
                <span>📞 Personalized Service</span>
                <span>🏛️ Boutique Excellence</span>
                <span>⚖️ Complete Legal Coverage</span>
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