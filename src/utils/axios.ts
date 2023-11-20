import axios from 'axios';
const { VITE_BASE_URL, VITE_API_TIMEOUT } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_BASE_URL,
  timeout: Number(VITE_API_TIMEOUT),
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
