import React, { createContext, useState } from 'react';
import BookContext from './BookContext';
import searchTitleAuthApi from '../../services/bookApi/searchTitleAuthApi';

function BooksProvider() {
  const [infos, setInfos] = useState('');

  const fetchData = async () => {
    const data = await searchTitleAuthApi();

    const showData = data.docs.map((item) => {
      const infos = {
        title: item.title,
        author: item.author_name,
      };
      return infos;
    });
    console.log(showData);
    return showData;
  };

  setInfos(fetchData());
  return infos;
}

export default BooksProvider;
