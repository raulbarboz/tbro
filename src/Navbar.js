import React from 'react';
import Logo from './images/logo.jpg';
import UlMenu from './UlMenu';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container Navbar-Flex">
        <div className="Navbar-Brand">
            <img className="Brand-Image" src={Logo} alt="logo"/>
        </div>
        <UlMenu ulClass={'Navbar-Menu'}/>
      </div>
    </div>
  );
}

export default Navbar;