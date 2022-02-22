import axios from 'axios';

const descriptionAxiosInstance = axios.create();

descriptionAxiosInstance.defaults.baseURL =
  'https://openlibrary.org/works/OL45883W.json';
descriptionAxiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] =
  '*';

export default descriptionAxiosInstance;
