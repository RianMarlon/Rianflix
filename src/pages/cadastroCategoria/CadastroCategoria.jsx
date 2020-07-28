import React from 'react';
import { Link } from 'react-router-dom';

export default function CadastroVideo() {
    return (
        <div>
            <h1>Cadastro de categoria</h1>

            <form>
                <label htmlFor="nome-categoria">
                    Nome da categoria
                </label>

                <input type="text" id="nome-categoria"/>

                <button>Cadastrar</button>
            </form>

            <Link to="/">
                Voltar para home
            </Link>
        </div>
    );
}