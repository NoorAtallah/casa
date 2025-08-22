'use client';

import { MapPin, Phone, Mail, Globe, Scale, TrendingUp, Users, Building2, Clock, ArrowUp, ExternalLink } from 'lucide-react';

export default function Footer() {
  const services = [
    "Legal Consultation",
    "Financial Licensing",
    "Forex & Trading",
    "Asset Management",
    "Company Formation", 
    "VARA Compliance",
    "E-Wallet Solutions",
    "Virtual Assets"
  ];

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
    "Contact Us",
    "KYC Requirements",
    "Legal Advice",
    "Financial Solutions",
    "Educational Programs"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#005b4c] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#bda985] to-[#c3fcf2] rounded-lg flex items-center justify-center mr-4">
                <span className="text-[#005b4c] font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#c3fcf2]">Casa Di Consiglio</h3>
                <p className="text-[#4b8178] text-sm">Legal & Financial Solutions</p>
              </div>
            </div>
            
            <p className="text-[#c3fcf2] opacity-90 mb-6 leading-relaxed text-sm">
              Your trusted partner for legal and financial consulting across the Middle East. Specializing in licensing, compliance, and regulatory guidance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-[#bda985]" />
                <span className="text-[#c3fcf2]">+971 56 385 8532</span>
              </div>
              
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3 text-[#bda985]" />
                <span className="text-[#c3fcf2]">info@casadiconsiglio.com</span>
              </div>
              
              <div className="flex items-start text-sm">
                <MapPin className="w-4 h-4 mr-3 text-[#bda985] mt-0.5" />
                <span className="text-[#c3fcf2] leading-relaxed">
                  Zone E, First Floor, Office # F13<br />
                  Sharjah Book Authority Building<br />
                  Al Zahia, Sharjah, UAE
                </span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold text-[#c3fcf2] mb-6 flex items-center">
              <Scale className="w-5 h-5 mr-2 text-[#bda985]" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-[#c3fcf2] opacity-80 hover:opacity-100 hover:text-[#bda985] transition-colors duration-200 text-sm flex items-center group">
                    <div className="w-1.5 h-1.5 bg-[#bda985] rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#c3fcf2] mb-6 flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-[#bda985]" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-[#c3fcf2] opacity-80 hover:opacity-100 hover:text-[#bda985] transition-colors duration-200 text-sm flex items-center group">
                    <div className="w-1.5 h-1.5 bg-[#bda985] rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries & Business Hours */}
          <div>
            <h4 className="text-lg font-bold text-[#c3fcf2] mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-[#bda985]" />
              Coverage Areas
            </h4>
            <ul className="space-y-3 mb-8">
              {countries.map((country, index) => (
                <li key={index}>
                  <span className="text-[#c3fcf2] opacity-80 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#bda985] rounded-full mr-3"></div>
                    {country}
                  </span>
                </li>
              ))}
            </ul>

            <h5 className="text-md font-semibold text-[#c3fcf2] mb-4 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-[#bda985]" />
              Business Hours
            </h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#c3fcf2] opacity-80">Sun - Thu:</span>
                <span className="text-[#bda985]">9 AM - 6 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#c3fcf2] opacity-80">Friday:</span>
                <span className="text-[#bda985]">2 PM - 6 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#c3fcf2] opacity-80">Saturday:</span>
                <span className="text-[#bda985]">By Appointment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter/CTA Section */}
        <div className="mt-12 pt-8 border-t border-[#4b8178] border-opacity-30">
          <div className="bg-gradient-to-r from-[#4b8178] to-[#bda985] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
              Contact our expert team today for personalized legal and financial consultation tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+971563858532"
                className="bg-white text-[#005b4c] px-6 py-3 rounded-lg font-semibold hover:bg-[#c3fcf2] transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/971563858532"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#005b4c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4b8178] transition-colors duration-300 flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#004a3f] border-t border-[#4b8178] border-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#c3fcf2] opacity-70 text-sm mb-4 md:mb-0">
              © 2025 Casa Di Consiglio. All rights reserved. | Legal & Financial Consulting Services
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-[#c3fcf2] opacity-70 hover:opacity-100 text-sm transition-opacity duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-[#c3fcf2] opacity-70 hover:opacity-100 text-sm transition-opacity duration-200">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="bg-[#bda985] text-[#005b4c] p-2 rounded-lg hover:bg-[#c3fcf2] transition-colors duration-300 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}