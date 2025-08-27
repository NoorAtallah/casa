'use client';
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Globe, Clock, Building2, Star, ArrowRight, ExternalLink, Users, Shield } from 'lucide-react';

export default function ContactUsPage() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contactCardsRef = useRef(null);
  const locationRef = useRef(null);
  const hoursRef = useRef(null);
  const ctaRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Directly",
      primary: "+971 56 385 8532",
      description: "Speak with our legal experts",
      action: "tel:+971563858532",
      actionText: "Call Now",
      color: "#bda985"
    },
    {
      icon: Mail,
      title: "Email Consultation",
      primary: "info@casadiconsiglio.com",
      description: "Get detailed responses to your inquiries",
      action: "mailto:info@casadiconsiglio.com",
      actionText: "Send Email",
      color: "#bda985"
    },
    {
      icon: ExternalLink,
      title: "WhatsApp Direct",
      primary: "+971 56 385 8532",
      description: "Quick consultations and immediate responses",
      action: "https://wa.me/971563858532",
      actionText: "Message Us",
      color: "#25D366"
    }
  ];

  const coverageAreas = [
    "United Arab Emirates",
    "Kingdom of Bahrain", 
    "Arab Republic of Egypt",
    "Republic of Iraq"
  ];

  const businessHours = [
    { days: "Sunday - Thursday", time: "9 AM - 6 PM", status: "Regular Hours" },
    { days: "Friday", time: "2 PM - 6 PM", status: "Limited Hours" },
    { days: "Saturday", time: "By Appointment", status: "Appointment Only" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    if (!isVisible) return;

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

      gsap.fromTo(headerRef.current, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            end: "bottom 20%",
          }
        }
      );

      gsap.fromTo(contactCardsRef.current?.children || [], 
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: contactCardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      gsap.fromTo(locationRef.current, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: locationRef.current,
            start: "top 85%",
            end: "bottom 20%",
          }
        }
      );

      gsap.fromTo(hoursRef.current, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: hoursRef.current,
            start: "top 85%",
            end: "bottom 20%",
          }
        }
      );

      gsap.fromTo(ctaRef.current, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            end: "bottom 20%",
          }
        }
      );
    };

    loadGSAP();
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
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

        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-8"
            style={{
              left: `${15 + (i * 20)}%`,
              top: `${20 + (i * 15)}%`,
              width: `${20 + i * 6}px`,
              height: `${20 + i * 6}px`,
              background: '#bda985',
              borderRadius: i % 2 === 0 ? '50%' : '20%',
              animation: `float ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div 
          ref={headerRef}
          className="text-center mb-16"
        >
          <div 
            className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-sm border-2 transition-all duration-500 hover:scale-105 shadow-lg mb-8"
            style={{
              background: 'rgba(255,255,255,0.9)',
              borderColor: '#bda985',
              color: '#000000',
              boxShadow: '0 8px 25px rgba(189,169,133,0.15)'
            }}
          >
            Get In Touch
          </div>
          
          <h1 className="mb-8">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-4">
              <span className="block text-black">CONTACT</span>
              <span className="block" style={{ color: '#bda985' }}>US</span>
            </div>
          </h1>
          
          <div 
            className="w-32 h-1 rounded-full mx-auto mb-8"
            style={{
              background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)',
            }}
          />
          
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
            Ready to discuss your legal needs? Reach out to our <span style={{ color: '#bda985' }}>expert team</span>
          </p>
        </div>

        {/* Contact Methods */}
        <div 
          ref={contactCardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl text-center"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: '2px solid rgba(189,169,133,0.2)',
                  boxShadow: '0 8px 25px rgba(189,169,133,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#bda985';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(189,169,133,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(189,169,133,0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(189,169,133,0.1)';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300"
                  style={{ background: 'rgba(189,169,133,0.15)' }}
                >
                  <IconComponent className="w-8 h-8" style={{color: method.color}} />
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#bda985] transition-colors duration-300">
                  {method.title}
                </h3>
                
                <p className="text-lg font-semibold text-black mb-2">
                  {method.primary}
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {method.description}
                </p>

                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: method.color,
                    color: method.color === '#25D366' ? '#ffffff' : '#000000'
                  }}
                  onMouseEnter={(e) => {
                    if (method.color === '#bda985') {
                      e.target.style.background = '#d4c4a0';
                    } else {
                      e.target.style.transform = 'scale(1.05) translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = method.color;
                    e.target.style.transform = 'scale(1) translateY(0)';
                  }}
                >
                  {method.actionText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Location & Coverage Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Office Location */}
          <div 
            ref={locationRef}
            className="p-8 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.95)',
              border: '2px solid rgba(189,169,133,0.2)',
              boxShadow: '0 8px 25px rgba(189,169,133,0.1)'
            }}
          >
            <div className="flex items-center mb-6">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4"
                style={{ background: 'rgba(189,169,133,0.15)' }}
              >
                <MapPin className="w-6 h-6" style={{color: '#bda985'}} />
              </div>
              <h2 className="text-2xl font-bold text-black">Our Office</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-black mb-2">Casa Di Consiglio FZC-LLC</h3>
                <div className="text-gray-700 leading-relaxed">
                  <p>Zone E, First Floor, Office # F13</p>
                  <p>Sharjah Book Authority Building</p>
                  <p>Al Zahia, Sharjah, UAE</p>
                </div>
              </div>

              <div 
                className="p-4 rounded-xl"
                style={{ background: 'rgba(189,169,133,0.1)' }}
              >
                <div className="flex items-center mb-2">
                  <Building2 className="w-4 h-4 mr-2" style={{color: '#bda985'}} />
                  <span className="font-semibold text-sm" style={{color: '#bda985'}}>Registration Details</span>
                </div>
                <p className="text-gray-700 text-sm">Reg. No. 4202724.01 SPC</p>
              </div>
            </div>
          </div>

          {/* Coverage Areas */}
          <div className="space-y-8">
            <div 
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.95)',
                border: '2px solid rgba(189,169,133,0.2)',
                boxShadow: '0 8px 25px rgba(189,169,133,0.1)'
              }}
            >
              <div className="flex items-center mb-6">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4"
                  style={{ background: 'rgba(189,169,133,0.15)' }}
                >
                  <Globe className="w-6 h-6" style={{color: '#bda985'}} />
                </div>
                <h2 className="text-2xl font-bold text-black">Coverage Areas</h2>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {coverageAreas.map((country, index) => (
                  <div key={index} className="group flex items-center p-3 rounded-lg transition-all duration-300" style={{
                    background: 'rgba(189,169,133,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(189,169,133,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(189,169,133,0.05)';
                  }}>
                    <div className="w-3 h-3 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" style={{background: '#bda985'}} />
                    <span className="text-gray-700 font-medium group-hover:text-[#bda985] transition-colors duration-300">{country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div 
          ref={hoursRef}
          className="mb-20"
        >
          <div 
            className="p-8 rounded-2xl max-w-4xl mx-auto"
            style={{
              background: 'rgba(255,255,255,0.95)',
              border: '2px solid rgba(189,169,133,0.2)',
              boxShadow: '0 8px 25px rgba(189,169,133,0.1)'
            }}
          >
            <div className="flex items-center justify-center mb-8">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4"
                style={{ background: 'rgba(189,169,133,0.15)' }}
              >
                <Clock className="w-6 h-6" style={{color: '#bda985'}} />
              </div>
              <h2 className="text-2xl font-bold text-black">Business Hours</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {businessHours.map((schedule, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(189,169,133,0.1) 0%, rgba(255,255,255,0.5) 100%)',
                    border: '1px solid rgba(189,169,133,0.2)'
                  }}
                >
                  <h3 className="font-bold text-black mb-2">{schedule.days}</h3>
                  <p className="text-xl font-bold mb-2" style={{color: '#bda985'}}>{schedule.time}</p>
                  <span 
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(189,169,133,0.2)',
                      color: '#000000'
                    }}
                  >
                    {schedule.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

 
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
}