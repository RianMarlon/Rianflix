/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;
const URL_CATEGORIES_WITH_VIDEOS = `${URL_CATEGORIES}?_embed=videos`;

function getAll() {
  return axios.get(URL_CATEGORIES)
    .then(async (resp) => {
      if (resp.status >= 200 || resp.status <= 299) {
        const data = await resp.data;
        return data;
      }

      throw new Error('Erro ao buscar os dados!');
    });
}

function getAllWithVideos() {
  return axios.get(URL_CATEGORIES_WITH_VIDEOS)
    .then(async (resp) => {
      if (resp.status >= 200 || resp.status <= 299) {
        const data = await resp.data;
        return data;
      }

      throw new Error('Erro ao buscar os dados!');
    });
}

function save(value) {
  return axios.post(URL_CATEGORIES, value)
    .then(async (resp) => {
      if (resp.status >= 200 || resp.status <= 299) {
        const data = await resp.data;
        return data;
      }

      throw new Error('Erro ao salvar os dados!');
    });
}

export default {
  getAll,
  getAllWithVideos,
  save,
};
