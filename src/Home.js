import React from 'react';
import Navbar from './Navbar';
import CarouselComponent from './CarouselComponent';
import Cards from './Cards';
import './Home.css';

function Home() {
  return (
    <div className="Home">
        <header className="Home-header">
          <Navbar />
        </header>
        <section className="Section-Carousel">
          <CarouselComponent />
        </section>
        <section className="Section-Cards">
          <Cards />
        </section>
    </div>
  );
}

export default Home;
