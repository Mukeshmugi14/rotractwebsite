
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../../constants';
import { GalleryImage } from '../../types';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="container mx-auto px-6 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">Gallery</h1>
        <p className="text-rotary-yellow text-lg">Moments of Service, Fellowship, and Fun</p>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {GALLERY_IMAGES.map((image) => (
          <div key={image.id} className="group relative cursor-pointer overflow-hidden rounded-lg" onClick={() => openLightbox(image)}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-gray-200"
              aria-label="Close"
            >
              &times;
            </button>
            <p className="text-center text-white mt-2">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
    