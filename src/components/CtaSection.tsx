import Link from 'next/link';
import siteData from '@/lib/data';

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgColor?: 'primary' | 'accent';
  showPhone?: boolean;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Ready to Get Your Boat in Ship-Shape?",
  description = "Contact us today to schedule a service appointment or request a quote for your boat repair or maintenance needs.",
  primaryButtonText = "Contact Us Now",
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink,
  bgColor = 'primary',
  showPhone = true
}) => {
  // Determine background color
  const bgClass = bgColor === 'primary' ? 'bg-primary' : 'bg-accent';
  
  // CTA highlight color based on background
  const highlightClass = bgColor === 'primary' ? 'bg-accent' : 'bg-white text-primary';
  
  return (
    <section className={`py-20 ${bgClass} text-white`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">{title}</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 opacity-80"></div>
          <p className="text-xl mb-8 opacity-90">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={primaryButtonLink}
              className={`btn ${
                bgColor === 'primary' ? 'bg-accent hover:bg-accent-dark' : 'bg-white text-accent hover:bg-gray-100'
              } font-bold shadow-lg text-lg`}
            >
              {primaryButtonText}
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                href={secondaryButtonLink}
                className="btn bg-transparent hover:bg-white/10 border-2 border-white font-bold shadow-lg text-lg"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
          
          {showPhone && (
            <p className="mt-8 text-xl">
              <span className="opacity-80">Or call us at: </span>
              <a 
                href={`tel:${siteData.contact.phone.replace(/[^0-9]/g, '')}`}
                className="font-bold hover:text-accent-light transition-colors"
              >
                {siteData.contact.phone}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;