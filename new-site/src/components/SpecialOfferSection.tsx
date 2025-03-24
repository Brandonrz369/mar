import Link from 'next/link';
import { FaPhone, FaArrowRight } from 'react-icons/fa';
import siteData from '@/lib/data';

interface SpecialOfferSectionProps {
  title?: string;
  description?: string;
  phone?: string;
}

const SpecialOfferSection: React.FC<SpecialOfferSectionProps> = ({
  title = "Free Mechanical Inspection!",
  description = "Contact us today to schedule your complimentary boat inspection.",
  phone = siteData.contact.phone
}) => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-accent">Free</span> {title}
            </h2>
            <p className="text-xl opacity-90">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${phone.replace(/[^0-9]/g, '')}`} 
              className="btn bg-white text-primary hover:bg-gray-100 font-bold shadow-md flex items-center justify-center"
            >
              <FaPhone className="mr-2" />
              {phone}
            </a>
            <Link 
              href="/contact"
              className="btn bg-accent hover:bg-accent-dark text-white font-bold shadow-md flex items-center justify-center"
            >
              Request Service
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;