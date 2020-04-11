import React from 'react';
import UlMenu from './UlMenu';
import './Footer.css';

function Footer() {
  return (
    <div className="container mt-30">
        <div className="Footer">
            <div>
                <h3>Contato</h3>
                <p>tbro@tbro.com.br</p>
            </div>
            <div>
                <h3>Orçamento</h3>
                <p><a href="/">Faça seu orçamento, é rápido!</a></p>
            </div>
            <div>
                <h3>Menu</h3>
                <UlMenu ulClass={'Navbar-Footer'}/>        
            </div>
        </div>
    </div>
  );
}

export default Footer;