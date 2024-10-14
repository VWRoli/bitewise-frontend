import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  async function (config) {
    //get token from cookie
    const token = '';
    // const token = await localStorageUtils.getData('token');
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
