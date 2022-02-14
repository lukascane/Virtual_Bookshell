import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListCard from '../Card/ListCard';

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
        <ListCard item={item} id={index}></ListCard>
      ))}
    </div>
  );
}

export default ListBooksWrapper;
