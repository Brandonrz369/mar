// Using standard img tags instead of Next.js Image
import Link from 'next/link';

const ServiceCard = ({ title, description, icon, image, link = '/services' }) => {
  return (
    <div className="card group h-full flex flex-col">
      {image ? (
        <div className="relative h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="object-cover transition-transform duration-500 group-hover:scale-110 w-full h-full absolute inset-0"
          />
        </div>
      ) : icon ? (
        <div className="h-56 bg-gray-100 flex items-center justify-center">
          <span className="text-6xl">{icon}</span>
        </div>
      ) : null}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link 
          href={link} 
          className="text-primary font-medium hover:text-blue-800 transition-colors inline-flex items-center"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;