import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import siteData from '@/lib/data';

interface AboutSectionProps {
  showNote?: boolean;
  showImage?: boolean;
  showCTA?: boolean;
  imageSrc?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  showNote = true,
  showImage = true,
  showCTA = true,
  imageSrc = "/images/marinashipyard-scaled.jpg"
}) => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <SectionTitle
              title="Family Owned & Operated Since 1964"
              tag="About Us"
              subtitle="A quality, full-service, 3rd generation boat yard where customer service always comes first!"
              centered={false}
            />
            
            <p className="text-gray-600 mb-6">
              {siteData.founding.story}
            </p>
            
            {showNote && (
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary mb-8">
                <p className="italic text-primary font-medium">
                  {siteData.featuredNote}
                </p>
              </div>
            )}
            
            {showCTA && (
              <Link 
                href="/about"
                className="btn btn-primary inline-flex items-center"
              >
                Read More About Us
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            )}
          </div>
          
          {/* About Image */}
          {showImage && (
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={imageSrc}
                  alt={siteData.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">Serving So Cal since {siteData.founding.year}</p>
                <p>We're here for you!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;