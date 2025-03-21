import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Image from 'next/image';

export default function Home() {
  // Services data
  const services = [
    {
      title: 'Boat Repairs',
      description: 'Professional boat repair services by our experienced technicians. We handle everything from minor fixes to major overhauls.',
      imageUrl: '/images/2024/03/marinashipyard-scaled.jpg',
    },
    {
      title: 'Boat Storage',
      description: 'Secure boat slips and storage options for vessels of all sizes. Both indoor and outdoor options available.',
      imageUrl: '/images/2024/02/bg4.jpg',
    },
    {
      title: 'Maintenance',
      description: 'Regular maintenance services to keep your boat in top condition. We offer scheduled maintenance packages tailored to your needs.',
      imageUrl: '/images/2020/12/bg2.jpg',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/2024/02/bg4.jpg"
            alt="Marina Shipyard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <Image 
            src="/images/2024/03/cleanmarine.png"
            alt="Marina Shipyard Logo"
            width={250}
            height={100}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Marina Shipyard</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your full-service marina and shipyard providing quality marine repair services and boat storage solutions.
          </p>
          <button className="btn-primary text-lg px-8 py-3">View Our Services</button>
        </div>
      </section>
      
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
      
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/2020/12/bg2.jpg"
            alt="Marina Backdrop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 text-center z-10 relative text-white">
          <h2 className="text-3xl font-bold mb-6">Contact Us Today</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Get in touch with us to learn more about our services or to schedule an appointment.
          </p>
          <button className="bg-white text-primary font-bold py-2 px-8 rounded text-lg hover:bg-gray-100 transition-colors">Contact Us</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}