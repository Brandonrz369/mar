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
  highlightText = "Get your boat in ship-shape today!"
}) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Hero Content */}
      <div className="container-custom relative z-10 text-center text-white py-20">
        {showLogo && (
          <div className="mb-8 animate-fade-in">
            <Image 
              src={siteData.logo.default}
              alt={siteData.logo.alt}
              width={280}
              height={100}
              className="mx-auto"
              priority
            />
          </div>
        )}
        
        <h1 className="heading-xl mb-6 animate-fade-in">{title}</h1>
        
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
            className="btn btn-primary text-lg px-8 py-4 font-bold"
          >
            {primaryButtonText}
          </Link>
          
          <Link 
            href={secondaryButtonLink}
            className="btn btn-accent text-lg px-8 py-4 font-bold"
          >
            {secondaryButtonText}
          </Link>
        </div>
        
        {/* Phone Button */}
        <div className="animate-slide-up">
          <a 
            href={`tel:${siteData.contact.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-full backdrop-blur-sm transition-colors"
          >
            <FaPhone className="mr-2" />
            <span className="font-medium">{siteData.contact.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;