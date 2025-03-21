import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Gallery() {
  // Gallery images will be added later
  const galleryItems = Array(9).fill(null);

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
            {galleryItems.map((_, index) => (
              <div 
                key={index} 
                className="bg-gray-200 h-64 flex items-center justify-center rounded overflow-hidden"
              >
                <span className="text-gray-500">Image coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Our Shipyard</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Come see our facilities in person! We'd be happy to show you around and discuss your boating needs.
          </p>
          <button className="btn-primary text-lg">Contact Us</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}