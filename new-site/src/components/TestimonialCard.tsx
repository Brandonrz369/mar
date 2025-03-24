import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { TestimonialInfo } from '@/lib/data';

interface TestimonialCardProps {
  testimonial: TestimonialInfo;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial,
  className = ''
}) => {
  // Generate star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-accent' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className={`card p-8 h-full flex flex-col hover:shadow-lg transition-all relative ${className}`}>
      {/* Quote mark */}
      <div className="text-6xl text-gray-200 font-serif leading-none absolute top-4 right-4">
        "
      </div>
      
      {/* Content */}
      <div className="flex-grow relative z-10">
        <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
      </div>
      
      {/* Author */}
      <div className="flex items-center mt-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-gray-200 relative">
          {testimonial.avatar ? (
            <Image 
              src={testimonial.avatar} 
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full bg-primary text-white text-xl font-bold">
              {testimonial.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-primary">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.title}</p>
        </div>
      </div>
      
      {/* Rating */}
      <div className="flex mt-4">
        {renderStars(testimonial.rating)}
      </div>
    </div>
  );
};

export default TestimonialCard;