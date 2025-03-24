import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaChevronRight } from 'react-icons/fa';
import siteData from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-6">
      <div className="container-custom">
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image 
                src={siteData.logo.default} 
                alt={siteData.logo.alt} 
                width={180} 
                height={60} 
                className="h-auto"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Your full-service marina and shipyard providing quality marine repair services 
              since {siteData.founding.year}. Family owned and operated for three generations.
            </p>
            <div className="flex space-x-4">
              {siteData.social.facebook && (
                <a 
                  href={siteData.social.facebook}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-accent text-white p-2 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="w-12 h-1 bg-accent mb-6"></div>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="flex items-center text-gray-300 hover:text-white">
                  <FaChevronRight className="mr-2 text-accent text-sm" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center text-gray-300 hover:text-white">
                  <FaChevronRight className="mr-2 text-accent text-sm" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="flex items-center text-gray-300 hover:text-white">
                  <FaChevronRight className="mr-2 text-accent text-sm" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="flex items-center text-gray-300 hover:text-white">
                  <FaChevronRight className="mr-2 text-accent text-sm" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center text-gray-300 hover:text-white">
                  <FaChevronRight className="mr-2 text-accent text-sm" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <div className="w-12 h-1 bg-accent mb-6"></div>
            <ul className="space-y-3">
              {siteData.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="flex items-center text-gray-300 hover:text-white">
                    <FaChevronRight className="mr-2 text-accent text-sm" />
                    {service.title}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link 
                  href="/contact" 
                  className="inline-block px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors"
                >
                  Free Inspection
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <div className="w-12 h-1 bg-accent mb-6"></div>
            <ul className="space-y-4">
              <li className="flex">
                <FaMapMarkerAlt className="text-accent mt-1 mr-3 flex-shrink-0" />
                <address className="not-italic text-gray-300">
                  {siteData.contact.address.full}
                </address>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-accent mr-3 flex-shrink-0" />
                <a 
                  href={`tel:${siteData.contact.phone.replace(/[^0-9]/g, '')}`} 
                  className="text-gray-300 hover:text-white"
                >
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-accent mr-3 flex-shrink-0" />
                <a 
                  href={`mailto:${siteData.contact.email}`} 
                  className="text-gray-300 hover:text-white truncate"
                >
                  {siteData.contact.email}
                </a>
              </li>
              <li className="flex">
                <FaClock className="text-accent mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>{siteData.hours.weekday}</p>
                  <p>{siteData.hours.weekend}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-primary-light flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {currentYear} {siteData.name}. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm">
            Serving Southern California since {siteData.founding.year}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;