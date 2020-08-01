/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryWrapper from './style';
import Form from '../../components/form/Form';
import FormField from '../../components/formField/FormField';
import FormButtonGroup from '../../components/formButtonGroup/FormButtonGroup';
import Button from '../../components/button/Button';

import useForm from '../../hooks/useForm';
import categoryRepository from '../../repositories/categories';

function CadastreCategory() {
  const initialState = {
    title: '',
    description: '',
    color: '#FF0000',
  };

  const [categories, setCategories] = useState([]);
  const { value, updateField, clearForm } = useForm(initialState);

  useEffect(() => {
    categoryRepository.getAll()
      .then((categories) => {
        setCategories([...categories]);
      });
  }, []);

  function getUpdatedCategories(newCategory) {
    const newCategories = categories.filter((c) => c.id !== newCategory.id);
    newCategories.unshift(newCategory);
    setCategories(newCategories);
  }

  function insert() {
    const hasEmptyValue = !value.title.trim()
      || !value.description.trim()
      || !value.color.trim();

    if (hasEmptyValue) return;

    categoryRepository.save(value)
      .then((category) => {
        getUpdatedCategories(category);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    insert();
  }

  return (
    <CategoryWrapper>
      <h1>Cadastro de categoria</h1>

      <Form onSubmit={handleSubmit}>

        <FormField
          idField="title-category"
          type="text"
          name="title"
          label="Título da categoria"
          placeholder="Informe o título da categoria..."
          value={value.title}
          onChange={updateField}
        />

        <FormField
          idField="description-category"
          type="textarea"
          name="description"
          label="Descrição da categoria"
          placeholder="Informe a descrição da categoria..."
          value={value.description}
          onChange={updateField}
        />

        <FormField
          idField="color-category"
          type="color"
          name="color"
          label="Cor da categoria"
          value={value.color}
          onChange={updateField}
        />

        <FormButtonGroup>
          <Button className="register" onClick={handleSubmit}>Cadastrar</Button>
          <Button className="clean" onClick={clearForm}>Limpar</Button>
        </FormButtonGroup>
      </Form>

      <ul>
        { categories.map((category) => (
          <li key={category.id}>
            {category.title}
            {' '}
            -
            {' '}
            {category.description}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para home
      </Link>
    </CategoryWrapper>
  );
}

export default CadastreCategory;
