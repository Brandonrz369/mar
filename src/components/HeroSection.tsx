import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  height?: string;
  phoneNumber?: string | null;
  ctaText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText = 'Learn More',
  buttonLink = '/services',
  backgroundImage = '/images/marinashipyard-scaled.jpg',
  height = 'h-screen',
  phoneNumber = null,
  ctaText = 'Get your boat in ship-shape!'
}) => {
  return (
    <section 
      className={`relative ${height} flex items-center justify-center bg-cover bg-center`} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="mb-4">
          <Image 
            src="/images/cleanmarine.png" 
            alt="Marina Shipyard Logo" 
            width={220} 
            height={80} 
            className="mx-auto"
          />
        </div>
        
        {phoneNumber && (
          <div className="absolute top-4 right-4 md:top-8 md:right-8">
            <a 
              href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center bg-primary hover:bg-blue-800 transition-colors px-4 py-2 rounded-full shadow-lg font-bold"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              {phoneNumber}
            </a>
          </div>
        )}
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-4 opacity-90">{subtitle}</p>
        <p className="text-2xl md:text-3xl font-bold text-accent mb-10">{ctaText}</p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href={buttonLink}
            className="btn bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md hover:shadow-lg text-lg"
          >
            {buttonText}
          </Link>
          
          <Link 
            href="/contact"
            className="btn bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md hover:shadow-lg text-lg"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;