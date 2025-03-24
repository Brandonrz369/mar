import { FaHistory, FaAward, FaTools, FaBuilding, FaSmileBeam } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import siteData from '@/lib/data';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureListProps {
  title?: string;
  subtitle?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({
  title = "Why Choose Marina Shipyard?",
  subtitle = "We take pride in our experience, quality workmanship, and customer service."
}) => {
  // Features with icons
  const features: Feature[] = [
    {
      icon: <FaHistory />,
      title: "Experience Since 1964",
      description: "Three generations of experience providing quality marine services."
    },
    {
      icon: <FaAward />,
      title: "Quality Workmanship",
      description: "We pride ourselves on delivering high-quality services every time."
    },
    {
      icon: <FaBuilding />,
      title: "Full-Service Facility",
      description: "Comprehensive marine services all in one convenient location."
    },
    {
      icon: <FaSmileBeam />,
      title: "Customer Satisfaction",
      description: "Our customers' satisfaction is our top priority at all times."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          tag="Our Strengths"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card p-8 text-center transition-transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary mb-6 mx-auto">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureList;