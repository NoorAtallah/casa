'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail } from 'lucide-react';
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
          {/* Email Icon + Logo */}
          <div className="flex-shrink-0 max-w-[70%] sm:max-w-none flex items-center">
            {/* Email Icon - Desktop only */}
            <div className="hidden md:block mr-8">
              <a
                href="https://webmail.casadiconsiglio.com:2096"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#BDA985] p-2 rounded-md transition-all duration-300 relative group"
                title="Webmail"
              >
                <Mail className="w-5 h-5" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#BDA985] group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center overflow-hidden p-1">
                <Image
                  src="/images/1.png"
                  alt="Casa Di Consiglio Logo"
                  width={60}
                  height={60}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="ml-2 sm:ml-3 min-w-0 flex-1">
                <h1 className="text-gray-900 font-bold text-sm sm:text-lg lg:text-xl leading-tight">
                  Casa Di Consiglio
                </h1>
                <p className="text-[#BDA985] text-[10px] sm:text-xs leading-tight break-words hyphens-auto">
                  Business Consultants &amp; Legal Studies and Research
                </p>
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
          <div className="md:hidden flex-shrink-0">
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
            {/* Email link in mobile menu */}
            <a
              href="https://casadiconsiglio.com:2096/cpsess2612049706/webmail/jupiter/mail/manage_disk_usage/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#BDA985] hover:bg-[#BDA985]/5 flex items-center px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail className="w-4 h-4 mr-2" />
              Webmail
            </a>

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