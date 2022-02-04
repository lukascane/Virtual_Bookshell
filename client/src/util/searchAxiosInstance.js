import axios from 'axios';

const searchAxiosInstance = axios.create();

searchAxiosInstance.defaults.baseURL = 'http://openlibrary.org/search.json?';
searchAxiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default searchAxiosInstance;
