import axios from 'axios';

const axiosApiInstance = axios.create();

//defining the settings for our axios instance.
axiosApiInstance.defaults.baseURL = 'http://localhost:3001';
axiosApiInstance.defaults.headers.post['Content-Type'] = 'application/json';
// axiosApiInstance.defaults.withCredentials = true;

export default axiosApiInstance;
