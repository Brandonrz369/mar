import ServiceCard from './ServiceCard';
import SectionTitle from './SectionTitle';
import { ServiceInfo } from '@/lib/data';

interface ServiceListProps {
  services: ServiceInfo[];
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
}

const ServiceList: React.FC<ServiceListProps> = ({
  services,
  title = "Our Services",
  subtitle = "We offer a wide range of professional marine services to meet all your boating needs.",
  limit,
  showViewAll = true
}) => {
  // Limit services if specified
  const displayedServices = limit ? services.slice(0, limit) : services;
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayedServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              featured={service.featured}
            />
          ))}
        </div>
        
        {showViewAll && limit && services.length > limit && (
          <div className="text-center mt-12">
            <a 
              href="/services" 
              className="btn btn-primary inline-flex items-center"
            >
              View All Services
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceList;