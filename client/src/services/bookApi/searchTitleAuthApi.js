import searchAxiosInstance from '../../util/searchAxiosInstance';

function searchTitleAuthApi() {
  const config = {
    params: {
      q: 'the+lord+of+the+rings',
    },
  };
  return searchAxiosInstance
    .get('/', config)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      return { error: err };
    });
}

export default searchTitleAuthApi;
