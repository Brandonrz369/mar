import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import CallToAction from '@/components/CallToAction';
import TestimonialCard from '@/components/TestimonialCard';

interface Service {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

interface Testimonial {
  text: string;
  name: string;
  title: string;
  avatar?: string;
}

export default function Home() {
  // Services data
  const services: Service[] = [
    {
      title: 'Boat Repairs',
      description: 'Professional boat repair services by our experienced technicians. We handle everything from minor fixes to major overhauls.',
      icon: '🛠️',
      image: '/images/marinashipyard-scaled.jpg',
    },
    {
      title: 'Haul and Launch',
      description: 'Safe and efficient haul out and launch services for boats of all sizes. Our specialized equipment ensures your vessel is handled with care.',
      icon: '🚢',
      image: '/images/bg4.jpg',
    },
    {
      title: 'Bottom Painting',
      description: 'High-quality bottom painting services to protect your vessel from marine growth and corrosion. We use environmentally friendly anti-fouling paints.',
      icon: '🎨',
      image: '/images/bg2.jpg',
    },
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      text: "Marina Shipyard did an excellent job repairing my boat's hull. The work was done quickly and professionally. I highly recommend their services!",
      name: "Michael Thompson",
      title: "Boat Owner"
    },
    {
      text: "I've been bringing my vessel to Marina Shipyard for over 10 years. Their team is knowledgeable, efficient, and always delivers quality work.",
      name: "Sarah Johnson",
      title: "Yacht Owner"
    },
    {
      text: "The haul out and painting service was excellent. My boat looks brand new, and the team was very professional throughout the process.",
      name: "Robert Davis",
      title: "Sailboat Enthusiast"
    },
  ];

  return (
    <>
      <HeroSection 
        title="Quality Marine Services Since 1964"
        subtitle="Marina Shipyard offers three generations of experience in boat repair, maintenance, and services. Customer service always comes first!"
        buttonText="Explore Our Services"
        buttonLink="/services"
        phoneNumber="(562) 594-0995"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Marina Shipyard</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A quality, full-service, 3rd generation boat yard where customer service always comes first!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Family Owned Since 1964</h3>
              <p className="text-gray-600 mb-6">
                Marina Shipyard offers you three generations of experience and has been family owned and operated since 1964. 
                Customer Service and a Job Well Done are our greatest concerns. You can rest assured that when you place 
                your vessel in our care you will receive satisfaction in knowing the job will be done right the first time.
              </p>
              <p className="text-gray-600 mb-6">
                We have an extensive range of Professional Marine Services to offer all in one location which are available 
                either directly from Marina Shipyard or its wide range of tenants on site.
              </p>
              <Link 
                href="/about"
                className="btn bg-primary text-white hover:bg-blue-800 inline-flex items-center py-2 px-4 rounded"
              >
                Read More About Us
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/marinashipyard-scaled.jpg"
                alt="Marina Shipyard"
                className="object-cover w-full h-full absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of professional marine services to meet all your boating needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="btn bg-primary text-white hover:bg-blue-800 inline-flex items-center py-2 px-4 rounded"
            >
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Marina Shipyard?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take pride in our experience, quality workmanship, and customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Experience Since 1964</h3>
              <p className="text-gray-600">
                Three generations of experience providing quality marine services.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Workmanship</h3>
              <p className="text-gray-600">
                We pride ourselves on delivering high-quality services every time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Full-Service Facility</h3>
              <p className="text-gray-600">
                Comprehensive marine services all in one convenient location.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Our customers' satisfaction is our top priority at all times.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                name={testimonial.name}
                title={testimonial.title}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction
        title="Ready to Get Your Boat Serviced?"
        description="Contact us today to schedule a service appointment or request a quote for your boat repair or maintenance needs."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </>
  );
}