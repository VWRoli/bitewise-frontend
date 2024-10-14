import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  async function (config) {
    const token = Cookies.get('authjs.session-token');

    if (token) {
      config.headers!.authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axios;
