import Link from 'next/link';
// Remove Next.js Image component in favor of standard img tags

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image 
              src="/images/cleanmarine.png" 
              alt="Marina Shipyard" 
              width={180} 
              height={60} 
              className="mb-6 h-auto"
            />
            <p className="text-gray-300 mb-6">
              Your full-service marina and shipyard providing quality marine repair services since 1964.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/marina.shipyard"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Boat Repairs
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Haul and Launch
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Bottom Painting
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Mechanical Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic text-gray-300">
                  6400 Marina Drive<br />
                  Long Beach, CA 90803
                </address>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:5625940995" className="text-gray-300 hover:text-white transition-colors">
                  (562) 594-0995
                </a>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@marinashipyard.com" className="text-gray-300 hover:text-white transition-colors">
                  info@marinashipyard.com
                </a>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">
                  Mon-Sat: 8am-5pm<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Marina Shipyard. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">
            Website by <a href="https://github.com/Brandonrz369/mar" target="_blank" rel="noopener noreferrer" className="hover:text-white">Brandon</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;