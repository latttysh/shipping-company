import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://185.225.34.114:4444',
});

export default instance;
