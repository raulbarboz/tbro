import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import './Home.css';

function Home() {
  return (
    <div className="Home">
        <header className="Home-header">
          <Navbar />
        </header>
        <section>
          <Carousel />
        </section>
    </div>
  );
}

export default Home;
