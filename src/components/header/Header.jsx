import React from 'react';
import Logo from '../../assets/img/rianflix.png';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <a href="/">
                <img className="logo" src={Logo} alt="Logo do RianFlix"/>
            </a>
        </header>
    );
}
