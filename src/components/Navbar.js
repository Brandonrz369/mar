'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if the link is active
  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/cleanmarine.png" 
              alt="Marina Shipyard" 
              width={160} 
              height={50} 
              className="h-auto"
            />
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className={`text-white hover:text-gray-200 font-medium navLink ${isActive('/') ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className={`text-white hover:text-gray-200 font-medium navLink ${isActive('/services') ? 'active' : ''}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`text-white hover:text-gray-200 font-medium navLink ${isActive('/about') ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className={`text-white hover:text-gray-200 font-medium navLink ${isActive('/gallery') ? 'active' : ''}`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`text-white hover:text-gray-200 font-medium navLink ${isActive('/contact') ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col space-y-4 py-2">
            <li>
              <Link
                href="/"
                className={`text-white hover:text-gray-200 font-medium block ${isActive('/') ? 'font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`text-white hover:text-gray-200 font-medium block ${isActive('/services') ? 'font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-white hover:text-gray-200 font-medium block ${isActive('/about') ? 'font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={`text-white hover:text-gray-200 font-medium block ${isActive('/gallery') ? 'font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-white hover:text-gray-200 font-medium block ${isActive('/contact') ? 'font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;