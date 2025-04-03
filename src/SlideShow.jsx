import React, { useState } from 'react';

const SlideShow = () => {
  // Array of images or slide content
  const slides = [
    {
      src: '/img/masin.JPG',
      caption: 'Suhkruvatt!',
    },
    {
      src: '/img/Kevadlaat9.JPG',
      caption: 'Suhkruvati nõudlus',
    },
    {
      src: '/img/Kevadlaat2.JPG',
      caption: 'Suhkruvatt nämm nämm',
    },
    {
      src: '/img/Kevadlaat3.JPG',
      caption: 'Ootan kliente',
    },
    {
      src: '/img/Kevadlaat4.JPG',
      caption: 'Korrastan suhkruvati suhkruid',
    },
    {
      src: '/img/Kevadlaat5.JPG',
      caption: 'Alustan suhkruvati tegemist',
    },
    {
      src: '/img/Kevadlaat6.JPG',
      caption: 'Minu suhkruvati hinnad laatadel ',
    },
    {
      src: '/img/Kevadlaat7.JPG',
      caption: 'Poseerin koos nätsukommi maitselise suhkruvatiga',
    },
    {
      src: '/img/Kevadlaat8.JPG',
      caption: '',
    },
    {
      src: '/img/Kevadlaat10.JPG',
      caption: '',
    },
    {
      src: '/img/Kevadlaat1.jpeg',
      caption: '',
    },
    {
      src: '/img/Volber.JPG',
      caption: '',
    },
    {
      src: '/img/kodune.JPG',
      caption: '',
    },
    {
      src: '/img/1.jpeg',
      caption: '',
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

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