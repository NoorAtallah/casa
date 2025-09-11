'use client';

import { MapPin, Phone, Mail, Globe, Scale, TrendingUp, Users, Building2, Clock, ArrowUp, ExternalLink, Star, Sparkles } from 'lucide-react';

export default function Footer() {

  const countries = [
    "United Arab Emirates",
    "Hashemite Kingdom of Jordan", 
    "Kingdom of Spain"
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "KYC", href: "/kyc" },
    { name: "Contact", href: "/contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative text-black overflow-hidden" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)'
    }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(189, 169, 133, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 169, 133, 0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/3 w-1 h-1 rounded-full animate-pulse" style={{background: '#bda985'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full animate-pulse" style={{background: '#bda985', animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/6 w-2 h-2 rounded-full animate-pulse" style={{background: '#bda985', animationDelay: '2s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute -top-24 left-16 w-48 h-48 border rotate-45" style={{borderColor: 'rgba(189, 169, 133, 0.08)'}}></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 border rotate-12" style={{borderColor: 'rgba(189, 169, 133, 0.12)'}}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <div className="relative w-16 h-16 backdrop-blur-sm border rounded-2xl flex items-center justify-center mr-4 p-1" style={{
                background: 'rgba(255,255,255,0.6)',
                borderColor: 'rgba(189,169,133,0.3)'
              }}>
                <img
                  src="/images/1.png"
                  alt="Casa Di Consiglio Logo"
                  className="w-full h-full object-contain"
                />
                <div className="absolute -inset-1 opacity-20 blur-lg rounded-2xl" style={{
                  background: 'linear-gradient(135deg, #bda985, transparent)'
                }}></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-1">Casa Di Consiglio</h3>
                <p className="font-semibold" style={{color: '#bda985'}}>Business Consultants & Legal Studies and Research</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Your trusted partner for legal and financial consulting across the Middle East. Specializing in licensing, compliance, and regulatory guidance.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="group flex items-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-all duration-300" style={{
                  background: 'rgba(189,169,133,0.15)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(189,169,133,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(189,169,133,0.15)';
                }}>
                  <Phone className="w-5 h-5" style={{color: '#bda985'}} />
                </div>
                <span className="text-black font-medium group-hover:text-[#bda985] transition-colors duration-300">+971 56 385 8532</span>
              </div>
              
              <div className="group flex items-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-all duration-300" style={{
                  background: 'rgba(189,169,133,0.15)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(189,169,133,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(189,169,133,0.15)';
                }}>
                  <Mail className="w-5 h-5" style={{color: '#bda985'}} />
                </div>
                <span className="text-black font-medium group-hover:text-[#bda985] transition-colors duration-300">info@casadiconsiglio.com</span>
              </div>
              
              <div className="group flex items-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 mt-1 transition-all duration-300" style={{
                  background: 'rgba(189,169,133,0.15)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(189,169,133,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(189,169,133,0.15)';
                }}>
                  <MapPin className="w-5 h-5" style={{color: '#bda985'}} />
                </div>
                <span className="text-black font-medium leading-relaxed group-hover:text-[#bda985] transition-colors duration-300">
                  Zone E, First Floor, Office # F13<br />
                  Sharjah Book Authority Building<br />
                  Sharjah Publishing City Free Zone<br />
                  Al Zahia, Sharjah, UAE
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4" style={{
                background: 'rgba(189,169,133,0.15)'
              }}>
                <Building2 className="w-6 h-6" style={{color: '#bda985'}} />
              </div>
              <h4 className="text-2xl font-bold text-black">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="group text-gray-700 hover:text-black transition-colors duration-300 flex items-center">
                    <div className="w-2 h-2 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300" style={{background: '#bda985'}}></div>
                    <span className="group-hover:text-[#bda985] transition-colors duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries & Business Hours */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4" style={{
                background: 'rgba(189,169,133,0.15)'
              }}>
                <Globe className="w-6 h-6" style={{color: '#bda985'}} />
              </div>
              <h4 className="text-2xl font-bold text-black">Coverage Areas</h4>
            </div>
            <ul className="space-y-3 mb-10">
              {countries.map((country, index) => (
                <li key={index} className="group">
                  <span className="text-gray-700 flex items-center group-hover:text-[#bda985] transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300" style={{background: '#bda985'}}></div>
                    {country}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3" style={{
                background: 'rgba(189,169,133,0.15)'
              }}>
                <Clock className="w-5 h-5" style={{color: '#bda985'}} />
              </div>
              <h5 className="text-xl font-bold text-black">Business Hours</h5>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Mon - Thu:</span>
                <span className="font-semibold" style={{color: '#bda985'}}>9 AM - 6 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Friday - Sunday:</span>
                <span className="font-semibold" style={{color: '#bda985'}}>By Appointment</span>
              </div>
          
            </div>
          </div>
        </div>

        {/* Newsletter/CTA Section */}
  
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t" style={{
        background: 'linear-gradient(135deg, rgba(189,169,133,0.1) 0%, rgba(255,255,255,0.9) 100%)',
        borderColor: 'rgba(189,169,133,0.2)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-6 md:mb-0 text-center md:text-left">
              © 2025 Casa Di Consiglio. All rights reserved. | Business Consultants & Legal Studies and Research
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-[#bda985] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-[#bda985] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="group text-black p-3 rounded-2xl transition-all duration-300 hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #bda985, #d4c4a0)',
                  boxShadow: '0 8px 25px rgba(189,169,133,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 12px 30px rgba(189,169,133,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 8px 25px rgba(189,169,133,0.3)';
                }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Final Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-1 opacity-60" style={{
          background: 'linear-gradient(90deg, transparent 0%, #bda985 50%, transparent 100%)'
        }}></div>
      </div>
    </footer>
  );
}