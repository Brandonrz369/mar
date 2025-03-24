import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { ServiceInfo } from '@/lib/data';

interface ServiceCardProps {
  service: ServiceInfo;
  featured?: boolean;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  featured = false,
  className = ''
}) => {
  return (
    <div 
      className={`card group h-full flex flex-col hover:shadow-lg ${
        featured ? 'transform hover:-translate-y-2' : ''
      } ${className}`}
    >
      {/* Card Image */}
      <div className="relative h-64 overflow-hidden rounded-t-lg">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
        
        {/* Featured Badge */}
        {service.featured && (
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
            Popular
          </div>
        )}
        
        {/* Title for Alternative Layout */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow bg-white rounded-b-lg">
        <div className="w-12 h-1 bg-accent mb-4"></div>
        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
        
        <Link 
          href={`/services#${service.id}`} 
          className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group-hover:translate-x-1 duration-300"
        >
          Learn More
          <FaArrowRight className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;