import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselImage from './carousel.jpg';
import CarouselImage2 from './carousel-2.jpg';
import './Navbar.css';

function CarouselComponent() {
  return (
    <div className="container">
      <Carousel>
        <div>
          <img src={CarouselImage} alt="Carousel" />
        </div>
        <div>
          <img src={CarouselImage2} alt="Carousel2" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;