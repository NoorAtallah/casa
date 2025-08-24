'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone, ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const LawyerHeroSection = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const textRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "Corporate & Commercial Law",
      subtitle: "Strategic business solutions and corporate structuring",
      description: "Comprehensive corporate advice including mergers, acquisitions, commercial contracts, and business structuring. We guide corporates and legal firms through complex commercial transactions.",
      stats: { value: "200+", label: "Corporate Clients" },
      image: "https://dawoudlaw.com/wp-content/uploads/2020/10/service-4.jpg"
    },
    {
      title: "Banking & Finance",
      subtitle: "Expert financial legal advisory services",
      description: "Specialized counsel in banking regulations, financial instruments, investment structuring, and compliance. Our expertise spans traditional banking and modern fintech solutions.",
      stats: { value: "$500M+", label: "Deals Advised" },
      image: "https://www.gunesgunes.com/wp-content/uploads/2022/01/bankacilik-ve-finans-hukuku.jpeg"
    },
    {
      title: "Dispute Resolution & Litigation",
      subtitle: "Effective resolution of complex disputes",
      description: "From arbitration to court litigation, we provide strategic dispute resolution services. Our approach combines negotiation skills with robust legal representation.",
      stats: { value: "95%", label: "Success Rate" },
      image: "https://www.dajani-associates.com/wp-content/uploads/2024/06/dispute-resolution.png"
    },
    {
      title: "Tax & Private Client Services",
      subtitle: "Personalized legal and tax advisory",
      description: "Comprehensive tax planning, private client services, and family business structuring. We provide tailored solutions for high-net-worth individuals and family enterprises.",
      stats: { value: "150+", label: "Private Clients" },
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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      initAnimations();
    };
    document.head.appendChild(script);

    const interval = setInterval(() => {
      if (isAutoPlaying) {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, [isAutoPlaying, slides.length]);

  useEffect(() => {
    if (window.gsap) {
      animateSlideChange();
    }
  }, [currentSlide]);

  const initAnimations = () => {
    if (!window.gsap) return;
    const { gsap } = window;
    gsap.fromTo(textRef.current, 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
  };

  const animateSlideChange = () => {
    if (!window.gsap) return;
    const { gsap } = window;
    const slideContent = sliderRef.current?.querySelector('.slide-content');
    const slideImage = sliderRef.current?.querySelector('.slide-image');

    if (slideContent && slideImage) {
      gsap.fromTo(slideContent, 
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
      
      gsap.fromTo(slideImage, 
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentSlide % testimonials.length];

  return (
    <div ref={containerRef} className="min-h-screen bg-white font-sans relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full animate-pulse"
          style={{
            background: `
              linear-gradient(90deg, rgba(189,169,133,0.03) 1px, transparent 1px),
              linear-gradient(rgba(189,169,133,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      <div className="relative z-10 min-h-screen grid lg:grid-cols-2 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Content Section */}
        <div ref={textRef} className="flex flex-col justify-center py-16 lg:py-20 lg:pr-12">
          {/* Brand Badge */}
          <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm"
               style={{
                 background: 'rgba(189,169,133,0.1)',
                 border: '1px solid rgba(189,169,133,0.3)',
                 color: '#000000'
               }}>
            Casa Di Consiglio
          </div>

          {/* Main Title */}
          <h1 className="text-4xl lg:text-5xl xl:text-5xl font-black leading-tight text-black mb-6 tracking-tight">
            Boutique Legal 
            <span className="block lg:inline" style={{color: '#000000'}}> Counseling Excellence</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-800 leading-relaxed mb-10 max-w-lg opacity-90">
            Personalized and tailored legal advice for corporates, legal firms, and individuals. 
            Our boutique approach ensures every client receives dedicated attention and 
            strategic counsel across all practice areas.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-black text-white px-8 py-4 text-base font-semibold rounded-lg 
                             transition-all duration-300 flex items-center justify-center gap-3
                             active:scale-95 group hover:-translate-y-1 hover:shadow-2xl"
                    style={{'--hover-bg': '#bda985'}}
                    onMouseEnter={(e) => e.target.style.background = '#bda985'}
                    onMouseLeave={(e) => e.target.style.background = '#000000'}>
              Schedule Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="bg-transparent text-black border-2 border-black px-8 py-4 text-base font-semibold 
                             rounded-lg transition-all duration-300 flex items-center justify-center gap-3
                             hover:bg-black hover:text-white hover:shadow-lg active:scale-95">
              <Phone size={18} />
              Contact Us
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="p-6 rounded-2xl shadow-xl transition-all duration-300"
               style={{
                 background: 'rgba(255,255,255,0.9)',
                 backdropFilter: 'blur(10px)',
                 border: '1px solid rgba(189,169,133,0.2)',
                 boxShadow: '0 8px 25px rgba(189,169,133,0.1)'
               }}>
            <Quote size={20} style={{color: '#bda985'}} className="mb-3" />
            <p className="text-gray-800 leading-relaxed mb-4 italic">
              "{currentTestimonial.text}"
            </p>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-semibold text-black">{currentTestimonial.name}</div>
                <div className="text-xs text-gray-600">{currentTestimonial.company}</div>
              </div>
              <div className="flex gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#bda985" style={{color: '#bda985'}} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="flex items-center justify-center bg-gradient-to-br from-gray-50/80 to-white/90 
                        backdrop-blur-sm order-first lg:order-last min-h-[60vh] lg:min-h-full">
          <div ref={sliderRef} className="relative w-full max-w-lg h-96 lg:h-[600px] overflow-hidden 
                                         rounded-2xl shadow-2xl shadow-black/20">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-out slide-content
                  ${index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                  }`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat slide-image"
                  style={{backgroundImage: `url(${slide.image})`}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" 
                     style={{background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(189,169,133,0.3) 100%)'}} />
                
                <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-end text-white">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-base font-medium mb-4 opacity-90">
                    {slide.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed mb-8 opacity-85">
                    {slide.description}
                  </p>
                  
           
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-8 bg-white/90 backdrop-blur-md 
                         border border-white/30 w-10 h-10 rounded-full flex items-center justify-center
                         hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg z-20"
            >
              <div className="w-0 h-0 border-r-[8px] border-r-gray-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent -ml-1" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-8 bg-white/90 backdrop-blur-md 
                         border border-white/30 w-10 h-10 rounded-full flex items-center justify-center
                         hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg z-20"
            >
              <div className="w-0 h-0 border-l-[8px] border-l-gray-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent -mr-1" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {slides.map((_, index) => (
                                  <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white' 
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                  style={index === currentSlide ? {border: '2px solid #bda985'} : {}}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div 
              className="absolute bottom-0 left-0 h-1 transition-all duration-150 z-30"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
                background: '#bda985'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerHeroSection;