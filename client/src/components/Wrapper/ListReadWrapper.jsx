import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ListCard from '../Card/ListCard';
import BookContext from '../../context/booksContextApi/BookContext';

function ListBooksWrapper() {
  const { fetchReadBookList, readList } = useContext(BookContext);

  useEffect(() => {
    fetchReadBookList();
  }, []);

  return (
    <div>
      {readList.map((item, index) => (
        <ListCard item={item} id={index}></ListCard>
      ))}
    </div>
  );
}

export default ListBooksWrapper;
