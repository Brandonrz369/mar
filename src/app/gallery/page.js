import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function Gallery() {
  // Gallery images
  const galleryImages = [
    '/images/2024/03/marinashipyard-scaled.jpg',
    '/images/2024/02/bg4.jpg',
    '/images/2020/12/bg2.jpg',
    '/images/2024/03/marinashipyard-scaled.jpg',
    '/images/2024/02/bg4.jpg',
    '/images/2020/12/bg2.jpg',
    '/images/2024/03/marinashipyard-scaled.jpg',
    '/images/2024/02/bg4.jpg',
    '/images/2020/12/bg2.jpg',
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
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className="h-64 relative rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image 
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/2024/03/marinashipyard-scaled.jpg"
            alt="Marina Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
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