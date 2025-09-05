'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Scale, TrendingUp, Smartphone, ArrowRight, MapPin, Users, Shield, Star, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
export default function ExpertiseSection() {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);
  const sectorsRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1); // Start with middle slide (index 1)
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

  const expertiseAreas = [
    {
      icon: TrendingUp,
      title: "Financial Institutions",
      description: "Comprehensive legal services for banks, investment firms, and financial institutions. We provide regulatory compliance, risk management, and strategic advisory services to navigate complex financial regulations and market dynamics.",
      features: ["Banking Regulations", "Investment Compliance", "Risk Management", "Financial Structuring"],
      image: "https://www.24forextrading.com/wp-content/uploads/2024/06/Settlement-Funding-and-Lawsuit-Loans.jpg",
      stats: { value: "$2B+", label: "Assets Advised" }
    },
    {
      icon: Scale,
      title: "Oil & Gas",
      description: "Specialized legal counsel for the energy sector including upstream, midstream, and downstream operations. From exploration agreements to international joint ventures, we handle complex energy transactions and regulatory matters.",
      features: ["Exploration Rights", "Joint Ventures", "Regulatory Compliance", "International Trade"],
      image: "https://www.akmanlegal.com/assets/oil-img1.png",
      stats: { value: "150+", label: "Energy Deals" }
    },
    {
      icon: Smartphone,
      title: "Real Estate",
      description: "Full-spectrum real estate legal services covering commercial and residential transactions, development projects, and property investments. We ensure seamless property transfers and protect your real estate investments.",
      features: ["Property Transactions", "Development Projects", "Investment Advisory", "Due Diligence"],
      image: "https://cdn-res.keymedia.com/cms/images/ca/119/0422_638628674961501400.jpg",
      stats: { value: "500+", label: "Properties Handled" }
    }
  ];

  const allSectors = [
    "Construction & Contractors", "Consumer Goods & Retail", "Energy", "Financial Institutions",
    "Health Care", "Individuals", "Legal Firms", "Logistics & Transport", "Marine", "Medical",
    "Oil & Gas", "Pharmaceuticals", "Real Estate", "Shipping", "Trade"
  ];

  // Debounce function for performance
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Intersection Observer for better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimationEnabled(true);
          } else {
            setIsAnimationEnabled(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isAnimationEnabled) return;

    // Load GSAP and ScrollTrigger with reduced animations
    const loadGSAP = async () => {
      if (!window.gsap) {
        const gsapScript = document.createElement('script');
        gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        gsapScript.onload = () => {
          const scrollTriggerScript = document.createElement('script');
          scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
          scrollTriggerScript.onload = initGSAP;
          document.head.appendChild(scrollTriggerScript);
        };
        document.head.appendChild(gsapScript);
      } else {
        initGSAP();
      }
    };

    const initGSAP = () => {
      if (!window.gsap) return;
      
      const { gsap } = window;
      gsap.registerPlugin(window.ScrollTrigger);

      // Reduced animations for better performance
      gsap.fromTo(headerRef.current, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            end: "bottom 20%",
          }
        }
      );

      // Simpler card animation
      gsap.fromTo(cardsRef.current?.children || [], 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      // Stats section animation
      gsap.fromTo(statsRef.current?.children || [], 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            end: "bottom 20%",
          }
        }
      );

      // Sectors grid animation
      gsap.fromTo(sectorsRef.current, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectorsRef.current,
            start: "top 85%",
            end: "bottom 20%",
          }
        }
      );

      // Reduced floating elements animation
      const floatingElements = document.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        gsap.to(element, {
          y: -10,
          duration: 2 + index,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.3
        });
      });
    };

    // Load Swiper.js with optimized settings
    const loadSwiper = async () => {
      if (!window.Swiper) {
        const swiperCSS = document.createElement('link');
        swiperCSS.rel = 'stylesheet';
        swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        document.head.appendChild(swiperCSS);

        const swiperJS = document.createElement('script');
        swiperJS.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        swiperJS.onload = initSwiper;
        document.body.appendChild(swiperJS);
      } else {
        initSwiper();
      }
    };

    const initSwiper = () => {
      if (swiperRef.current && window.Swiper) {
        const swiper = new window.Swiper(swiperRef.current, {
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: true,
          initialSlide: 1, // Start with middle slide (Oil & Gas)
          autoplay: {
            delay: 6000, // Increased delay for better UX
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          effect: 'coverflow',
          coverflowEffect: {
            rotate: 10, // Reduced rotation for better performance
            stretch: 0,
            depth: 200, // Reduced depth
            modifier: 1,
            slideShadows: false, // Disabled for performance
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
          },
          on: {
            slideChange: function () {
              setActiveSlide(this.activeIndex);
            },
          },
          // Performance optimizations
          watchSlidesProgress: false,
          watchSlidesVisibility: false,
          preloadImages: false,
          lazy: {
            loadPrevNext: true,
          },
        });
      }
    };

    loadGSAP();
    loadSwiper();

    return () => {
      // Cleanup ScrollTrigger instances
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, [isAnimationEnabled]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-gray-50 overflow-hidden"
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              linear-gradient(45deg, rgba(189,169,133,0.05) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(189,169,133,0.05) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(189,169,133,0.05) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(189,169,133,0.05) 75%)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }}
        />

        {/* Reduced floating decorative elements */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="floating-element absolute opacity-8"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${25 + (i * 10)}%`,
              width: `${20 + i * 6}px`,
              height: `${20 + i * 6}px`,
              background: '#bda985',
              borderRadius: i % 2 === 0 ? '50%' : '20%',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className="text-center mb-20"
        >
          <div 
            className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 shadow-lg mb-8"
            style={{
              background: 'rgba(255,255,255,0.9)',
              borderColor: '#bda985',
              color: '#000000',
              boxShadow: '0 8px 25px rgba(189,169,133,0.15)'
            }}
          >
            Professional Excellence
          </div>
          
          <h2 className="mb-8">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-4">
              <span className="block text-black">SECTORS</span>
              <span className="block" style={{ color: '#bda985' }}>COVERED</span>
            </div>
          </h2>
          
          <div 
            className="w-32 h-1 rounded-full mx-auto mb-8"
            style={{
              background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)',
            }}
          />
          
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
            Industries We <span style={{ color: '#bda985' }}>Serve</span> & Strategic Excellence
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative mb-20">
          <div 
            ref={swiperRef}
            className="swiper expertise-swiper"
          >
            <div ref={cardsRef} className="swiper-wrapper pb-16">
              {expertiseAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div key={index} className="swiper-slide">
                    <div className="group relative h-[600px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-[rgba(189,169,133,0.3)] transition-all duration-500 hover:scale-105">
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ 
                          backgroundImage: `url(${area.image})`,
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, 
                            rgba(0,0,0,0.6) 0%, 
                            rgba(0,0,0,0.3) 40%, 
                            rgba(189,169,133,0.4) 100%)`
                        }}
                      />

                      {/* Content Overlay */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                        {/* Top Section */}
                        <div className="flex justify-between items-start">
                          {/* Icon */}
                          <div 
                            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            style={{ background: 'rgba(189,169,133,0.9)' }}
                          >
                            <IconComponent className="w-8 h-8 text-black" />
                          </div>

                          {/* Stats */}
                          <div 
                            className="text-right p-4 rounded-2xl backdrop-blur-sm"
                            style={{
                              background: 'rgba(255,255,255,0.1)',
                              border: '1px solid rgba(255,255,255,0.2)'
                            }}
                          >
                            <div className="text-2xl font-black" style={{color: '#bda985'}}>
                              {area.stats.value}
                            </div>
                            <div className="text-xs opacity-70">
                              {area.stats.label}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Section */}
                        <div 
                          className="p-6 rounded-2xl backdrop-blur-sm"
                          style={{
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)'
                          }}
                        >
                          <h3 className="text-3xl font-bold mb-4 leading-tight">
                            {area.title}
                          </h3>
                          <p className="text-base font-medium mb-6 opacity-90" style={{color: '#bda985'}}>
                            {area.description.substring(0, 120)}...
                          </p>

                          {/* Features */}
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {area.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center">
                                <div className="w-2 h-2 rounded-full mr-3" style={{background: '#bda985'}} />
                                <span className="text-sm opacity-85">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Connect Button */}
                           <Link href={"/contact"}>
                          <button 
                            className="group/btn relative overflow-hidden w-full py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{
                              background: '#bda985',
                              color: '#000000'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.background = '#d4c4a0';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = '#bda985';
                            }}
                          >
                           
                            <span className="flex items-center justify-center">
                              Connect to me
                              <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                            </span>
                           
                          </button>
                           </Link>
                        </div>
                      </div>

                      {/* Premium Badge */}
                      <div className="absolute top-6 right-6 flex items-center text-white text-xs bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full">
                        <Star className="w-3 h-3 mr-1 fill-current" style={{color: '#bda985'}} />
                        <span className="font-semibold">Premium</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Navigation */}
            <div className="swiper-button-prev !w-14 !h-14 !text-black rounded-full shadow-lg" style={{ background: 'rgba(255,255,255,0.9)', left: '20px' }} />
            <div className="swiper-button-next !w-14 !h-14 !text-black rounded-full shadow-lg" style={{ background: 'rgba(255,255,255,0.9)', right: '20px' }} />
            
            {/* Custom Pagination */}
            <div className="swiper-pagination !bottom-0" />
          </div>
        </div>

        {/* Horizontal Scrolling Sectors Carousel */}
        <div 
          ref={sectorsRef}
          className="text-center mb-12"
        >
          <div 
            className="p-8 rounded-3xl backdrop-blur-sm border-2 shadow-lg"
            style={{
              background: 'rgba(255,255,255,0.9)',
              borderColor: '#bda985',
              boxShadow: '0 8px 25px rgba(189,169,133,0.15)'
            }}
          >
            <h3 className="text-2xl font-bold text-black mb-8">Complete Sector Coverage</h3>
            
            {/* Scrolling Container */}
            <div className="relative overflow-hidden mb-8">
              {/* Left Gradient Fade */}
              <div 
                className="absolute left-0 top-0 w-16 h-full z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(255,255,255,0.9), transparent)'
                }}
              />
              
              {/* Right Gradient Fade */}
              <div 
                className="absolute right-0 top-0 w-16 h-full z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, rgba(255,255,255,0.9), transparent)'
                }}
              />

              {/* Scrolling Track */}
              <div 
                className="flex gap-4 animate-scroll"
                style={{
                  width: 'calc(300px * 30)', // Accommodate duplicated items
                  animation: 'scrollRight 45s linear infinite'
                }}
              >
                {/* First set of sectors */}
                {allSectors.map((sector, index) => (
                  <div 
                    key={`first-${index}`}
                    className="group flex-shrink-0 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 cursor-pointer border-2"
                    style={{
                      background: 'rgba(189,169,133,0.1)',
                      borderColor: 'rgba(189,169,133,0.2)',
                      color: '#000000',
                      minWidth: '140px',
                      textAlign: 'center',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#bda985';
                      e.target.style.borderColor = '#bda985';
                      e.target.style.color = '#000000';
                      e.target.style.transform = 'scale(1.1) translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(189,169,133,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(189,169,133,0.1)';
                      e.target.style.borderColor = 'rgba(189,169,133,0.2)';
                      e.target.style.color = '#000000';
                      e.target.style.transform = 'scale(1) translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    {sector}
                  </div>
                ))}
                
                {/* Second set (for seamless loop) */}
                {allSectors.map((sector, index) => (
                  <div 
                    key={`second-${index}`}
                    className="group flex-shrink-0 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 cursor-pointer border-2"
                    style={{
                      background: 'rgba(189,169,133,0.1)',
                      borderColor: 'rgba(189,169,133,0.2)',
                      color: '#000000',
                      minWidth: '140px',
                      textAlign: 'center',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#bda985';
                      e.target.style.borderColor = '#bda985';
                      e.target.style.color = '#000000';
                      e.target.style.transform = 'scale(1.1) translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(189,169,133,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(189,169,133,0.1)';
                      e.target.style.borderColor = 'rgba(189,169,133,0.2)';
                      e.target.style.color = '#000000';
                      e.target.style.transform = 'scale(1) translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    {sector}
                  </div>
                ))}
              </div>

              {/* Pause on Hover Overlay */}
              <div 
                className="absolute inset-0 z-5"
                onMouseEnter={(e) => {
                  const scrollTrack = e.currentTarget.nextSibling?.querySelector('.animate-scroll') || e.currentTarget.previousSibling?.querySelector('[style*="animation"]');
                  if (scrollTrack) {
                    scrollTrack.style.animationPlayState = 'paused';
                  }
                }}
                onMouseLeave={(e) => {
                  const scrollTrack = e.currentTarget.nextSibling?.querySelector('.animate-scroll') || e.currentTarget.previousSibling?.querySelector('[style*="animation"]');
                  if (scrollTrack) {
                    scrollTrack.style.animationPlayState = 'running';
                  }
                }}
              />
            </div>

            {/* Bottom Statistics */}
  

            {/* View All CTA */}
            <button 
              className="group/btn relative overflow-hidden px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: '#bda985',
                color: '#000000'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#d4c4a0';
                e.target.style.transform = 'scale(1.05) translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#bda985';
                e.target.style.transform = 'scale(1) translateY(0)';
              }}
            >
              <span className="flex items-center justify-center">
                View All Our Services
                <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

   
      </div>

      {/* Simplified Floating Elements */}
      <div 
        className="floating-element absolute -top-4 right-1/4 w-20 h-20 rounded-full opacity-10"
        style={{
          background: 'linear-gradient(135deg, #bda985 0%, transparent 100%)',
        }}
      />
      <div 
        className="floating-element absolute -bottom-4 left-1/4 w-16 h-16 rounded-full opacity-10"
        style={{
          background: 'linear-gradient(135deg, #bda985 0%, transparent 100%)',
        }}
      />

      <style jsx>{`
        .expertise-swiper .swiper-pagination-bullet {
          background: rgba(189,169,133,0.4);
          opacity: 1;
          width: 12px;
          height: 12px;
          margin: 0 8px;
        }
        .expertise-swiper .swiper-pagination-bullet-active {
          background: #bda985;
          transform: scale(1.3);
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 20px;
          font-weight: bold;
        }
        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right {
          background: linear-gradient(to right, rgba(189,169,133,0.2), transparent);
        }
        
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}