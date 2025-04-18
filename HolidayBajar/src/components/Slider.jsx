import React, { useState, useEffect } from 'react';
import '../style/slider.css';

const sliderData = [
  {
    image: 'https://cdn.pixabay.com/photo/2020/11/24/04/01/pond-5771499_1280.jpg',
    title: 'Welcome to Zindal Holiday Bazar',
    location: 'New Delhi NCR',
    desc: 'Name Slider Description',
  },
  {
    image: 'https://jingleholidaybazar.com/images/himalay.webp',
    title: 'Explore the Wild',
    location: 'Moose Mountains',
    desc: 'Name Slider Description',
  },
  {
    image: 'https://jingleholidaybazar.com/images/akshardham-temple.webp',
    title: 'Jungle Cat',
    location: 'Amazon',
    desc: 'Name Slider Description',
  },
  {
    image: 'https://jingleholidaybazar.com/images/rameshwarm-banner.webp',
    title: 'Mighty Elephant',
    location: 'Savannah',
    desc: 'Name Slider Description',
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-list">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`slide-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="main-image"
            />
            {index === currentIndex && (
              <div className="slider-overlay">
                <h2 className="main-title">{slide.title}</h2>
                <p className="main-location">{slide.location}</p>
                <button className="slider-button">Contact Us</button>
              </div>
            )}
          </div>
        ))}

        {/* Floating Thumbnails */}
        <div className="thumbnail-carousel floating-thumbnails">
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className={`thumb-card ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={slide.image} alt={`Thumb ${index}`} />
              <div className="thumb-text">{slide.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
