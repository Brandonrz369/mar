import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import CallToAction from '@/components/CallToAction';

export default function Services() {
  // Full list of services
  const services = [
    {
      id: 'boat-repairs',
      title: 'Boat Repairs',
      description: 'Professional boat repair services by our experienced technicians. We handle everything from minor fixes to major overhauls.',
      icon: '🛠️',
      details: [
        'Hull repair and fiberglass work',
        'Structural repairs and reinforcements',
        'Cosmetic repairs and refinishing',
        'Deck repairs and replacements',
        'Custom fabrication and modifications'
      ]
    },
    {
      id: 'haul-launch',
      title: 'Haul and Launch',
      description: 'Safe and efficient haul out and launch services for boats of all sizes.',
      icon: '🚢',
      details: [
        'Convenient scheduling for haul outs',
        'Careful handling of your vessel',
        'Professional launching services',
        'Secure blocking and stands',
        'Complete inspection during haul out'
      ]
    },
    {
      id: 'bottom-painting',
      title: 'Bottom Painting',
      description: 'High-quality bottom painting services to protect your vessel from marine growth and corrosion.',
      icon: '🎨',
      details: [
        'Hull cleaning and preparation',
        'Application of anti-fouling paint',
        'Environmentally friendly options',
        'Multi-season protection available',
        'Custom color matching'
      ]
    },
    {
      id: 'mechanical',
      title: 'Mechanical Services',
      description: 'Comprehensive engine and mechanical system repairs, maintenance, and installations.',
      icon: '⚙️',
      details: [
        'Engine repairs and rebuilds',
        'Transmission service and repair',
        'Drive system maintenance',
        'Cooling system service',
        'Fuel system repairs'
      ]
    },
    {
      id: 'electrical',
      title: 'Electrical Systems',
      description: 'Installation, repair, and upgrades for all marine electrical systems.',
      icon: '⚡',
      details: [
        'Wiring repairs and rewiring',
        'Battery systems installation',
        'Navigation electronics installation',
        'Lighting system upgrades',
        'Troubleshooting and diagnostics'
      ]
    },
    {
      id: 'woodworking',
      title: 'Woodworking',
      description: 'Custom woodworking and carpentry services for boats, from repairs to complete interior renovations.',
      icon: '🪚',
      details: [
        'Interior cabinetry and trim',
        'Custom teak decking',
        'Helm station fabrication',
        'Hatch and door repairs',
        'Custom furniture builds'
      ]
    },
    {
      id: 'detailing',
      title: 'Detailing & Cleaning',
      description: 'Professional detailing services to keep your boat looking its best.',
      icon: '✨',
      details: [
        'Complete exterior detailing',
        'Interior cleaning and conditioning',
        'Teak cleaning and restoration',
        'Metal polishing',
        'Canvas and upholstery cleaning'
      ]
    },
    {
      id: 'environmental',
      title: 'Environmental Services',
      description: 'Environmentally responsible boat maintenance and cleaning services that comply with all regulations.',
      icon: '🌱',
      details: [
        'Eco-friendly hull cleaning',
        'Responsible waste disposal',
        'Non-toxic cleaning products',
        'Water conservation practices',
        'Compliance with environmental regulations'
      ]
    },
  ];

  return (
    <>
      <HeroSection 
        title="Professional Marine Services"
        subtitle="We offer a comprehensive range of boat repair and maintenance services to keep your vessel in top condition."
        height="h-[70vh]"
        backgroundImage="bg-service-pattern"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Marina Shipyard offers a comprehensive range of professional marine services all in one location. 
              Our services are available directly from Marina Shipyard or through our network of on-site tenants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-8">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="flex items-start mb-4">
                  <div className="bg-primary text-white rounded-lg p-4 mr-4 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary pt-2">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your boat receives the highest quality service.
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary hidden md:block transform -translate-x-1/2"></div>
            
            <div className="space-y-20">
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <h3 className="text-2xl font-bold text-primary mb-4">1. Initial Consultation</h3>
                  <p className="text-gray-600">
                    We begin with a thorough discussion of your needs and a detailed inspection of your vessel to identify all necessary repairs or maintenance.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">1</div>
                  </div>
                  <div className="md:ml-8 p-6 bg-white rounded-lg shadow-md">
                    <Image
                      src="/images/bg4.jpg"
                      alt="Initial Consultation"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">2. Detailed Estimate</h3>
                  <p className="text-gray-600">
                    After the initial assessment, we provide a comprehensive estimate that outlines all required work, costs, and estimated completion time.
                  </p>
                </div>
                <div className="relative md:order-first">
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">2</div>
                  </div>
                  <div className="md:ml-8 p-6 bg-white rounded-lg shadow-md">
                    <Image
                      src="/images/bg2.jpg"
                      alt="Detailed Estimate"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <h3 className="text-2xl font-bold text-primary mb-4">3. Quality Service</h3>
                  <p className="text-gray-600">
                    Our skilled technicians perform all necessary work with attention to detail and quality craftsmanship, keeping you updated throughout the process.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">3</div>
                  </div>
                  <div className="md:ml-8 p-6 bg-white rounded-lg shadow-md">
                    <Image
                      src="/images/marinashipyard-scaled.jpg"
                      alt="Quality Service"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">4. Final Inspection</h3>
                  <p className="text-gray-600">
                    Upon completion, we conduct a thorough inspection to ensure all work meets our high standards and your satisfaction before delivery.
                  </p>
                </div>
                <div className="relative md:order-first">
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">4</div>
                  </div>
                  <div className="md:ml-8 p-6 bg-white rounded-lg shadow-md">
                    <Image
                      src="/images/bg4.jpg"
                      alt="Final Inspection"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Environmental Commitment</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Marina Shipyard is committed to environmentally friendly practices. Our green policy ensures 
              that all our operations meet or exceed environmental standards to protect our waterways and marine ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold mb-2">Responsible Disposal</h3>
              <p className="text-gray-200">
                We properly dispose of all waste materials according to environmental regulations to prevent pollution.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold mb-2">Water Conservation</h3>
              <p className="text-gray-200">
                Our operations include water conservation measures and runoff prevention to protect the marine environment.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-200">
                We use environmentally friendly cleaning products and paints whenever possible to reduce environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction
        title="Need a Service Quote?"
        description="Contact us today to discuss your boat maintenance needs and get a detailed estimate for any of our services."
        buttonText="Request a Quote"
        buttonLink="/contact"
        background="bg-gray-50"
        textColor="text-gray-900"
      />
    </>
  );
}