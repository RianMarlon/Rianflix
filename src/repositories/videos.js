/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function getAll() {
  return axios.get(URL_VIDEOS)
    .then(async (resp) => {
      if (resp.status >= 200 || resp.status <= 299) {
        const data = await resp.data;
        return data;
      }

      throw new Error('Erro ao buscar os dados!');
    });
}

function save(value) {
  return axios.post(URL_VIDEOS, value)
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
  save,
};
