import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Services() {
  // Services data with marina-specific services
  const services = [
    {
      title: 'Boat Repairs',
      description: 'Professional boat repair services by our experienced technicians. We handle everything from minor fixes to major overhauls, with attention to detail and quality workmanship.',
      icon: '🛠️',
    },
    {
      title: 'Haul and Launch',
      description: 'Safe and efficient haul out and launch services for boats of all sizes. Our specialized equipment and experienced team ensure your vessel is handled with utmost care.',
      icon: '🚢',
    },
    {
      title: 'Bottom Painting',
      description: 'High-quality bottom painting services to protect your vessel from marine growth and corrosion. We use environmentally friendly anti-fouling paints.',
      icon: '🎨',
    },
    {
      title: 'Fiberglass Repair',
      description: 'Expert fiberglass repair and restoration services to fix cracks, holes, and structural damage. Our technicians ensure seamless, strong repairs that last.',
      icon: '🧵',
    },
    {
      title: 'Mechanical Services',
      description: 'Comprehensive engine and mechanical system repairs, maintenance, and installations. Our certified mechanics can handle all marine engine brands.',
      icon: '⚙️',
    },
    {
      title: 'Electrical Systems',
      description: 'Installation, repair, and upgrades for all marine electrical systems by certified technicians, from basic wiring to complex navigation systems.',
      icon: '⚡',
    },
    {
      title: 'Woodworking',
      description: 'Custom woodworking and carpentry services for boats, from repairs to complete interior renovations. Our craftsmen can match existing woodwork or create new designs.',
      icon: '🪚',
    },
    {
      title: 'Detailing & Cleaning',
      description: 'Professional detailing services to keep your boat looking its best. Interior and exterior cleaning, waxing, polishing, and maintenance services available.',
      icon: '✨',
    },
    {
      title: 'Environmental Services',
      description: 'Environmentally responsible boat maintenance and cleaning services that comply with all regulations while protecting our waterways.',
      icon: '🌱',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Marine Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Marina Shipyard offers a comprehensive range of professional marine services all in one location.
            Our services are available directly from Marina Shipyard or through our network of on-site tenants.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Environmental Commitment</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Marina Shipyard is committed to environmentally friendly practices. Our green policy ensures that all our operations 
            meet or exceed environmental standards to protect our waterways and marine ecosystem.
          </p>
          <Link href="/contact" className="bg-white text-primary font-medium py-2 px-6 rounded hover:bg-gray-100 transition-colors">
            Request a Service
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}