import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Header.css';

import Button from '../button/Button';

export default function Header() {
    return (
        <header className="header">
            <a href="/">
                <img className="logo" src={Logo} alt="Logo do RianFlix"/>
            </a>

            <Button as="a" className="button-link" href="/">
                Novo vídeo
            </Button>
        </header>
    );
}
