import React, { useState, useContext } from 'react';
import BookContext from './BookContext';
import searchTitleAuthApi from '../../services/bookApi/searchTitleAuthApi';

export default function BooksProvider({ children }) {
  const [bookInfos, setBookInfos] = useState([]);

  const onClickFetchData = async () => {
    const data = await searchTitleAuthApi();

    setBookInfos(data);
    console.log('I am from showData ', bookInfos);
    return bookInfos;
  };

  // const newData = onClickFetchData();
  // console.log(newData);

  const providedData = {
    onClickFetchData,
    bookInfos,
  };

  return (
    <BookContext.Provider value={providedData}>{children}</BookContext.Provider>
  );
}
