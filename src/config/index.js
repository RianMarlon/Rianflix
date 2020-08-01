const hasLocalHost = window.location.hostname.includes('localhost');
const URL_BACKEND = hasLocalHost
  ? 'http://localhost:8080'
  : 'https://rianflix.herokuapp.com';

export default {
  URL_BACKEND,
};
