import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/ServiceCard';

export default function Services() {
  // Services data
  const services = [
    {
      title: 'Boat Repairs',
      description: 'Professional boat repair services by our experienced technicians. We handle everything from minor fixes to major overhauls.',
      imageUrl: null,
    },
    {
      title: 'Engine Maintenance',
      description: 'Complete engine diagnostics, tune-ups, and repairs for optimal performance and reliability.',
      imageUrl: null,
    },
    {
      title: 'Boat Storage',
      description: 'Secure boat slips and storage options for vessels of all sizes. Both indoor and outdoor options available.',
      imageUrl: null,
    },
    {
      title: 'Detailing & Cleaning',
      description: 'Professional detailing services to keep your boat looking its best. Interior and exterior services available.',
      imageUrl: null,
    },
    {
      title: 'Hull Maintenance',
      description: 'Hull inspection, cleaning, painting, and repair services to protect your vessel.',
      imageUrl: null,
    },
    {
      title: 'Electrical Systems',
      description: 'Installation, repair, and upgrades for all marine electrical systems by certified technicians.',
      imageUrl: null,
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
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Service?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Don't see what you're looking for? Contact us to discuss your specific needs.
          </p>
          <button className="btn-primary text-lg">Contact Us</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}