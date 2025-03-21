import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  // Services data
  const services = [
    {
      title: 'Boat Repairs',
      description: 'Professional boat repair services by our experienced technicians. We handle everything from minor fixes to major overhauls.',
      imageUrl: null, // Will be updated when we have actual images
    },
    {
      title: 'Boat Storage',
      description: 'Secure boat slips and storage options for vessels of all sizes. Both indoor and outdoor options available.',
      imageUrl: null,
    },
    {
      title: 'Maintenance',
      description: 'Regular maintenance services to keep your boat in top condition. We offer scheduled maintenance packages tailored to your needs.',
      imageUrl: null,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <h2 className="text-3xl font-bold mb-6">Why Choose Marina Shipyard?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="p-6 bg-white rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">Experienced Staff</h3>
              <p>Our team has decades of combined experience in marine services.</p>
            </div>
            <div className="p-6 bg-white rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">Quality Work</h3>
              <p>We pride ourselves on delivering high-quality services every time.</p>
            </div>
            <div className="p-6 bg-white rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">Competitive Pricing</h3>
              <p>Fair and transparent pricing for all our services.</p>
            </div>
            <div className="p-6 bg-white rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
              <p>Our customers' satisfaction is our top priority.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us Today</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Get in touch with us to learn more about our services or to schedule an appointment.
          </p>
          <button className="btn-primary text-lg">Contact Us</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}