import axios from 'axios';

async function listBooksApi() {
  try {
    const response = await axios.get(`http://localhost:3001/api/books/list`);

    console.log('I am from listBooksApi ', response.data);
    return response.data;
  } catch (error) {
    console.log('Could not get data');
  }
}

export default listBooksApi;
