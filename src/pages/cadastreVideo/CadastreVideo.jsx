/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoWrapper from './styles';
import Form from '../../components/form/Form';
import FormField from '../../components/formField/FormField';
import FormButtonGroup from '../../components/formButtonGroup/FormButtonGroup';
import Button from '../../components/button/Button';

import useForm from '../../hooks/useForm';
import videoRepository from '../../repositories/videos';
import categoryRepository from '../../repositories/categories';

function CadastreVideo() {
  const initialState = {
    title: '',
    url: '',
    categoryId: '1',
  };

  const [videos, setVideos] = useState([]);
  const [options, setOptions] = useState([]);
  const { value, updateField, clearForm } = useForm(initialState);

  useEffect(() => {
    videoRepository.getAll()
      .then((videos) => {
        setVideos([...videos]);
      })
      .catch((err) => {
        console.log(err.message);
      });

    categoryRepository.getAll()
      .then(async (categories) => {
        const options = await categories.map((category) => (
          { value: category.id, label: category.title }
        ));
        setOptions(options);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function getUpdatedvideos(newCategory) {
    const newvideos = videos.filter((c) => c.id !== newCategory.id);
    newvideos.unshift(newCategory);
    setVideos(newvideos);
  }

  function insert() {
    const hasEmptyValue = !value.title.trim()
      || !value.url.trim();

    value.categoryId *= 1;

    if (hasEmptyValue) return;

    videoRepository.save(value)
      .then((category) => {
        getUpdatedvideos(category);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    insert();
    clearForm();
  }

  return (
    <VideoWrapper>

      <Link to="/cadastro/categoria">
        Cadastro de categoria
      </Link>

      <h1>Cadastro de vídeo</h1>

      <Form onSubmit={handleSubmit}>

        <FormField
          idField="title-video"
          type="text"
          name="title"
          label="Título do vídeo"
          placeholder="Informe o título do vídeo..."
          value={value.title}
          onChange={updateField}
        />

        <FormField
          idField="url-video"
          type="url"
          name="url"
          label="URL do vídeo"
          placeholder="Informe a URL do vídeo..."
          value={value.url}
          onChange={updateField}
        />

        <FormField
          idField="category-id"
          type="select"
          name="categoryId"
          label="Categoria"
          value={value.categoryId}
          options={options}
          onChange={updateField}
        />

        <FormButtonGroup>
          <Button className="register" onClick={handleSubmit}>Cadastrar</Button>
          <Button className="clean" onClick={clearForm}>Limpar</Button>
        </FormButtonGroup>
      </Form>

      <ul>
        { videos.map((video) => (
          <li key={video.id}>
            {video.title}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para home
      </Link>
    </VideoWrapper>
  );
}

export default CadastreVideo;
