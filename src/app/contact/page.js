'use client';

import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

// Note: metadata must be in a separate file when using client components
// This will be handled by the root layout

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for boat repair, maintenance services, or to request a quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-600">
                  6400 E Marina Dr<br />
                  Long Beach, CA 90803
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:(562) 594-0995" className="hover:text-primary transition-colors">
                    (562) 594-0995
                  </a>
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@marinashipyard.com" className="hover:text-primary transition-colors">
                    info@marinashipyard.com
                  </a>
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 3:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
              
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src="/images/marinashipyard-scaled.jpg"
                  alt="Marina Shipyard Location"
                  className="object-cover w-full h-full absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Request an Estimate</h2>
          <p className="mb-6">
            Need an estimate for your boat repair or maintenance? Call us directly at <a href="tel:(562) 594-0995" className="text-primary font-medium">(562) 594-0995</a> or fill out our contact form above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:(562) 594-0995" 
              className="btn btn-primary inline-block text-center px-6 py-3"
            >
              Call Now
            </a>
            <a 
              href="#contact-form" 
              className="btn btn-secondary inline-block text-center px-6 py-3"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Fill Out Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}