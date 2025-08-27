'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Building2, Users, Shield, Award, Scale, TrendingUp, FileText, Handshake, ArrowRight, CheckCircle, Star, Globe, Clock } from 'lucide-react';

export default function AboutUsPage() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const storyRef = useRef(null);
  const servicesRef = useRef(null);
  const valuesRef = useRef(null);
  const ctaRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const coreServices = [
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Articles of Association, MOA, Shareholding Agreements, and comprehensive corporate documentation",
      features: ["Articles of Association", "MOA Preparation", "Shareholding Agreements", "Corporate Documentation"]
    },
    {
      icon: Shield,
      title: "Confidentiality & NDAs", 
      description: "Non-disclosure agreements, confidentiality agreements, and privacy protection services",
      features: ["Non-Disclosure Agreements", "Confidentiality Agreements", "Privacy Protection", "Data Security"]
    },
    {
      icon: Handshake,
      title: "Contracts & Agreements",
      description: "Purchase and sales agreements, contract drafting, and comprehensive agreement review services",
      features: ["Purchase & Sales Agreements", "Contract Drafting", "Agreement Review", "Legal Analysis"]
    },
    {
      icon: Scale,
      title: "Legal Opinions & Advisory",
      description: "Expert legal opinions, professional advisory services, and strategic legal consulting",
      features: ["Legal Opinions", "Professional Advisory", "Strategic Consulting", "Expert Analysis"]
    }
  ];

  const companyValues = [
    {
      icon: Award,
      title: "Elite Service Quality",
      description: "We deliver exceptional, high-quality consultancy services that exceed expectations and set industry standards."
    },
    {
      icon: Users,
      title: "Personalized Approach", 
      description: "Tailored solutions designed specifically for your unique needs, ensuring maximum relevance and effectiveness."
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective Excellence",
      description: "Professional services offered at reasonable prices with flexible arrangements that respect your budget."
    },
    {
      icon: Globe,
      title: "Comprehensive Coverage",
      description: "Complete legal and consultancy services across multiple jurisdictions and practice areas."
    }
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

      // Header animation
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

      // Story section animation
      gsap.fromTo(storyRef.current?.children || [], 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      // Services animation
      gsap.fromTo(servicesRef.current?.children || [], 
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      // Values animation
      gsap.fromTo(valuesRef.current?.children || [], 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 85%",
            end: "bottom 20%",
          }
        }
      );

      // CTA animation
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

        {/* Floating decorative elements */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-8"
            style={{
              left: `${10 + (i * 20)}%`,
              top: `${15 + (i * 12)}%`,
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
            About Our Firm
          </div>
          
          <h1 className="mb-8">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-4">
              <span className="block text-black">CASA DI</span>
              <span className="block" style={{ color: '#bda985' }}>CONSIGLIO</span>
            </div>
          </h1>
          
          <div 
            className="w-32 h-1 rounded-full mx-auto mb-8"
            style={{
              background: 'linear-gradient(90deg, #bda985 0%, transparent 100%)',
            }}
          />
          
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
            Elite Legal & Financial <span style={{ color: '#bda985' }}>Consulting</span> Services
          </p>
        </div>

        {/* Company Story */}
        <div 
          ref={storyRef}
          className="mb-20"
        >
          <div 
            className="p-8 md:p-12 rounded-3xl shadow-lg"
            style={{
              background: 'rgba(255,255,255,0.95)',
              border: '1px solid rgba(189,169,133,0.2)',
              boxShadow: '0 25px 50px rgba(189,169,133,0.1)'
            }}
          >
            {/* Company Registration Badge */}
            <div className="flex items-center justify-center mb-8">
              <div 
                className="flex items-center px-6 py-3 rounded-full border"
                style={{
                  background: 'rgba(189,169,133,0.1)',
                  borderColor: 'rgba(189,169,133,0.3)'
                }}
              >
                <Building2 className="w-5 h-5 mr-3" style={{color: '#bda985'}} />
                <span className="font-bold text-sm uppercase tracking-wider" style={{color: '#bda985'}}>Reg. No. 4202724.01 SPC</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Our <span style={{ color: '#bda985' }}>Story</span>
                </h2>
                <div className="text-gray-700 space-y-6 leading-relaxed">
                  <p>
                    Casa Di Consiglio FZC-LLC is a recently established consultancy firm that presents elite services to the legal and business community. We specialize in providing comprehensive consultancy services ranging from general counseling to sophisticated legal advisory services.
                  </p>
                  <p>
                    Our services are primarily designed for law firms and legal entities seeking to enhance their service offerings with our specialized expertise. We bridge the gap between complex legal requirements and practical business solutions.
                  </p>
                  <p>
                    What sets us apart is our commitment to delivering tailored services at reasonable prices, combined with exceptional flexibility in all aspects of our work relationships.
                  </p>
                </div>
              </div>

              <div 
                className="p-8 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(189,169,133,0.1) 0%, rgba(255,255,255,0.5) 100%)',
                  border: '2px solid rgba(189,169,133,0.2)'
                }}
              >
                <h3 className="text-2xl font-bold text-black mb-6">Our Mission</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  To provide outstanding specialized consultations and advisory services that enable firms to deliver quality service and exceptional output to their valued clients.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{color: '#bda985'}} />
                    <span className="text-gray-700">High-complexity situation handling</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{color: '#bda985'}} />
                    <span className="text-gray-700">Cost-effective service bundles</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{color: '#bda985'}} />
                    <span className="text-gray-700">Flexible work arrangements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
              OUR <span style={{ color: '#bda985' }}>SERVICES</span>
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              Comprehensive legal documentation and advisory services tailored to your needs
            </p>
          </div>

          <div 
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {coreServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl"
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
                  <div className="flex items-start mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300"
                      style={{ background: 'rgba(189,169,133,0.15)' }}
                    >
                      <IconComponent className="w-7 h-7" style={{color: '#bda985'}} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black group-hover:text-[#bda985] transition-colors duration-300 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{background: '#bda985'}} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
              WHY CHOOSE <span style={{ color: '#bda985' }}>US</span>
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              The values that drive our commitment to excellence
            </p>
          </div>

          <div 
            ref={valuesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="group text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(189,169,133,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(189,169,133,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(189,169,133,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.8)';
                    e.currentTarget.style.borderColor = 'rgba(189,169,133,0.2)';
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300"
                    style={{ background: 'rgba(189,169,133,0.15)' }}
                  >
                    <IconComponent className="w-8 h-8" style={{color: '#bda985'}} />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3 group-hover:text-[#bda985] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
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