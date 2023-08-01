import React, { useState } from 'react';
import '../styles/Slideshow.css';

function Slideshow({ images, imageClassName }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className='slideshow'>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} 
      className={imageClassName}
      />

      {images.length > 1 && (
        <div className='slideshow-controls'>
          <button onClick={handlePrevSlide}>Précédent</button>
          <span>{currentSlide + 1} / {images.length}</span>
          <button onClick={handleNextSlide}>Suivant</button>
        </div>
      )}
    </div>
  );
}

export default Slideshow;
