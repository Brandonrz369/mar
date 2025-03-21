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
      title: 'Haul and Launch',
      description: 'Safe and efficient haul out and launch services for boats of all sizes. Our experienced team ensures your vessel is handled with care.',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Marina Shipyard & Marine Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            A quality, full service, 3rd generation boat yard where customer service always comes first!
          </p>
          <Link href="/services" className="bg-white text-primary font-medium py-2 px-6 rounded hover:bg-gray-100 transition-colors">
            View Our Services
          </Link>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">About Marina Shipyard</h2>
            <p className="text-lg mb-6">
              Marina Shipyard offers you three generations of experience and has been family owned and operated since 1964. 
              Customer Service and a Job Well Done are our greatest concerns. You can rest assured that when you place 
              your vessel in our care you will receive satisfaction in knowing the job will be done right the first time.
            </p>
            <p className="text-lg mb-6">
              We have an extensive range of Professional Marine Services to offer all in one location which are available 
              either directly from Marina Shipyard or its wide range of tenants on site.
            </p>
            <Link href="/about" className="inline-block bg-primary text-white font-medium py-2 px-6 rounded hover:bg-opacity-90 transition-colors">
              Read More
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link href="/services" className="inline-block text-primary font-medium hover:underline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-block bg-primary text-white font-medium py-2 px-6 rounded hover:bg-opacity-90 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Marina Shipyard?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="p-6 bg-gray-50 rounded shadow-md">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-xl font-semibold mb-3">Experience Since 1964</h3>
              <p>Three generations of experience in marine services and boat repairs.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow-md">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Quality Work</h3>
              <p>We pride ourselves on delivering high-quality services every time.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow-md">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-xl font-semibold mb-3">Environmentally Friendly</h3>
              <p>Committed to environmentally responsible practices in all our services.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow-md">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
              <p>Our customers' satisfaction is our top priority - always.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us Today</h2>
          <p className="text-xl max-w-3xl mx-auto mb-4">
            Get in touch with us to learn more about our services or to schedule an appointment.
          </p>
          <p className="text-2xl font-bold mb-8">(562) 594-0995</p>
          <Link href="/contact" className="bg-white text-primary font-medium py-2 px-6 rounded hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}