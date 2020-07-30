/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoriaWrapper from './style';
import Form from '../../components/form/Form';
import FormField from '../../components/formField/FormField';
import FormButtonGroup from '../../components/formButtonGroup/FormButtonGroup';

import Button from '../../components/button/Button';

export default function CadastroVideo() {
  const [categorias, setCategorias] = useState(['Teste']);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#FF0000',
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(event) {
    const newValue = { ...values };
    newValue[event.target.name] = event.target.value;
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
          onChange={setValue}
        />

        <FormField
          id="descricao-categoria"
          type="textarea"
          name="descricao"
          label="Descrição da categoria"
          placeholder="Informe a descrição da categoria..."
          value={values.descricao}
          onChange={setValue}
        />

        <FormField
          id="cor-categoria"
          type="color"
          name="cor"
          label="Cor da categoria"
          value={values.cor}
          onChange={setValue}
        />

        <FormButtonGroup>
          <Button className="cadastrar" onClick={handleSubmit}>Cadastrar</Button>
          <Button className="limpar" onClick={reset}>Limpar</Button>
        </FormButtonGroup>
      </Form>

      <ul>
        {
          categorias.map((categoria, indice) => (
            <li key={indice}>
              {indice}
              .
              {categoria.nome}
              {' '}
              -
              {categoria.descricao}
            </li>
          ))
        }
      </ul>

      <Link to="/">
        Voltar para home
      </Link>
    </CategoriaWrapper>
  );
}
