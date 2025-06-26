import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './ImageSlider.css';

const ImageSlider = ({ images, alt, height = "300px", showIndicators = true, showControls = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [images.length]);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  // If only one image, display it without carousel
  if (images.length === 1) {
    return (
      <div className="single-image-container" style={{ height }}>
        <img 
          src={images[0]} 
          alt={alt}
          className="img-fluid rounded w-100 h-100"
          style={{ objectFit: 'cover' }}
          onError={(e) => {
            e.target.src = `${process.env.PUBLIC_URL}/images/placeholder-project.png`;
          }}
        />
      </div>
    );
  }

  return (
    <div className="image-slider-container" style={{ height }}>
      <Carousel 
        activeIndex={activeIndex} 
        onSelect={handleSelect}
        indicators={showIndicators}
        controls={showControls}
        interval={null} // Disable automatic sliding since we're handling it manually
        className="h-100"
      >
        {images.map((image, index) => (
          <Carousel.Item key={index} className="h-100">
            <div 
              className="d-flex align-items-center justify-content-center h-100"
              style={{ minHeight: height }}
            >
              <img
                src={image}
                alt={`${alt} ${index + 1}`}
                className="d-block w-100 h-100 rounded"
                style={{ objectFit: 'cover', maxHeight: height }}
                onError={(e) => {
                  e.target.src = `${process.env.PUBLIC_URL}/images/placeholder-project.png`;
                }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      
      {/* Custom slide indicators for better visibility */}
      <div className="custom-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
