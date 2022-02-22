import axios from 'axios';

const descriptionAxiosInstance = axios.create();

descriptionAxiosInstance.defaults.baseURL = 'https://openlibrary.org';

export default descriptionAxiosInstance;
