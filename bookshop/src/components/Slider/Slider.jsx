import  { useState, useEffect } from 'react';
import styles from './Slider.module.css';


import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import slider3 from '../../assets/images/slider3.jpg';

const Slider = () => {
  const slides = [slider1, slider2, slider3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    let intervalId;
    if (autoSlide) {
      intervalId = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [autoSlide, slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setAutoSlide(false);
  };

  const handleMouseLeave = () => {
    setAutoSlide(true);
  };

  return (
    <section
      className={styles.sliderSection}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.sliderContainer}>
        {}
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.sliderImage}
        />

        {}
        <div className={styles.overlayBlocks}>
          <div className={styles.overlayBlock} style={{ backgroundColor: '#6C5CE7' }}>
            <div className={styles.overlayText}>
              CHANGE OLD BOOK ON NEW
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </div>
          </div>
          <div className={styles.overlayBlock} style={{ backgroundColor: '#FF69B4' }}>
            <div className={styles.overlayText}>
              TOP 100 BOOKS 2022
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {}
      <div className={styles.sliderDots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;