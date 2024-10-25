import React, { useState, useEffect } from 'react';

const SlideShow = () => {
  // Array of images or slide content
  const slides = [
    {
      src: '/img/Kevadlaat9.JPG',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/Kevadlaat2.JPG',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/Kevadlaat3.JPG',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/Kevadlaat4.JPG',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/Kevadlaat5.JPG',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/Kevadlaat6.JPG',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/Kevadlaat7.JPG',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/Kevadlaat8.JPG',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/Kevadlaat10.JPG',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/Kevadlaat1.jpeg',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/Volber.JPG',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/kodune.JPG',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/masin.JPG',
      caption: 'Caption for Image 1',
    },
    {
      src: '/img/1.jpeg',
      caption: 'Caption for Image 1',
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));

  return (
    <div className="slideshow-container">
      <div className="slide">
      <img src={slides[currentSlide].src} alt={`Slide ${currentSlide + 1}`} />
        <div className="caption">{slides[currentSlide].caption}</div>
      </div>

      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={index === currentSlide ? 'active' : ''}
          >
            •
          </span>
        ))}
      </div>


    </div>
  );
};

export default SlideShow;