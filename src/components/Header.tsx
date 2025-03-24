import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaClock, FaBars, FaTimes } from 'react-icons/fa';
import siteData from '@/lib/data';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  // Set current path on client side
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if link is active
  const isActive = (path: string): boolean => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Bar - Only visible on desktop */}
      <div className="bg-primary text-white py-1.5 hidden md:block">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-sm">
                <FaClock className="mr-2 text-accent" />
                <span>{siteData.hours.weekday}</span>
              </div>
              <div className="flex items-center text-sm">
                <FaPhone className="mr-2 text-accent" />
                <a 
                  href={`tel:${siteData.contact.phone.replace(/[^0-9]/g, '')}`} 
                  className="hover:text-accent"
                >
                  {siteData.contact.phone}
                </a>
              </div>
              <div className="flex items-center text-sm">
                <FaEnvelope className="mr-2 text-accent" />
                <a 
                  href={`mailto:${siteData.contact.email}`} 
                  className="hover:text-accent"
                >
                  {siteData.contact.email}
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              {siteData.social.facebook && (
                <a
                  href={siteData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary shadow-lg py-2' : 'bg-primary/90 py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="z-10 relative">
              <Image 
                src={siteData.logo.default} 
                alt={siteData.logo.alt} 
                width={150} 
                height={50} 
                className="h-auto w-auto" 
                priority
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="z-20 md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-white hover:text-accent ${
                    isActive(link.href) ? 'active font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link
                href="/contact"
                className="btn btn-accent rounded-full text-sm font-semibold"
              >
                Get a Quote
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`fixed inset-0 bg-primary z-10 pt-24 p-6 flex flex-col md:hidden transition-all duration-300 transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl text-white hover:text-accent ${
                    isActive(link.href) ? 'font-semibold text-accent' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto pt-8 border-t border-primary-light mt-8">
              <Link
                href="/contact"
                className="btn btn-accent w-full justify-center mb-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
              
              <div className="space-y-4 text-white">
                <div className="flex items-center">
                  <FaPhone className="mr-3 text-accent" />
                  <a href={`tel:${siteData.contact.phone.replace(/[^0-9]/g, '')}`}>
                    {siteData.contact.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-3 text-accent" />
                  <a href={`mailto:${siteData.contact.email}`}>
                    {siteData.contact.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-3 text-accent" />
                  <span>{siteData.hours.weekday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className={`h-20 md:h-28 ${isScrolled ? 'md:h-24' : ''}`}></div>
    </>
  );
};

export default Header;