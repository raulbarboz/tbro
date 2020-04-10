import React from 'react';
import CarouselImage from './carousel.jpg';
import './Navbar.css';

function Carousel() {
  return (
      <div className="container">
        <img src={CarouselImage} alt="Carousel" />
      </div>
  );
}

export default Carousel;