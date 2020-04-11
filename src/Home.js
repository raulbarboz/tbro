import React from 'react';
import Navbar from './Navbar';
import CarouselComponent from './CarouselComponent';
import Cards from './Cards';
import Newsletter from './Newsletter';
import Footer from './Footer';
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
        <section className="Section-Newsletter">
          <Newsletter />
        </section>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default Home;
