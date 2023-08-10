import React, { useState } from 'react';
import '../styles/Slideshow.css';
import '../images/fleche-d.png';
import '../images/fleche-g.png';

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='slideshow'>
      <button className='prev-button' onClick={goToPrevSlide}>
        <img src={require('.././images/fleche-g.png')} alt='Previous' />
      </button>

      <img src={images[currentIndex]} alt='Slide' className='slide-image' />

      {/* Bouton de navigation droite */}
      <button className='next-button' onClick={goToNextSlide}>
        <img src={require('.././images/fleche-d.png')} alt='Next' />
      </button>
    </div>
  );
}

export default Slideshow;
