import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Services() {
  // Services data
  const services = [
    {
      title: 'Boat Repairs',
      description: 'Professional boat repair services by our experienced technicians. We handle everything from minor fixes to major overhauls.',
      icon: '🛠️',
    },
    {
      title: 'Engine Maintenance',
      description: 'Complete engine diagnostics, tune-ups, and repairs for optimal performance and reliability.',
      icon: '🔧',
    },
    {
      title: 'Boat Storage',
      description: 'Secure boat slips and storage options for vessels of all sizes. Both indoor and outdoor options available.',
      icon: '🚢',
    },
    {
      title: 'Detailing & Cleaning',
      description: 'Professional detailing services to keep your boat looking its best. Interior and exterior services available.',
      icon: '✨',
    },
    {
      title: 'Hull Maintenance',
      description: 'Hull inspection, cleaning, painting, and repair services to protect your vessel.',
      icon: '🛥️',
    },
    {
      title: 'Electrical Systems',
      description: 'Installation, repair, and upgrades for all marine electrical systems by certified technicians.',
      icon: '⚡',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Marina Shipyard offers a comprehensive range of marine services to meet all your boating needs.
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
          <h2 className="text-3xl font-bold mb-6">Need a Custom Service?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Don't see what you're looking for? Contact us to discuss your specific needs.
          </p>
          <Link href="/contact" className="bg-white text-primary font-medium py-2 px-6 rounded hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}