import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Services data
  const services = [
    {
      title: 'Boat Repairs',
      description: 'Professional boat repair services by our experienced technicians. We handle everything from minor fixes to major overhauls.',
      icon: '🛠️',
    },
    {
      title: 'Boat Storage',
      description: 'Secure boat slips and storage options for vessels of all sizes. Both indoor and outdoor options available.',
      icon: '🚢',
    },
    {
      title: 'Maintenance',
      description: 'Regular maintenance services to keep your boat in top condition. We offer scheduled maintenance packages tailored to your needs.',
      icon: '⚙️',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Marina Shipyard</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your full-service marina and shipyard providing quality marine repair services and boat storage solutions.
          </p>
          <Link href="/services" className="bg-white text-primary font-medium py-2 px-6 rounded hover:bg-gray-100 transition-colors">
            View Our Services
          </Link>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
                <Link href="/services" className="inline-block mt-4 text-primary font-medium hover:underline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
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
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us Today</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Get in touch with us to learn more about our services or to schedule an appointment.
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