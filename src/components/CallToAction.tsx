import Link from 'next/link';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  background?: string;
  textColor?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  title, 
  description, 
  buttonText = 'Contact Us', 
  buttonLink = '/contact', 
  background = 'bg-primary',
  textColor = 'text-white'
}) => {
  return (
    <section className={`py-20 ${background} ${textColor}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          {description}
        </p>
        <Link
          href={buttonLink}
          className={`btn ${
            background.includes('primary') 
              ? 'bg-white text-primary hover:bg-gray-100' 
              : 'bg-primary text-white hover:bg-blue-800'
          } font-bold py-3 px-8 rounded-md transition-colors shadow-md hover:shadow-lg`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;