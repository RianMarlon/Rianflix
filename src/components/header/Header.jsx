import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Header.css';

import Button from '../button/Button';

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo do RianFlix" />
      </Link>

      <Button as={Link} className="button-link" to="/cadastro/video">
        Novo vídeo
      </Button>
    </header>
  );
}
