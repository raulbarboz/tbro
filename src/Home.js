import React from 'react';
import Navbar from './Navbar';
import CarouselComponent from './CarouselComponent';
import './Home.css';

function Home() {
  return (
    <div className="Home">
        <header className="Home-header">
          <Navbar />
        </header>
        <section>
          <CarouselComponent />
        </section>
    </div>
  );
}

export default Home;
