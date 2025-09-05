'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 shadow-lg border-b border-stone-200/60 backdrop-blur-xl' 
          : 'bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center overflow-hidden   p-1">
                <Image
                  src="/images/1.png"
                  alt="Casa Di Consiglio Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="ml-3">
                <h1 className="text-gray-900 font-bold text-xl">Casa Di Consiglio</h1>
                <p className="text-[#BDA985] text-xs">Business Consultants & Legal Studies and Research</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#BDA985] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
              >
                Home
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BDA985] group-hover:w-full transition-all duration-300"></div>
              </Link>
              
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#BDA985] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
              >
                About
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BDA985] group-hover:w-full transition-all duration-300"></div>
              </Link>

           
              <Link
                href="/kyc"
                className="text-gray-700 hover:text-[#BDA985] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
              >
                KYC
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BDA985] group-hover:w-full transition-all duration-300"></div>
              </Link>

               
              
              {/* <Link
                href="/kyc"
                className="text-gray-700 hover:text-[#BDA985] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
              >
               KYC
               <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BDA985] group-hover:w-full transition-all duration-300"></div>
              </Link> */}

              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#BDA985] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
              >
                Contact
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BDA985] group-hover:w-full transition-all duration-300"></div>
              </Link>
            </div>
          </div>

   

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#BDA985] inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-stone-100/95 to-stone-50/95 shadow-lg border-t border-stone-200/60 backdrop-blur-xl">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#BDA985] hover:bg-[#BDA985]/5 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#BDA985] hover:bg-[#BDA985]/5 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

     <Link
              href="/kyc"
              className="text-gray-700 hover:text-[#BDA985] hover:bg-[#BDA985]/5 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              KYC
            </Link>
     

            {/* <Link
              href="/kyc"
              className="text-gray-700 hover:text-[#BDA985] hover:bg-[#BDA985]/5 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              KYC
            </Link> */}

            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#BDA985] hover:bg-[#BDA985]/5 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

    
          </div>
        </div>
      )}
    </nav>
  );
}