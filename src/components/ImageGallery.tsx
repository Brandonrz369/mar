import { useState } from 'react';
import Image from 'next/image';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  categories?: string[];
  title?: string;
  subtitle?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  categories = [],
  title = "Our Gallery",
  subtitle = "View some of our recent projects and services"
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  
  // Filter images by category
  const filteredImages = activeCategory
    ? images.filter(img => img.category === activeCategory)
    : images;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <span className="text-accent uppercase tracking-wider font-bold">Our Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        {/* Category Filters */}
        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === null
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              All
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative h-60 rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-10">
                <span className="text-white font-medium">View Image</span>
              </div>
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        {/* Image Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-10 right-0 text-white hover:text-accent"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[80vh] max-w-full object-contain"
              />
              <div className="mt-4 text-white text-center">
                <p>{selectedImage.alt}</p>
                {selectedImage.category && (
                  <span className="text-accent text-sm">{selectedImage.category}</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;