import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Gallery() {
  // Gallery items with marine-specific titles
  const galleryItems = [
    { emoji: '🚤', label: 'Powerboat Repair' },
    { emoji: '⚓', label: 'Yacht Maintenance' },
    { emoji: '🛥️', label: 'Hull Painting' },
    { emoji: '🏗️', label: 'Haul Out Services' },
    { emoji: '⛵', label: 'Sailboat Rigging' },
    { emoji: '🔧', label: 'Engine Repairs' },
    { emoji: '🛠️', label: 'Custom Work' },
    { emoji: '🌊', label: 'Waterfront Facilities' },
    { emoji: '🚢', label: 'Commercial Services' },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Work Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take a look at examples of our quality marine services and some of our recent projects.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="h-64 bg-gray-100 flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-6xl mb-4">{item.emoji}</span>
                <span className="text-xl font-medium text-primary">{item.label}</span>
                <p className="text-gray-500 mt-2">Click to view gallery</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
            <p className="text-lg mb-6">
              Marina Shipyard is equipped with modern facilities to handle all your marine service needs. 
              We have extensive yard space, equipment, and experienced staff to ensure your boat receives 
              the best care possible.
            </p>
            <div className="h-80 bg-white rounded-lg shadow-md overflow-hidden mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.963259763726!2d-118.13248388479652!3d33.75787168068711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd31c1a1e0bc33%3A0x770ce3306d3c9604!2s6400%20Marina%20Dr%2C%20Long%20Beach%2C%20CA%2090803!5e0!3m2!1sen!2sus!4v1621517462123!5m2!1sen!2sus" 
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Marina Shipyard Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Our Shipyard</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Come see our facilities in person! We'd be happy to show you around and discuss your boating needs.
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