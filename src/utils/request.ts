import axios from './axios';

/**
 * Requests a URL, returning a promise
 *
 */
export default function request(url: string, method: string, data?: Record<string, any>) {
  const options: any = {};
  options.headers = {
    Authorization: `${localStorage.getItem('token')}`,
  };
  options.method = method;
  options.url = url;
  options.data = data || null;
  return axios(options)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
}
