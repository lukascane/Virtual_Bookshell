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
      const data = response.data;

      const showData = data.docs.map((item) => {
        return {
          title: item.title,
          author: item.author_name,
          cover_i: item.cover_i,
          isbn: item.isbn,
        };
      });

      console.log(showData);
      return showData;
    })
    .catch((err) => {
      return { error: err };
    });
}

export default searchTitleAuthApi;
