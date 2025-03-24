import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import CallToAction from '@/components/CallToAction';
import TestimonialCard from '@/components/TestimonialCard';

interface Service {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  link?: string;
  highlightTag?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
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
      image: '/images/marinashipyard-scaled.jpg',
      link: '/services',
      highlightTag: 'Popular'
    },
    {
      title: 'Haul and Launch',
      description: 'Safe and efficient haul out and launch services for boats of all sizes. Our specialized equipment ensures your vessel is handled with care.',
      image: '/images/bg4.jpg',
      link: '/services'
    },
    {
      title: 'Bottom Painting',
      description: 'High-quality bottom painting services to protect your vessel from marine growth and corrosion. We use environmentally friendly anti-fouling paints.',
      image: '/images/bg2.jpg',
      link: '/services'
    },
  ];

  // Features data
  const features: Feature[] = [
    {
      title: "Experience Since 1964",
      description: "Three generations of experience providing quality marine services.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Quality Workmanship",
      description: "We pride ourselves on delivering high-quality services every time.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Full-Service Facility",
      description: "Comprehensive marine services all in one convenient location.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Customer Satisfaction",
      description: "Our customers' satisfaction is our top priority at all times.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
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
        subtitle="Marina Shipyard offers three generations of experience in boat repair, maintenance, and services."
        buttonText="Explore Our Services"
        buttonLink="/services"
        phoneNumber="(562) 594-0995"
        ctaText="Get your boat in ship-shape today!"
      />
      
      {/* About Section with Family Legacy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-wider font-bold">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Family Owned & Operated Since 1964</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A quality, full-service, 3rd generation boat yard where customer service always comes first!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Three Generations of Excellence</h3>
              <p className="text-gray-600 mb-6">
                Marina Shipyard offers you three generations of experience and has been family owned and operated since 1964. 
                Customer Service and a Job Well Done are our greatest concerns. You can rest assured that when you place 
                your vessel in our care you will receive satisfaction in knowing the job will be done right the first time.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary mb-6">
                <p className="italic text-primary">
                  <strong>A note to all of our customers, vendors, tenants and business partners:</strong> Jerry Tretter would have wanted us, the Marina Shipyard Family, to carry on his family's legacy with "business as usual" so that is exactly what we are doing!
                </p>
              </div>
              <Link 
                href="/about"
                className="btn bg-primary text-white hover:bg-blue-800 inline-flex items-center py-3 px-6 rounded"
              >
                Read More About Us
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/marinashipyard-scaled.jpg"
                  alt="Marina Shipyard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">Serving So Cal since 1964</p>
                <p>We're here for you!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-wider font-bold">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of professional marine services to meet all your boating needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                link={service.link}
                highlightTag={service.highlightTag}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="btn bg-primary text-white hover:bg-blue-800 inline-flex items-center py-3 px-6 rounded"
            >
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Special Offer Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Free Mechanical Inspection!</h2>
              <p className="text-xl opacity-90">
                Contact us today to schedule your complimentary boat inspection.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:5625940995" 
                className="btn bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md shadow-md flex items-center justify-center"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (562) 594-0995
              </a>
              <Link 
                href="/contact"
                className="btn bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md shadow-md flex items-center justify-center"
              >
                Contact Us
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-wider font-bold">Our Strengths</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Marina Shipyard?</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take pride in our experience, quality workmanship, and customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-wider font-bold">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
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
      
      {/* Call to Action */}
      <CallToAction
        title="Ready to Get Your Boat Serviced?"
        description="Contact us today to schedule a service appointment or request a quote for your boat repair or maintenance needs."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </>
  );
}