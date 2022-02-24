import axios from 'axios';

const axiosApiInstance = axios.create();

if (process.env.NODE_ENV === 'production') {
  axiosApiInstance.defaults.baseURL = 'https://virtual-bookshell.herokuapp.com';
} else {
  axiosApiInstance.defaults.baseURL = 'http://localhost:3001';
}

//defining the settings for our axios instance.
axiosApiInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosApiInstance.defaults.withCredentials = true;

export default axiosApiInstance;
