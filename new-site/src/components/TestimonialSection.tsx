import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';
import { TestimonialInfo } from '@/lib/data';

interface TestimonialSectionProps {
  testimonials: TestimonialInfo[];
  title?: string;
  subtitle?: string;
  bgColor?: 'white' | 'gray';
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
  title = "What Our Customers Say",
  subtitle = "Don't just take our word for it - hear from some of our satisfied customers.",
  bgColor = 'gray'
}) => {
  return (
    <section className={`py-20 ${bgColor === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container-custom">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          tag="Testimonials"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;