import React, { useState, useEffect } from 'react';
import '../style/slider.css';

const sliderData = [
  {
    image: 'https://cdn.pixabay.com/photo/2020/11/24/04/01/pond-5771499_1280.jpg',
    title: 'Welcome to Zindal Holiday Bazar',
    location: 'New Delhi NCR',
    desc: 'Forest',
  },
  {
    image: 'https://c8.alamy.com/comp/S2EKCN/alignments-of-the-great-dravidian-architecture-the-rameshwaram-temple-S2EKCN.jpg',
    title: 'Welcome to Jingle Holiday Bazar Pvt Ltd',
    location: 'Moose Mountains',
    desc: 'Rameswaram',
  },
  {
    image: 'https://wallpapercave.com/wp/wp9600947.jpg',
    title: 'Welcome to Jingle Holiday Bazar Pvt Ltd.',
    location: 'Amazon',
    desc: 'Badrinath',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.uz0JsNJbq58aBZTwqtPa1wHaEK?rs=1&pid=ImgDetMain',
    title: 'Welcome to Jingle Holiday Bazar Pvt Ltd.',
    location: 'Savannah',
    desc: 'Jaypur',
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
