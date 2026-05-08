import axios from 'axios';

const API_KEY = '19eb4bed';
const BASE_URL = 'https://www.omdbapi.com/';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

export default api;