import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa';
import siteData from '@/lib/data';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showLogo?: boolean;
  imageSrc?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  highlightText?: string;
  mobileHeight?: string;
  desktopHeight?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Quality Marine Services Since 1964",
  subtitle = "Three generations of experience in boat repair, maintenance, and services. Customer service always comes first!",
  showLogo = true,
  imageSrc = "/images/marinashipyard-scaled.jpg",
  primaryButtonText = "Explore Services",
  primaryButtonLink = "/services",
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact",
  highlightText = "Get your boat in ship-shape today!",
  mobileHeight = "min-h-[75vh]",
  desktopHeight = "md:min-h-[90vh]"
}) => {
  // State for image load status
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Preload image for better user experience
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setImageLoaded(true);
  }, [imageSrc]);
  
  return (
    <section 
      className={`relative flex items-center justify-center ${mobileHeight} ${desktopHeight} bg-primary overflow-hidden`}
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden="true"
      />
      
      {/* While image is loading, show a subtle gradient backdrop */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-primary to-primary-dark transition-opacity duration-500 ${
          imageLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" aria-hidden="true"></div>
      
      {/* Hero Content */}
      <div className="container-custom relative z-10 text-center text-white py-8 md:py-20">
        {showLogo && (
          <div className="mb-8 animate-fade-in">
            <Image 
              src={siteData.logo.default}
              alt={siteData.logo.alt}
              width={280}
              height={100}
              className="mx-auto h-auto w-auto max-w-full"
              priority
            />
          </div>
        )}
        
        <h1 className="heading-xl mb-6 animate-fade-in">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 animate-fade-in">
          {subtitle}
        </p>
        
        {highlightText && (
          <p className="text-2xl md:text-3xl font-bold text-accent mb-10 animate-fade-in">
            {highlightText}
          </p>
        )}
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-slide-up">
          <Link 
            href={primaryButtonLink}
            className="btn btn-primary btn-lg font-bold"
          >
            {primaryButtonText}
          </Link>
          
          <Link 
            href={secondaryButtonLink}
            className="btn btn-accent btn-lg font-bold"
          >
            {secondaryButtonText}
          </Link>
        </div>
        
        {/* Phone Button */}
        <div className="animate-slide-up relative">
          <a 
            href={`tel:${siteData.contact.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-full backdrop-blur-sm transition-colors"
            aria-label={`Call us at ${siteData.contact.phone}`}
          >
            <FaPhone className="mr-2" aria-hidden="true" />
            <span className="font-medium">{siteData.contact.phone}</span>
          </a>
        </div>
        
        {/* Down arrow for bigger screens */}
        <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <a 
            href="#main-content-start" 
            className="text-white opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Scroll down"
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </div>
      </div>
      
      <div id="main-content-start" className="absolute bottom-0"></div>
    </section>
  );
};

export default Hero;