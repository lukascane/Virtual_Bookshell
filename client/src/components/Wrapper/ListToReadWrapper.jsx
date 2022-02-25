import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import listBooksApi from '../../services/bookApi/listBooksApi';
import ListCardToRead from '../Card/ListCardToRead';
import BookContext from '../../context/booksContextApi/BookContext';

function ListBooksWrapper() {
  const { fetchToReadList, readList } = useContext(BookContext);

  useEffect(() => {
    fetchToReadList();
  }, []);

  return (
    <div>
      {readList.map((item, index) => (
        <ListCardToRead item={item} key={index}></ListCardToRead>
      ))}
    </div>
  );
}

export default ListBooksWrapper;
