
import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div className="carousel h-[300px] md:h-[500px]">
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold text-white">{image.alt}</h3>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
