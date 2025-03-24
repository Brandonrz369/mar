import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import SpecialOfferSection from '@/components/SpecialOfferSection';
import CtaSection from '@/components/CtaSection';
import siteData from '@/lib/data';

export default function Services() {
  return (
    <Layout
      title={`Our Services | ${siteData.name}`}
      description="Discover the comprehensive range of boat repair and maintenance services offered by Marina Shipyard. From haul and launch to bottom painting and mechanical repairs."
    >
      {/* Page Header */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">
            We offer comprehensive marine services to keep your vessel in optimal condition, from maintenance to major repairs.
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Professional Marine Services"
            subtitle="At Marina Shipyard, we take pride in offering a complete range of services to meet all your boating needs."
            centered
          />
          
          <div className="mt-12 space-y-12">
            {siteData.services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Service Image */}
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Service Content */}
                <div>
                  <h2 className="heading-md mb-4 text-primary">{service.title}</h2>
                  <div className="w-16 h-1 bg-accent mb-6"></div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <p className="text-gray-600 mb-8">
                    Our experienced team utilizes state-of-the-art equipment and techniques to ensure the highest quality service for your vessel.
                  </p>
                  <a 
                    href="/contact" 
                    className="btn btn-primary"
                  >
                    Request Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Special Offer */}
      <SpecialOfferSection />
      
      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Additional Services"
            subtitle="Beyond our core services, we also offer these specialized solutions for your boating needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-8">
              <h3 className="heading-sm mb-4 text-primary">Boat Detailing</h3>
              <div className="w-12 h-1 bg-accent mb-4"></div>
              <p className="text-gray-600 mb-4">
                Professional cleaning and detailing services to keep your boat looking its best, inside and out.
              </p>
            </div>
            
            <div className="card p-8">
              <h3 className="heading-sm mb-4 text-primary">Electrical Systems</h3>
              <div className="w-12 h-1 bg-accent mb-4"></div>
              <p className="text-gray-600 mb-4">
                Installation, troubleshooting, and repair of marine electrical systems by certified technicians.
              </p>
            </div>
            
            <div className="card p-8">
              <h3 className="heading-sm mb-4 text-primary">Winterization</h3>
              <div className="w-12 h-1 bg-accent mb-4"></div>
              <p className="text-gray-600 mb-4">
                Comprehensive winterization services to protect your boat during the off-season and storage periods.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CtaSection 
        title="Ready to Schedule a Service?"
        description="Contact our team today to discuss your boat's needs and schedule an appointment at our full-service marina."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />
    </Layout>
  );
}