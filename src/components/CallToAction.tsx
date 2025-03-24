import Link from 'next/link';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor?: string;
  secondaryAction?: {
    text: string;
    link: string;
  };
  phoneNumber?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundColor = 'bg-primary',
  secondaryAction,
  phoneNumber
}) => {
  return (
    <section className={`py-20 ${backgroundColor} text-white`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl mb-8 opacity-90">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={buttonLink}
              className="btn bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg text-lg"
            >
              {buttonText}
            </Link>
            
            {secondaryAction && (
              <Link
                href={secondaryAction.link}
                className="btn bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg text-lg"
              >
                {secondaryAction.text}
              </Link>
            )}
          </div>
          
          {phoneNumber && (
            <p className="mt-6 text-xl">
              <span className="opacity-80">Or call us at: </span>
              <a 
                href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
                className="font-bold hover:text-accent transition-colors"
              >
                {phoneNumber}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;