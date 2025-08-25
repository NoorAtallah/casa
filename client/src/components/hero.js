'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Building, TrendingUp, Scale, Users, ArrowRight, Award, Shield, Briefcase, Home, Heart, Gavel } from 'lucide-react';

const LawFirmHero = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/20 relative overflow-hidden">
      {/* Elegant floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#BDA985]/40 rounded-full animate-elegant-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-[#BDA985]/60 rounded-full animate-elegant-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-[#BDA985]/30 rounded-full animate-elegant-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-60 right-20 w-1.5 h-1.5 bg-[#BDA985]/50 rounded-full animate-elegant-float" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Subtle geometric lines */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-24 h-px bg-gradient-to-r from-[#BDA985]/30 to-transparent animate-line-grow"></div>
        <div className="absolute top-32 left-16 w-px h-24 bg-gradient-to-b from-[#BDA985]/30 to-transparent animate-line-grow" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 right-16 w-24 h-px bg-gradient-to-l from-[#BDA985]/30 to-transparent animate-line-grow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 right-16 w-px h-24 bg-gradient-to-t from-[#BDA985]/30 to-transparent animate-line-grow" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Boutique credentials */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
        <div className={`flex items-center space-x-3 md:space-x-6 ${isVisible ? 'animate-elegant-fade-in' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
          <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-600">
            <Award className="w-3 h-3 md:w-4 md:h-4 text-[#BDA985]" />
            <span className="hidden sm:inline">Boutique Firm</span>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-600">
            <Shield className="w-3 h-3 md:w-4 md:h-4 text-[#BDA985]" />
            <span className="hidden sm:inline">Personalized Service</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Casa Di Consiglio Brand Title */}
          <div className="text-center mb-12 md:mb-20">
            <div className={`${isVisible ? 'animate-elegant-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 tracking-tight">
                CASA DI
                <span className="block text-[#BDA985]">CONSIGLIO</span>
              </h1>
              <div className="w-20 md:w-32 h-px bg-[#BDA985] mx-auto mb-4 md:mb-6"></div>
              <p className="text-base md:text-xl text-gray-600 font-light tracking-wide mb-2">BOUTIQUE LEGAL COUNSELING</p>
              <p className="text-xs md:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed px-4">
                Personalized and tailored legal advice and general counseling to corporates, legal firms, and individuals
              </p>
            </div>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* LEFT TEXT - Hidden on mobile, shows on lg+ */}
            <div className="hidden lg:block lg:col-span-3 space-y-6 xl:space-y-10">
              <div className={`${isVisible ? 'animate-elegant-slide-left' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
                <div className="mb-6 xl:mb-8">
                  <div className="w-8 xl:w-12 h-0.5 bg-[#BDA985] mb-4 xl:mb-6 animate-line-grow"></div>
                </div>
              </div>
              
              {/* Practice area cards */}
              <div className="space-y-6 xl:space-y-8">
                {practiceAreas.slice(0, 2).map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div 
                      key={index}
                      className={`group cursor-pointer ${
                        isVisible ? 'animate-elegant-fade-in' : 'opacity-0'
                      }`}
                      style={{animationDelay: `${1.6 + index * 0.3}s`}}
                    >
                      <div className="flex items-start space-x-3 xl:space-x-5 p-4 xl:p-6 rounded-2xl hover:bg-white/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-[#BDA985]/20">
                        <div className="w-10 h-10 xl:w-12 xl:h-12 bg-gradient-to-br from-[#BDA985]/20 to-[#BDA985]/10 rounded-xl flex items-center justify-center group-hover:from-[#BDA985] group-hover:to-[#BDA985]/80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <IconComponent className="w-5 h-5 xl:w-6 xl:h-6 text-[#BDA985] group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-base xl:text-lg text-gray-900 group-hover:text-[#BDA985] transition-colors duration-300 mb-2">
                            {area.title}
                          </h4>
                          <p className="text-xs xl:text-sm text-gray-600 mb-3 leading-relaxed">{area.subtitle}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {area.areas.slice(0, 2).map((specialty, idx) => (
                              <span key={idx} className="text-xs bg-[#BDA985]/10 text-[#BDA985] px-2 py-1 rounded-full">
                                {specialty}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#BDA985] font-bold text-base xl:text-lg">{area.stats.value}</span>
                            <ArrowRight className="w-3 h-3 xl:w-4 xl:h-4 text-gray-400 group-hover:text-[#BDA985] group-hover:translate-x-2 transition-all duration-300" />
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
              <div className={`relative ${isVisible ? 'animate-elegant-scale-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                {/* Elegant backdrop glow */}
                <div className="absolute inset-0 bg-gradient-radial from-[#BDA985]/20 via-[#BDA985]/5 to-transparent rounded-full scale-125 blur-3xl animate-pulse-slow"></div>
                
                {/* Justice Statue - Hero Element */}
                <Image 
                  src="/images/2.png"
                  alt="Lady Justice 3D Statue"
                  width={520}
                  height={750}
                  priority
                  className="w-[280px] h-[400px] sm:w-[350px] sm:h-[500px] md:w-[420px] md:h-[600px] lg:w-[520px] lg:h-[750px] object-contain mx-auto filter drop-shadow-[0_15px_30px_rgba(189,169,133,0.3)] md:drop-shadow-[0_30px_60px_rgba(189,169,133,0.4)] relative z-10"
                />
                
                {/* Simple orbiting elements */}
                <div className="absolute inset-0 animate-elegant-orbit">
                  <div className="absolute top-16 left-16 md:top-32 md:left-32 w-2 h-2 md:w-4 md:h-4 bg-[#BDA985]/30 rounded-full blur-sm"></div>
                </div>
                <div className="absolute inset-0 animate-elegant-orbit-reverse" style={{animationDelay: '3s'}}>
                  <div className="absolute bottom-16 right-16 md:bottom-32 md:right-32 w-1.5 h-1.5 md:w-3 md:h-3 bg-[#BDA985]/40 rounded-full blur-sm"></div>
                </div>
              </div>
            </div>

            {/* RIGHT TEXT - Hidden on mobile, shows on lg+ */}
            <div className="hidden lg:block lg:col-span-3 space-y-6 xl:space-y-10">
              <div className={`${isVisible ? 'animate-elegant-slide-right' : 'opacity-0'}`} style={{animationDelay: '1.4s'}}>
                <div className="mb-8 xl:mb-10">
                </div>
                
                {/* Boutique advantage badge */}
                <div className="flex justify-end mb-8 xl:mb-10">
                  <div className="w-20 h-20 xl:w-28 xl:h-28 border-2 border-[#BDA985] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500 hover:rotate-12 animate-elegant-pulse cursor-pointer">
                    <div className="text-center">
                      <div className="text-xs xl:text-sm font-bold text-[#BDA985] tracking-widest">BOUTIQUE</div>
                      <div className="text-xs text-gray-500 mt-1">EXCELLENCE</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Practice area cards */}
              <div className="space-y-6 xl:space-y-8">
                {practiceAreas.slice(2, 4).map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div 
                      key={index}
                      className={`group cursor-pointer ${
                        isVisible ? 'animate-elegant-fade-in' : 'opacity-0'
                      }`}
                      style={{animationDelay: `${2.2 + index * 0.3}s`}}
                    >
                      <div className="flex items-start space-x-3 xl:space-x-5 p-4 xl:p-6 rounded-2xl hover:bg-white/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-[#BDA985]/20">
                        <div className="w-10 h-10 xl:w-12 xl:h-12 bg-gradient-to-br from-[#BDA985]/20 to-[#BDA985]/10 rounded-xl flex items-center justify-center group-hover:from-[#BDA985] group-hover:to-[#BDA985]/80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <IconComponent className="w-5 h-5 xl:w-6 xl:h-6 text-[#BDA985] group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-base xl:text-lg text-gray-900 group-hover:text-[#BDA985] transition-colors duration-300 mb-2">
                            {area.title}
                          </h4>
                          <p className="text-xs xl:text-sm text-gray-600 mb-3 leading-relaxed">{area.subtitle}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {area.areas.slice(0, 3).map((specialty, idx) => (
                              <span key={idx} className="text-xs bg-[#BDA985]/10 text-[#BDA985] px-2 py-1 rounded-full">
                                {specialty}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#BDA985] font-bold text-base xl:text-lg">{area.stats.value}</span>
                            <ArrowRight className="w-3 h-3 xl:w-4 xl:h-4 text-gray-400 group-hover:text-[#BDA985] group-hover:translate-x-2 transition-all duration-300" />
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
          <div className={`lg:hidden mt-12 ${isVisible ? 'animate-elegant-fade-in' : 'opacity-0'}`} style={{animationDelay: '1.5s'}}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {practiceAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div 
                    key={index}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-start space-x-4 p-4 md:p-6 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-[#BDA985]/20">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#BDA985]/20 to-[#BDA985]/10 rounded-xl flex items-center justify-center group-hover:from-[#BDA985] group-hover:to-[#BDA985]/80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-[#BDA985] group-hover:text-white transition-colors duration-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm md:text-lg text-gray-900 group-hover:text-[#BDA985] transition-colors duration-300 mb-1 md:mb-2">
                          {area.title}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600 mb-3 leading-relaxed">{area.subtitle}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {area.areas.slice(0, 2).map((specialty, idx) => (
                            <span key={idx} className="text-xs bg-[#BDA985]/10 text-[#BDA985] px-2 py-1 rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#BDA985] font-bold text-sm md:text-lg">{area.stats.value}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#BDA985] group-hover:translate-x-2 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>



          {/* Client testimonial */}
          <div className={`mt-16 md:mt-20 ${isVisible ? 'animate-elegant-fade-in' : 'opacity-0'}`} style={{animationDelay: '3s'}}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg mx-4 md:mx-0">
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#BDA985] text-base md:text-lg">★</div>
                    ))}
                  </div>
                </div>
                <p className="text-sm md:text-lg text-gray-700 italic mb-4 leading-relaxed">
                  &ldquo;Casa Di Consiglio provided exceptional personalized service for our corporate restructuring. Their boutique approach meant we received dedicated attention and tailored solutions that larger firms simply couldn&rsquo;t match.&rdquo;
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#BDA985]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#BDA985] font-bold text-xs md:text-sm">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-gray-800">Marco Rodriguez</p>
                    <p className="text-xs md:text-sm text-gray-500">CEO, TechCorp Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-16 md:mt-20 pb-16 md:pb-20 ${isVisible ? 'animate-elegant-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '3.5s'}}>
            <div className="space-y-4 md:space-y-6 px-4">
              <button className="group relative bg-gradient-to-r from-[#BDA985] to-[#BDA985]/90 text-white px-8 md:px-16 py-4 md:py-5 rounded-full text-base md:text-xl font-semibold hover:from-[#BDA985]/90 hover:to-[#BDA985] transition-all duration-700 transform hover:scale-105 shadow-2xl hover:shadow-[#BDA985]/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative">Schedule Your Consultation</span>
              </button>
              
              <p className="text-gray-500 text-base md:text-lg font-light">Personalized legal counsel tailored to you</p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-xs md:text-sm text-gray-500 mt-4">
                <span>📞 Personalized Service</span>
                <span>🏛️ Boutique Excellence</span>
                <span>⚖️ Complete Legal Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes elegant-fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes elegant-fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes elegant-scale-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes elegant-slide-left {
          0% {
            opacity: 0;
            transform: translateX(-80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes elegant-slide-right {
          0% {
            opacity: 0;
            transform: translateX(80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes elegant-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes elegant-orbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes elegant-orbit-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes line-grow {
          0% {
            width: 0;
            height: 0;
          }
          100% {
            width: 100%;
            height: 100%;
          }
        }
        
        @keyframes elegant-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
        
        .animate-elegant-fade-in-up {
          animation: elegant-fade-in-up 1.2s ease-out forwards;
        }
        
        .animate-elegant-fade-in {
          animation: elegant-fade-in 1s ease-out forwards;
        }
        
        .animate-elegant-scale-in {
          animation: elegant-scale-in 1.5s ease-out forwards;
        }
        
        .animate-elegant-slide-left {
          animation: elegant-slide-left 1.2s ease-out forwards;
        }
        
        .animate-elegant-slide-right {
          animation: elegant-slide-right 1.2s ease-out forwards;
        }
        
        .animate-elegant-float {
          animation: elegant-float 8s ease-in-out infinite;
        }
        
        .animate-elegant-orbit {
          animation: elegant-orbit 20s linear infinite;
        }
        
        .animate-elegant-orbit-reverse {
          animation: elegant-orbit-reverse 25s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-line-grow {
          animation: line-grow 2s ease-out forwards;
        }
        
        .animate-elegant-pulse {
          animation: elegant-pulse 3s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default LawFirmHero;