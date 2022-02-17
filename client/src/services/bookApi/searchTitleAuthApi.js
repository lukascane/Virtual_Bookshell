import searchAxiosInstance from '../../util/searchAxiosInstance';

function searchTitleAuthApi(search, searchCathegory) {
  let config = {
    params: {
      q: 'little+prince',
      limit: 8,
    },
  };
  if (searchCathegory == 'Title') {
    config = {
      params: {
        q: search,
        limit: 8,
      },
    };
  }

  if (searchCathegory == 'Subject') {
    config = {
      params: {
        author: search,
        limit: 8,
      },
    };
  }
  if (searchCathegory == 'Author') {
    config = {
      params: {
        author: search,
        limit: 8,
      },
    };
  }

  return searchAxiosInstance
    .get('/', config)
    .then((response) => {
      const data = response.data;

      const showData = data.docs.map((item) => {
        return {
          key: item.key,
          title: item.title,
          author: item.author_name,
          cover_i: item.cover_i,
          isbn: item.isbn[0],
          pages: item.number_of_pages_median,
          language: item.language,
          numFound: data.numFound,
        };
      });

      return showData;
    })
    .catch((err) => {
      return { error: err };
    });
}

export default searchTitleAuthApi;
