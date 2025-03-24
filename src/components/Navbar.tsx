'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  path: string;
}

interface NavbarProps {
  phone?: string;
  logoSrc?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  phone = "(562) 594-0995",
  logoSrc = "/images/cleanmarine.png"
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // Navigation links
  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  // Check if the link is active
  const isActive = (path: string): boolean => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = (): void => {
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
  
  // Close menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Mon-Sat: 8am-5pm | Sunday: Closed</span>
            </div>
            <div className="flex space-x-4">
              <a 
                href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center text-sm hover:text-accent transition-colors"
              >
                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {phone}
              </a>
              <a 
                href="mailto:info@marinashipyard.com"
                className="flex items-center text-sm hover:text-accent transition-colors"
              >
                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@marinashipyard.com
              </a>
            </div>
          </div>
        </div>
      </div>
    
      {/* Main Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary/95 shadow-lg py-2' : 'bg-primary/80 py-3'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center z-10">
              <Image 
                src={logoSrc} 
                alt="Marina Shipyard" 
                width={160} 
                height={50} 
                className="h-auto"
              />
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none z-10"
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
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.path} 
                      className={`text-white hover:text-accent font-medium navLink ${isActive(link.path) ? 'active font-bold' : ''}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <Link 
                href="/contact"
                className="btn bg-accent hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors shadow-md"
              >
                Request Quote
              </Link>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div
            className={`md:hidden fixed inset-0 bg-primary pt-20 p-6 z-0 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <ul className="flex flex-col space-y-6 text-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={`text-white text-xl hover:text-accent font-medium block py-2 ${isActive(link.path) ? 'font-bold text-accent' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-6 border-t border-blue-800">
                <Link
                  href="/contact"
                  className="btn bg-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md block transition-colors shadow-md"
                >
                  Request Quote
                </Link>
              </li>
              <li className="pt-6 flex flex-col space-y-4">
                <a 
                  href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center justify-center text-white hover:text-accent transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {phone}
                </a>
                <a 
                  href="mailto:info@marinashipyard.com"
                  className="flex items-center justify-center text-white hover:text-accent transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@marinashipyard.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      
      {/* Spacer for fixed header */}
      <div className={`h-20 md:h-28 ${isScrolled ? 'md:h-24' : ''}`}></div>
    </>
  );
};

export default Navbar;