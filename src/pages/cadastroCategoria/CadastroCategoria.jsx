import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoriaWrapper from './style';
import Form from '../../components/form/Form';
import FormField from '../../components/formField/FormField';
import FormButtonGroup from '../../components/formButtonGroup/FormButtonGroup';

export default function CadastroVideo() {

    const [categorias, setCategorias] = useState(['Teste']);

    const valoresIniciais = {
        nome: '', 
        descricao: '', 
        cor: '#FF0000'
    }

    const [values, setValues] = useState(valoresIniciais);

    function setValue(event) {
        const newValue = { ...values };
        newValue[event.target.name] = event.target.value
        setValues(newValue);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setCategorias([...categorias, values]);
    }

    function reset(event) {
        event.preventDefault();
        setCategorias([]);
    }

    return (
        <CategoriaWrapper>
            <h1>Cadastro de categoria</h1>

            <Form onSubmit={handleSubmit}>

                <FormField 
                    id="nome-categoria"
                    type="text"
                    name="nome"
                    label="Nome da categoria"
                    placeholder="Informe o nome da categoria..."
                    value={values.nome}
                    onChange={setValue} />

                <label htmlFor="descricao-categoria">Descrição da categoria</label>

                <textarea 
                    id="descricao-categoria"
                    name="descricao"
                    placeholder="Informe a descrição da categoria..."
                    value={values.descricao}
                    onChange={setValue} />

                <FormField 
                    id="cor-categoria"
                    type="color"
                    name="cor"
                    label="Cor da categoria"
                    value={values.cor}
                    onChange={setValue} />

                <FormButtonGroup>
                    <button className="cadastrar" onClick={handleSubmit}>Cadastrar</button>
                    <button className="limpar" onClick={reset}>Limpar</button>
                </FormButtonGroup>
            </Form>

            <ul>
                {
                    categorias.map((categoria, indice) => {
                        return (
                            <li key={indice}>
                                {indice}. {categoria.nome} - {categoria.descricao}
                            </li>
                        );
                    })
                }
            </ul>

            <Link to="/">
                Voltar para home
            </Link>
        </CategoriaWrapper>
    );
}