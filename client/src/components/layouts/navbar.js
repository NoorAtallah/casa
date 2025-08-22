'use client';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-[#005b4c] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#bda985] to-[#c3fcf2] rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/1.png" // Update this path to your logo file
                  alt="Casa Di Consiglio Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="ml-3">
                <h1 className="text-[#c3fcf2] font-bold text-xl">Casa Di Consiglio</h1>
                <p className="text-[#4b8178] text-xs">Legal & Financial Solutions</p>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-[#c3fcf2] hover:text-[#bda985] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('services')}
                  className="text-[#c3fcf2] hover:text-[#bda985] px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-[#4b8178] rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-[#c3fcf2] hover:bg-[#005b4c] hover:text-[#bda985] transition-colors duration-200">Legal Consultation</a>
                      <a href="#" className="block px-4 py-2 text-sm text-[#c3fcf2] hover:bg-[#005b4c] hover:text-[#bda985] transition-colors duration-200">Financial Advisory</a>
                      <a href="#" className="block px-4 py-2 text-sm text-[#c3fcf2] hover:bg-[#005b4c] hover:text-[#bda985] transition-colors duration-200">Forex & Trading</a>
                      <a href="#" className="block px-4 py-2 text-sm text-[#c3fcf2] hover:bg-[#005b4c] hover:text-[#bda985] transition-colors duration-200">Asset Management</a>
                      <a href="#" className="block px-4 py-2 text-sm text-[#c3fcf2] hover:bg-[#005b4c] hover:text-[#bda985] transition-colors duration-200">Company Formation</a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="text-[#c3fcf2] hover:text-[#bda985] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </a>
              
              <a
                href="#"
                className="text-[#c3fcf2] hover:text-[#bda985] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Courses
              </a>

              <a
                href="#"
                className="text-[#c3fcf2] hover:text-[#bda985] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#bda985] text-[#005b4c] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#c3fcf2] hover:scale-105 transition-all duration-200 shadow-md">
              Get Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#c3fcf2] hover:text-[#bda985] inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#4b8178] shadow-lg">
            <a
              href="#"
              className="text-[#c3fcf2] hover:text-[#bda985] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Home
            </a>
            
            {/* Mobile Services */}
            <div>
              <button
                onClick={() => handleDropdownToggle('mobile-services')}
                className="text-[#c3fcf2] hover:text-[#bda985] flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'mobile-services' && (
                <div className="pl-4 space-y-1">
                  <a href="#" className="block px-3 py-2 text-sm text-[#c3fcf2] hover:text-[#bda985] transition-colors duration-200">Legal Consultation</a>
                  <a href="#" className="block px-3 py-2 text-sm text-[#c3fcf2] hover:text-[#bda985] transition-colors duration-200">Financial Advisory</a>
                  <a href="#" className="block px-3 py-2 text-sm text-[#c3fcf2] hover:text-[#bda985] transition-colors duration-200">Forex & Trading</a>
                  <a href="#" className="block px-3 py-2 text-sm text-[#c3fcf2] hover:text-[#bda985] transition-colors duration-200">Asset Management</a>
                  <a href="#" className="block px-3 py-2 text-sm text-[#c3fcf2] hover:text-[#bda985] transition-colors duration-200">Company Formation</a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-[#c3fcf2] hover:text-[#bda985] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              About
            </a>
            
            <a
              href="#"
              className="text-[#c3fcf2] hover:text-[#bda985] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Courses
            </a>

            <a
              href="#"
              className="text-[#c3fcf2] hover:text-[#bda985] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Contact
            </a>

            <div className="pt-2">
              <button className="w-full bg-[#bda985] text-[#005b4c] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#c3fcf2] transition-colors duration-200">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}