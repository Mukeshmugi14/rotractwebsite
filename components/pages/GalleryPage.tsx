
import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../../constants';

// Helper component for Image Loading
const ImageWithLoader: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-light-navy z-0">
          <div className="w-8 h-8 border-4 border-rotary-yellow border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
      />
    </>
  );
};

const GalleryPage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [lightboxImageLoaded, setLightboxImageLoaded] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxImageLoaded(false);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setLightboxImageLoaded(false);
      setSelectedIndex((prev) => (prev! + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setLightboxImageLoaded(false);
      setSelectedIndex((prev) => (prev! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Swipe Gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  const selectedImage = selectedIndex !== null ? GALLERY_IMAGES[selectedIndex] : null;

  return (
    <div className="container mx-auto px-6 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">Gallery</h1>
        <p className="text-rotary-yellow text-lg">Moments of Service, Fellowship, and Fun</p>
      </section>

      {/* Responsive Grid with fixed aspect ratio */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
        {GALLERY_IMAGES.map((image, index) => (
          <div 
            key={image.id} 
            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square" 
            onClick={() => openLightbox(index)}
          >
            <ImageWithLoader
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            
            {/* Hover Overlay with Icon */}
            <div className="absolute inset-0 bg-dark-navy/0 group-hover:bg-dark-navy/40 transition-colors duration-300 flex items-center justify-center z-10">
                <svg className="w-8 h-8 md:w-12 md:h-12 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                </svg>
            </div>
            
            {/* Caption Overlay */}
             <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent z-10">
                <p className="text-white font-medium text-xs md:text-sm truncate">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Improved Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-dark-navy/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-rotary-yellow transition-colors focus:outline-none z-30 p-2 bg-black/50 rounded-full"
              aria-label="Close"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-rotary-yellow transition-colors focus:outline-none z-30 p-2 bg-black/30 hover:bg-black/60 rounded-full hidden sm:block"
              aria-label="Previous"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-rotary-yellow transition-colors focus:outline-none z-30 p-2 bg-black/30 hover:bg-black/60 rounded-full hidden sm:block"
              aria-label="Next"
            >
               <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* Lightbox Image Container */}
            <div className="relative max-w-full max-h-[80vh] flex items-center justify-center">
              {!lightboxImageLoaded && (
                 <div className="absolute inset-0 flex items-center justify-center z-10">
                   <div className="w-12 h-12 border-4 border-rotary-yellow border-t-transparent rounded-full animate-spin"></div>
                 </div>
              )}
              <img 
                  key={selectedImage.id}
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className={`max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${lightboxImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setLightboxImageLoaded(true)}
              />
            </div>
            
            <div className="mt-6 text-center z-10">
                <p className="text-lg md:text-xl font-bold text-light-slate">{selectedImage.alt}</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="inline-block px-3 py-1 bg-rotary-blue/20 text-rotary-blue text-xs font-bold rounded-full border border-rotary-blue/50">
                      {selectedImage.category}
                  </span>
                  <span className="text-slate text-xs">
                    {selectedIndex! + 1} / {GALLERY_IMAGES.length}
                  </span>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
