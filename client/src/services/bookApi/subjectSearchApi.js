import axios from 'axios';

async function subjectSearchApi() {
  try {
    const response = await axios.get(
      `http://openlibrary.org/subjects/architecture.json?published_in=2000-2010&details=true`
    );

    console.log(response.data);
  } catch (error) {
    console.log('Could not get data');
  }
}

export default subjectSearchApi;
