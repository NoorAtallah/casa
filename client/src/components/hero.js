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

    // Auto-play slider
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

  const currentSlideData = slides[currentSlide];
  const currentTestimonial = testimonials[currentSlide % testimonials.length];

  return (
    <>
      <style jsx>{`
        .hero-container {
          min-height: 100vh;
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(90deg, rgba(189,169,133,0.03) 1px, transparent 1px),
            linear-gradient(rgba(189,169,133,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: patternMove 30s linear infinite;
          opacity: 0.5;
        }

        @keyframes patternMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .main-layout {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .content-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem 3rem 4rem 0;
        }

        .slider-section {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(248,249,250,0.8) 0%, rgba(255,255,255,0.9) 100%);
          backdrop-filter: blur(10px);
        }

        .brand-badge {
          display: inline-block;
          background: rgba(189,169,133,0.1);
          color: #000000;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 2rem;
          border: 1px solid rgba(189,169,133,0.3);
        }

        .main-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.1;
          color: #000000;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }

        .title-highlight {
          color: #bda985;
          position: relative;
        }

        .main-description {
          font-size: 1.1rem;
          font-weight: 400;
          color: #000000;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          opacity: 0.85;
          max-width: 480px;
        }

        .action-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #000000;
          color: #ffffff;
          border: none;
          padding: 16px 32px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-primary:hover {
          background: #bda985;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(189,169,133,0.3);
        }

        .btn-secondary {
          background: transparent;
          color: #000000;
          border: 2px solid #000000;
          padding: 14px 30px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-secondary:hover {
          background: #000000;
          color: #ffffff;
        }

        .testimonial-card {
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(189,169,133,0.2);
          box-shadow: 0 8px 25px rgba(189,169,133,0.1);
          margin-top: 2rem;
        }

        .testimonial-text {
          font-size: 0.95rem;
          color: #000000;
          line-height: 1.5;
          margin-bottom: 1rem;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .author-info {
          font-size: 0.85rem;
          color: #000000;
          font-weight: 600;
        }

        .author-company {
          font-size: 0.75rem;
          color: #000000;
          opacity: 0.7;
        }

        .rating {
          display: flex;
          gap: 2px;
        }

        .slider-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          height: 600px;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(189,169,133,0.2);
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: translateX(100%);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .slide.active {
          opacity: 1;
          transform: translateX(0);
        }

        .slide.prev {
          transform: translateX(-100%);
        }

        .slide-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(0,0,0,0.7) 0%, 
            rgba(0,0,0,0.4) 50%, 
            rgba(189,169,133,0.3) 100%
          );
        }

        .slide-content {
          position: relative;
          z-index: 10;
          padding: 3rem 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: #ffffff;
        }

        .slide-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .slide-subtitle {
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .slide-description {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 2rem;
          opacity: 0.85;
        }

        .slide-stat {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .stat-value {
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.8;
        }

        .slider-controls {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 20;
        }

        .control-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .control-dot.active {
          background: #ffffff;
          border-color: #bda985;
        }

        .slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 20;
        }

        .slider-nav:hover {
          background: rgba(255,255,255,0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-prev {
          left: 20px;
        }

        .nav-next {
          right: 20px;
        }

        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: #bda985;
          transition: width 0.1s ease;
          z-index: 30;
        }

        @media (max-width: 1024px) {
          .main-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .slider-section {
            order: -1;
            min-height: 60vh;
          }
          
          .content-section {
            padding: 2rem 0;
          }
          
          .main-title {
            font-size: 2.5rem;
          }
          
          .slider-container {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .main-layout {
            padding: 0 1.5rem;
          }
          
          .action-row {
            flex-direction: column;
          }
          
          .slider-container {
            height: 400px;
          }
          
          .slide-content {
            padding: 2rem 1.5rem;
          }
          
          .slide-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div ref={containerRef} className="hero-container">
        <div className="background-pattern"></div>
        
        <div className="main-layout">
          <div ref={textRef} className="content-section">
            <div className="brand-badge">Casa Di Consiglio</div>

            <h1 className="main-title">
              Boutique Legal 
              <span className="title-highlight"> Counseling Excellence</span>
            </h1>

            <p className="main-description">
              Personalized and tailored legal advice for corporates, legal firms, and individuals. 
              Our boutique approach ensures every client receives dedicated attention and 
              strategic counsel across all practice areas.
            </p>

            <div className="action-row">
              <button className="btn-primary">
                Schedule Consultation
                <ArrowRight size={18} />
              </button>
              
              <button className="btn-secondary">
                <Phone size={18} />
                Contact Us
              </button>
            </div>

            <div className="testimonial-card">
              <Quote size={20} color="#bda985" style={{marginBottom: '10px'}} />
              <p className="testimonial-text">"{currentTestimonial.text}"</p>
              <div className="testimonial-author">
                <div>
                  <div className="author-info">{currentTestimonial.name}</div>
                  <div className="author-company">{currentTestimonial.company}</div>
                </div>
                <div className="rating">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#bda985" color="#bda985" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="slider-section">
            <div ref={sliderRef} className="slider-container">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : index === currentSlide - 1 ? 'prev' : ''}`}
                >
                  <div 
                    className="slide-background slide-image"
                    style={{backgroundImage: `url(${slide.image})`}}
                  ></div>
                  <div className="slide-overlay"></div>
                  <div className="slide-content">
                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-subtitle">{slide.subtitle}</p>
                    <p className="slide-description">{slide.description}</p>
                    {/* <div className="slide-stat">
                      <div className="stat-value">{slide.stats.value}</div>
                      <div className="stat-label">{slide.stats.label}</div>
                    </div> */}
                  </div>
                </div>
              ))}

              <button className="slider-nav nav-prev" onClick={prevSlide}>
                <ChevronLeft size={24} color="#ffffff" />
              </button>
              
              <button className="slider-nav nav-next" onClick={nextSlide}>
                <ChevronRight size={24} color="#ffffff" />
              </button>

              <div className="slider-controls">
                {slides.map((_, index) => (
                  <div 
                    key={index}
                    className={`control-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></div>
                ))}
              </div>

              <div 
                className="progress-bar"
                style={{width: `${((currentSlide + 1) / slides.length) * 100}%`}}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawyerHeroSection;