import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselImage from './images/carousel.jpg';
import CarouselImage2 from './images/carousel-2.jpg';
import './Navbar.css';

function CarouselComponent() {
  return (
    <div className="container">
      <Carousel
      showArrows={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      >
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