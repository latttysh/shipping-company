import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://80.78.241.139:4444',
});

export default instance;
