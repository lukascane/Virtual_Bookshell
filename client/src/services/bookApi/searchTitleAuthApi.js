import axios from 'axios';

async function searchTitleAuthApi() {
  try {
    const response = await axios.get(
      `http://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2&limit=10`
    );

    console.log(response.data);
  } catch (error) {
    console.log('Could not get data');
  }

  return <div></div>;
}

export default searchTitleAuthApi;
