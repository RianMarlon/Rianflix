import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

export default function PageNotFound() {
    return (
        <div className="error">
            <div>
                <h1>404 - Page Not Found</h1>
                <h2>
                    Página não encontrada.
                </h2>

                <p>
                    Retorne para a página inicial clicando <Link to="/">aqui</Link>
                </p>
            </div>
        </div>
    )
}