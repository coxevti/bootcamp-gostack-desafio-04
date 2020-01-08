import React from 'react';

import facebook from '../assets/facebook.svg'

import './Header.css';

function Header() {
    return (
        <div className="container">
            <img src={facebook} alt="logo" />
            <a href="#">Meu perfil</a>
        </div>
    );
}

export default Header;