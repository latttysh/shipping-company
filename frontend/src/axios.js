import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sibtranscompany.ru/api/',
});

export default instance;
