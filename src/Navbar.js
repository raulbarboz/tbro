import React from 'react';
import Logo from './images/logo.jpg';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container Navbar-Flex">
        <div className="Navbar-Brand">
            <img className="Brand-Image" src={Logo} alt="logo"/>
        </div>
        <ul className="Navbar-Menu">
            <li>Portifólio</li>
            <li>Contato</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;