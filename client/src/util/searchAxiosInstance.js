import axios from 'axios';

const searchAxiosInstance = axios.create();

searchAxiosInstance.defaults.baseURL = 'https://openlibrary.org/search.json?';

export default searchAxiosInstance;
