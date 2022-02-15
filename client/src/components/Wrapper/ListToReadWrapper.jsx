import React, { useEffect, useState } from 'react';
import axios from 'axios';
import listBooksApi from '../../services/bookApi/listBooksApi';
import ListCardToRead from '../Card/ListCardToRead';

function ListBooksWrapper() {
  const [listBooks, setListBooks] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/api/books/list');
    setListBooks(response.data.books);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('Listbooks ', listBooks);

  return (
    <div>
      {listBooks.map((item, index) => (
        <ListCardToRead item={item} id={index}></ListCardToRead>
      ))}
    </div>
  );
}

export default ListBooksWrapper;
