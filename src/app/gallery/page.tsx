import ImageGallery from '@/components/ImageGallery';

// Note: metadata is now handled through the root layout

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export default function GalleryPage() {
  // Gallery images data
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/marinashipyard-scaled.jpg',
      alt: 'Marina Shipyard Aerial View',
      caption: 'Aerial view of Marina Shipyard facilities'
    },
    {
      src: '/images/bg2.jpg',
      alt: 'Boat Maintenance',
      caption: 'Professional boat maintenance in progress'
    },
    {
      src: '/images/bg4.jpg',
      alt: 'Boat Repair',
      caption: 'Expert boat repair services'
    },
    {
      src: '/images/cleanmarine.png',
      alt: 'Clean Marine Initiative',
      caption: 'Part of our commitment to environmental responsibility'
    },
    {
      src: '/images/2020/12/bg2.jpg',
      alt: 'Boat Painting',
      caption: 'High-quality bottom painting services'
    },
    {
      src: '/images/2024/02/bg4.jpg',
      alt: 'Dock Services',
      caption: 'Comprehensive dock and marina services'
    },
    {
      src: '/images/2024/03/marinashipyard-scaled.jpg',
      alt: 'Marina View',
      caption: 'Beautiful view of our marina facilities'
    },
    {
      src: '/images/2019/09/sign.png',
      alt: 'Marina Shipyard Sign',
      caption: 'Welcome to Marina Shipyard'
    },
    {
      src: '/images/2024/02/sign.png',
      alt: 'Marina Shipyard Entrance',
      caption: 'The entrance to our shipyard'
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our gallery to see examples of our boat repair, maintenance, and service projects.
          </p>
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <ImageGallery images={galleryImages} />
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="mb-6">Contact us today to discuss your boat repair or maintenance needs. Our experienced team is ready to assist you.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contact" 
              className="btn bg-primary text-white hover:bg-blue-800 inline-block text-center px-6 py-3 rounded"
            >
              Contact Us
            </a>
            <a 
              href="tel:(562) 594-0995" 
              className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 inline-block text-center px-6 py-3 rounded"
            >
              Call (562) 594-0995
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}