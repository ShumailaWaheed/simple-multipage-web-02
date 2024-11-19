"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const slides = [
    {
      src: "/images/carousel-1.jpg",
      alt: "A Legacy of Flavor Since 2002",
      subtitle: "Pure & Delicious",
      title: "A Legacy of Flavor Since 2002",
    },
    {
      src: "/images/carousel-2.jpg",
      alt: "Made From Our Own Organic Milk",
      subtitle: "Pure & Delicious",
      title: "Made From Our Own Organic Milk",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div id="header-carousel" className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <Image
              className="carousel-image"
              src={slide.src}
              alt={slide.alt}
              layout="responsive"
              width={1200}
              height={600}
            />
            <div className="carousel-caption">
              <div className="caption-content">
                <h4 className="caption-subtitle">{slide.subtitle}</h4>
                <h1 className="caption-title">{slide.title}</h1>
                <a href="#" className="btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
        <button
          className="carousel-control prev"
          aria-label="Previous Slide"
          onClick={handlePrev}
        >
          <span className="control-icon">&lt;</span>
        </button>
        <button
          className="carousel-control next"
          aria-label="Next Slide"
          onClick={handleNext}
        >
          <span className="control-icon">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

