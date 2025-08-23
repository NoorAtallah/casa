'use client';

import { MapPin, Phone, Mail, Globe, Scale, TrendingUp, Users, Building2, Clock, ArrowUp, ExternalLink, Star, Sparkles } from 'lucide-react';

export default function Footer() {


  const countries = [
    "United Arab Emirates",
    "Kingdom of Bahrain", 
    "Arab Republic of Egypt",
    "Republic of Iraq"
  ];

  const quickLinks = [
    "About Us",
    "Our Services", 
    "Company Profile",
    "Contact Us"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(189, 169, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 169, 133, 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-[#BDA985] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-[#BDA985] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-[#BDA985] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute -top-24 left-16 w-48 h-48 border border-[#BDA985] border-opacity-5 rotate-45"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 border border-[#BDA985] border-opacity-10 rotate-12"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <div className="relative w-16 h-16 bg-white/10 backdrop-blur-sm border border-[#BDA985]/20 rounded-2xl flex items-center justify-center mr-4 p-1">
                <img
                  src="/images/1.png"
                  alt="Casa Di Consiglio Logo"
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#BDA985] to-transparent opacity-20 blur-lg rounded-2xl"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Casa Di Consiglio</h3>
                <p className="text-[#BDA985] font-semibold">Legal & Financial Solutions</p>
              </div>
            </div>
            
            <p className="text-zinc-300 mb-8 leading-relaxed">
              Your trusted partner for legal and financial consulting across the Middle East. Specializing in licensing, compliance, and regulatory guidance.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="group flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all duration-300">
                  <Phone className="w-5 h-5 text-[#BDA985]" />
                </div>
                <span className="text-white font-medium group-hover:text-[#BDA985] transition-colors duration-300">+971 56 385 8532</span>
              </div>
              
              <div className="group flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all duration-300">
                  <Mail className="w-5 h-5 text-[#BDA985]" />
                </div>
                <span className="text-white font-medium group-hover:text-[#BDA985] transition-colors duration-300">info@casadiconsiglio.com</span>
              </div>
              
              <div className="group flex items-start">
                <div className="w-10 h-10 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-xl flex items-center justify-center mr-4 mt-1 group-hover:bg-opacity-20 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-[#BDA985]" />
                </div>
                <span className="text-white font-medium leading-relaxed group-hover:text-[#BDA985] transition-colors duration-300">
                  Zone E, First Floor, Office # F13<br />
                  Sharjah Book Authority Building<br />
                  Al Zahia, Sharjah, UAE
                </span>
              </div>
            </div>
          </div>



          {/* Quick Links */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center mr-4">
                <Building2 className="w-6 h-6 text-[#BDA985]" />
              </div>
              <h4 className="text-2xl font-bold text-white">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="group text-zinc-300 hover:text-white transition-colors duration-300 flex items-center">
                    <div className="w-2 h-2 bg-[#BDA985] rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="group-hover:text-[#BDA985] transition-colors duration-300">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries & Business Hours */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-[#BDA985]" />
              </div>
              <h4 className="text-2xl font-bold text-white">Coverage Areas</h4>
            </div>
            <ul className="space-y-3 mb-10">
              {countries.map((country, index) => (
                <li key={index} className="group">
                  <span className="text-zinc-300 flex items-center group-hover:text-[#BDA985] transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#BDA985] rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                    {country}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-xl flex items-center justify-center mr-3">
                <Clock className="w-5 h-5 text-[#BDA985]" />
              </div>
              <h5 className="text-xl font-bold text-white">Business Hours</h5>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300">Sun - Thu:</span>
                <span className="text-[#BDA985] font-semibold">9 AM - 6 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-300">Friday:</span>
                <span className="text-[#BDA985] font-semibold">2 PM - 6 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-300">Saturday:</span>
                <span className="text-[#BDA985] font-semibold">By Appointment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter/CTA Section */}
        <div className="mt-20 pt-12 border-t border-zinc-800">
          <div className="relative bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 rounded-3xl p-12 md:p-16 border border-zinc-800 shadow-2xl overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#BDA985] from-0% via-transparent via-30% to-transparent opacity-[0.05]"></div>
            </div>

            <div className="relative text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-full border border-[#BDA985] border-opacity-30 mb-8">
                <Sparkles className="w-5 h-5 text-white mr-3" />
                <span className="text-white font-bold text-sm uppercase tracking-wider">Ready to Begin</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-[#BDA985]">Get Started?</span>
              </h3>
              <p className="text-zinc-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Contact our expert team today for personalized legal and financial consultation tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:+971563858532"
                  className="group relative overflow-hidden bg-[#BDA985] text-zinc-900 px-10 py-5 rounded-2xl font-bold text-lg uppercase tracking-wide hover:shadow-2xl hover:shadow-[#BDA985]/25 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4c4a0] to-[#BDA985] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="relative flex items-center justify-center">
                    <Phone className="w-6 h-6 mr-3" />
                    Call Now
                  </div>
                </a>
                <a
                  href="https://wa.me/971563858532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-[#BDA985] text-[#BDA985] px-10 py-5 rounded-2xl font-bold text-lg uppercase tracking-wide relative overflow-hidden hover:text-zinc-900 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-[#BDA985] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 mr-3" />
                    WhatsApp Us
                  </div>
                </a>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#BDA985] bg-opacity-5 rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-gradient-to-r from-zinc-900 to-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-400 text-sm mb-6 md:mb-0 text-center md:text-left">
              © 2025 Casa Di Consiglio. All rights reserved. | Legal & Financial Consulting Services
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="text-zinc-400 hover:text-[#BDA985] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-zinc-400 hover:text-[#BDA985] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="group bg-gradient-to-r from-[#BDA985] to-[#d4c4a0] text-zinc-900 p-3 rounded-2xl hover:shadow-lg hover:shadow-[#BDA985]/25 transition-all duration-300 hover:scale-110"
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
        <div className="h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent opacity-60"></div>
      </div>
    </footer>
  );
}