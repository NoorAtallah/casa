'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight, Phone, Quote, Star, Scale, Building, Users, TrendingUp } from 'lucide-react';

const ParallaxLawyerHero = () => {
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);
  const contentRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const rafRef = useRef();

  const slides = [
    {
      title: "Corporate & Commercial Law",
      subtitle: "Strategic business solutions and corporate structuring",
      description: "Comprehensive corporate advice including mergers, acquisitions, commercial contracts, and business structuring. We guide corporates and legal firms through complex commercial transactions.",
      stats: { value: "200+", label: "Corporate Clients" },
      icon: Building,
      image: "https://dawoudlaw.com/wp-content/uploads/2020/10/service-4.jpg"
    },
    {
      title: "Banking & Finance",
      subtitle: "Expert financial legal advisory services", 
      description: "Specialized counsel in banking regulations, financial instruments, investment structuring, and compliance. Our expertise spans traditional banking and modern fintech solutions.",
      stats: { value: "$500M+", label: "Deals Advised" },
      icon: TrendingUp,
      image: "https://www.gunesgunes.com/wp-content/uploads/2022/01/bankacilik-ve-finans-hukuku.jpeg"
    },
    {
      title: "Dispute Resolution & Litigation",
      subtitle: "Effective resolution of complex disputes",
      description: "From arbitration to court litigation, we provide strategic dispute resolution services. Our approach combines negotiation skills with robust legal representation.",
      stats: { value: "95%", label: "Success Rate" },
      icon: Scale,
      image: "https://www.dajani-associates.com/wp-content/uploads/2024/06/dispute-resolution.png"
    },
    {
      title: "Tax & Private Client Services", 
      subtitle: "Personalized legal and tax advisory",
      description: "Comprehensive tax planning, private client services, and family business structuring. We provide tailored solutions for high-net-worth individuals and family enterprises.",
      stats: { value: "150+", label: "Private Clients" },
      icon: Users,
      image: "https://cdn.neamb.com/-/media/images/seiumb/benefits/seiu-legal-services-program/seiu_legal_services_program_1152811687_624x426.jpg?h=426&iar=0&w=624&hash=C6E2610001F2AEC07A8F42469352C1FF"
    }
  ];

  const testimonials = [
    {
      name: "Alessandro Romano",
      company: "Romano Industries Ltd.",
      text: "Casa Di Consiglio provided exceptional corporate restructuring advice. Their personalized approach made all the difference in our complex merger.",
      rating: 5
    },
    {
      name: "Maria Fernandez", 
      company: "Fernandez & Partners Law Firm",
      text: "Outstanding banking law expertise. They guided us through regulatory compliance with precision and professionalism.",
      rating: 5
    },
    {
      name: "David Mitchell",
      company: "Private Client", 
      text: "Their dispute resolution team exceeded expectations. The arbitration process was handled with remarkable skill and efficiency.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      company: "Laurent Family Business",
      text: "Excellent tax planning and private client services. Casa Di Consiglio truly understands the needs of family enterprises.",
      rating: 5
    }
  ];

  // Optimized scroll handler with requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    
    rafRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY);
      rafRef.current = null;
    });
  }, []);

  // Smooth mouse tracking with lerp interpolation
  const handleMouseMove = useCallback((e) => {
    const targetX = (e.clientX / window.innerWidth - 0.5) * 15;
    const targetY = (e.clientY / window.innerHeight - 0.5) * 15;
    
    setMousePosition(prev => ({
      x: prev.x + (targetX - prev.x) * 0.1,
      y: prev.y + (targetY - prev.y) * 0.1
    }));
  }, []);

  // Smooth slide transitions
  const changeSlide = useCallback((newIndex) => {
    if (isTransitioning || newIndex === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [currentSlide, isTransitioning]);

  const nextSlide = useCallback(() => {
    changeSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length, changeSlide]);

  const prevSlide = useCallback(() => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, slides.length, changeSlide]);

  useEffect(() => {
    let mouseTimer;
    
    const smoothMouseMove = (e) => {
      clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => handleMouseMove(e), 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', smoothMouseMove, { passive: true });

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', smoothMouseMove);
      clearInterval(interval);
      clearTimeout(mouseTimer);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll, handleMouseMove, slides.length, isTransitioning]);

  const currentTestimonial = testimonials[currentSlide];
  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Optimized Parallax Background Layers */}
      <div className="absolute inset-0 will-change-transform">
        {/* Subtle pattern overlay with GPU acceleration */}
        <div 
          className="absolute inset-0 opacity-20 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mousePosition.x * 0.3}px, ${scrollY * 0.15}px, 0)`,
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

        {/* Optimized floating decorative elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-8 transition-all duration-500 ease-out will-change-transform"
            style={{
              left: `${15 + (i * 14)}%`,
              top: `${20 + (i * 10)}%`,
              width: `${25 + i * 8}px`,
              height: `${25 + i * 8}px`,
              background: '#bda985',
              borderRadius: i % 2 === 0 ? '50%' : '20%',
              transform: `
                translate3d(
                  ${mousePosition.x * (0.4 + i * 0.08)}px, 
                  ${mousePosition.y * (0.2 + i * 0.04) + scrollY * (0.08 + i * 0.015)}px, 
                  0
                ) 
                rotate(${scrollY * 0.03 + i * 10}deg)
              `,
              filter: `blur(${i * 0.5}px)`
            }}
          />
        ))}
      </div>

      {/* Main Content with GPU acceleration */}
      <div ref={parallaxRef} className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <div 
            ref={contentRef}
            className="space-y-8 py-16 will-change-transform"
            style={{
              transform: `translate3d(${mousePosition.x * 0.4}px, ${scrollY * -0.12}px, 0)`
            }}
          >
            {/* Brand Badge with enhanced smoothness */}
            <div 
              className="relative transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translate3d(0, ${scrollY * -0.08}px, 0)`
              }}
            >
              <div 
                className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-sm border-2 transition-all duration-700 ease-out hover:scale-105 shadow-lg"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  borderColor: '#bda985',
                  color: '#000000',
                  boxShadow: '0 8px 25px rgba(189,169,133,0.15)'
                }}
              >
                Casa Di Consiglio
              </div>
            </div>

            {/* Dynamic Title with layered parallax */}
            <div className="space-y-4 relative">
              <h1 
                className="text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight text-black transition-transform duration-500 ease-out will-change-transform"
                style={{
                  transform: `translate3d(${mousePosition.x * 0.25}px, ${scrollY * -0.08}px, 0)`
                }}
              >
                Boutique Legal
              </h1>
              <h1 
                className="text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight transition-transform duration-500 ease-out will-change-transform"
                style={{
                  color: '#bda985',
                  transform: `translate3d(${-mousePosition.x * 0.25}px, ${scrollY * -0.04}px, 0)`
                }}
              >
                Excellence
              </h1>
              
              {/* Decorative line with smooth scaling */}
              <div 
                className="w-24 h-1 rounded-full mt-6 transition-transform duration-300 ease-out will-change-transform"
                style={{
                  background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)',
                  transform: `scaleX(${1 + mousePosition.x * 0.008}) translate3d(0, 0, 0)`
                }}
              />
            </div>

            {/* Description with smooth fade */}
            <p 
              className="text-xl text-gray-700 leading-relaxed max-w-xl transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translate3d(0, ${scrollY * -0.06}px, 0)`
              }}
            >
              Personalized and tailored legal advice for corporates, legal firms, and individuals. 
              Our boutique approach ensures every client receives dedicated attention and 
              strategic counsel across all practice areas.
            </p>

            {/* Interactive Buttons with enhanced hover states */}
            <div 
              className="flex flex-col sm:flex-row gap-6 transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translate3d(0, ${scrollY * -0.04}px, 0)`
              }}
            >
              <button 
                className="group relative px-8 py-4 text-lg font-bold rounded-xl overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1 shadow-xl will-change-transform"
                style={{
                  background: '#000000',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#bda985';
                  e.target.style.transform = 'scale(1.05) translateY(-4px) translate3d(0, 0, 0)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#000000';
                  e.target.style.transform = 'scale(1) translateY(0) translate3d(0, 0, 0)';
                }}
              >
                <span className="relative flex items-center gap-3">
                  Schedule Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                </span>
              </button>
              
              <button className="group px-8 py-4 text-lg font-bold rounded-xl border-2 border-gray-800 text-gray-800 transition-all duration-500 ease-out hover:bg-gray-800 hover:text-white hover:scale-105">
                <span className="flex items-center gap-3">
                  <Phone size={18} className="group-hover:rotate-6 transition-transform duration-300 ease-out" />
                  Contact Us
                </span>
              </button>
            </div>

            {/* Smooth Testimonial Card */}
            <div 
              className="p-6 rounded-2xl backdrop-blur-sm border transition-all duration-700 ease-out hover:scale-105 will-change-transform"
              style={{
                background: 'rgba(255,255,255,0.95)',
                borderColor: 'rgba(189,169,133,0.2)',
                boxShadow: '0 10px 30px rgba(189,169,133,0.1)',
                transform: `translate3d(${mousePosition.y * 0.15}px, ${scrollY * -0.02}px, 0)`
              }}
            >
              <Quote size={20} style={{color: '#bda985'}} className="mb-3" />
              <p className="text-gray-800 leading-relaxed mb-4 italic transition-opacity duration-500">
                "{currentTestimonial.text}"
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-semibold text-black transition-opacity duration-500">{currentTestimonial.name}</div>
                  <div className="text-xs text-gray-600 transition-opacity duration-500">{currentTestimonial.company}</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill="#bda985" 
                      style={{color: '#bda985'}} 
                      className={`transition-all duration-300 ease-out delay-${i * 50}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Parallax Image Slider */}
          <div 
            className="relative h-[600px] lg:h-[700px] py-16 will-change-transform"
            style={{
              transform: `translate3d(${-mousePosition.x * 0.25}px, ${scrollY * 0.08}px, 0)`
            }}
          >
            {/* Main Image Container with enhanced parallax */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out will-change-transform ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                  }`}
                >
                  {/* Optimized Parallax Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out will-change-transform"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      transform: `scale(${1.08 + mousePosition.x * 0.001}) translate3d(0, ${scrollY * -0.03}px, 0)`
                    }}
                  />
                  
                  {/* Smooth Gradient Overlay */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-1000 ease-out"
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(0,0,0,0.4) 0%, 
                        rgba(0,0,0,0.1) 40%, 
                        rgba(189,169,133,0.3) 100%)`
                    }}
                  />

                  {/* Content Overlay with smooth animations */}
                  <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-end text-white">
                    <div 
                      className="mb-6 p-4 rounded-2xl backdrop-blur-sm transition-all duration-700 ease-out"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div 
                          className="p-3 rounded-xl transition-all duration-500 ease-out"
                          style={{background: 'rgba(189,169,133,0.9)'}}
                        >
                          <slide.icon size={24} color="#000000" />
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wider opacity-80 transition-opacity duration-500">
                          {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight transition-all duration-500">
                        {slide.title}
                      </h3>
                      <p className="text-base font-medium mb-4 opacity-90 transition-all duration-500" style={{color: '#bda985'}}>
                        {slide.subtitle}
                      </p>
                      <p className="text-sm leading-relaxed opacity-85 mb-6 transition-all duration-500">
                        {slide.description}
                      </p>

                      {/* Stats with smooth counter animation */}
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="text-2xl font-black transition-all duration-500" style={{color: '#bda985'}}>
                            {slide.stats.value}
                          </div>
                          <div className="text-xs opacity-70 transition-opacity duration-500">
                            {slide.stats.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Enhanced Navigation Controls */}
              <button 
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-6 top-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 ease-out shadow-lg z-20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="w-0 h-0 border-r-[10px] border-r-gray-800 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent -ml-1" />
              </button>
              
              <button 
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-6 top-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 ease-out shadow-lg z-20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="w-0 h-0 border-l-[10px] border-l-gray-800 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent -mr-1" />
              </button>

              {/* Enhanced Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeSlide(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ease-out hover:scale-125 disabled:cursor-not-allowed ${
                      index === currentSlide 
                        ? 'bg-white shadow-lg scale-125' 
                        : 'bg-white/40 hover:bg-white/70'
                    }`}
                    style={index === currentSlide ? {
                      boxShadow: '0 0 15px rgba(189,169,133,0.8)'
                    } : {}}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div 
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-15 transition-all duration-700 ease-out will-change-transform"
              style={{
                background: 'linear-gradient(135deg, #bda985 0%, transparent 100%)',
                transform: `translate3d(0, ${mousePosition.y * 0.4}px, 0) rotate(${scrollY * 0.05}deg)`,
                animation: 'pulse 3s ease-in-out infinite'
              }}
            />
            <div 
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-15 transition-all duration-700 ease-out will-change-transform"
              style={{
                background: 'linear-gradient(135deg, #bda985 0%, transparent 100%)',
                transform: `translate3d(0, ${-mousePosition.y * 0.25}px, 0) rotate(${-scrollY * 0.03}deg)`,
                animation: 'pulse 3s ease-in-out infinite',
                animationDelay: '1.5s'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxLawyerHero;