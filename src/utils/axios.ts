import axios from 'axios';
// const { REACT_APP_BASE_URL, REACT_APP_API_TIMEOUT } = process.env;

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
