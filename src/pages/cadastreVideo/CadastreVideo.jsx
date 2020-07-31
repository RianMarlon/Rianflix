import React from 'react';
import { Link } from 'react-router-dom';

export default function CadastreVideo() {
  return (
    <div>
      <h1>Cadastro de vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastro categoria
      </Link>
    </div>
  );
}
