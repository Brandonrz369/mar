import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Gallery() {
  // Gallery placeholders with emojis
  const galleryItems = [
    { emoji: '🚤', label: 'Speedboat' },
    { emoji: '⚓', label: 'Anchor' },
    { emoji: '🛥️', label: 'Motorboat' },
    { emoji: '🛳️', label: 'Cruise Ship' },
    { emoji: '⛵', label: 'Sailboat' },
    { emoji: '🚢', label: 'Ship' },
    { emoji: '🌊', label: 'Wave' },
    { emoji: '🐋', label: 'Whale' },
    { emoji: '🐬', label: 'Dolphin' },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take a look at our facilities and some of our recent projects.
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
                <span className="text-xl font-medium">{item.label}</span>
              </div>
            ))}
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