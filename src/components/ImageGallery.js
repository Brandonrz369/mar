"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="group relative h-64 overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
            onClick={() => openLightbox(image)}
          >
            <Image
              src={image.src}
              alt={image.alt || 'Gallery image'}
              fill
              className="object-cover"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-4xl max-h-screen p-4">
            <button 
              className="absolute top-2 right-2 text-white text-4xl hover:text-gray-300 z-10"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt || 'Gallery image'}
                fill
                className="object-contain"
              />
            </div>
            {selectedImage.caption && (
              <div className="bg-black/60 text-white p-4 mt-2 rounded">
                <p>{selectedImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}