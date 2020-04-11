import React from 'react';

function Navbar(props) {
    return (
        <ul className={props.ulClass}>
            <li><a href="/">Portifólio</a></li>
            <li><a href="/">Contato</a></li>
        </ul>
        );
    }

export default Navbar;