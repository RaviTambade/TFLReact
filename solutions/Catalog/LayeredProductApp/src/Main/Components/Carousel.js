import React, { useState } from 'react';
import './Carousel.css';

const images = [
  'images/greenhouse/greenhouse1.jpg',
  'images/greenhouse/greenhouse2.jpg',
  'images/greenhouse/greenhouse3.jpg',
  'images/greenhouse/greenhouse4.jpg',
  'images/greenhouse/greenhouse5.jpg',
  'images/greenhouse/greenhouse6.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrev}> &#10094;</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      <button className="carousel-button next" onClick={goToNext}>&#10095;</button>
    </div>
  );
};

export default Carousel;