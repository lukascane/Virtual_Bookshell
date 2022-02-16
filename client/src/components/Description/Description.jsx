import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BookContext from '../../context/booksContextApi/BookContext';

function Description() {
  const { bookInfos } = useContext(BookContext);
  const [description, setDescription] = useState('');

  console.log(bookInfos);

  const listBooks = async () => {
    const response = await axios.get(`http://localhost:3001/api/books/list`);
    console.log(response.data);
  };

  const fetchData = async () => {
    const response = await axios.get(
      `https://openlibrary.org${bookInfos.key}.json`
    );
    console.log(response);
    // setDescription(response.data.description);
  };

  useEffect(() => {
    // fetchData();
    listBooks();
  }, []);
  return (
    <div>
      <p>{description}</p>
      {/* <p>Test</p> */}
    </div>
  );
}

export default Description;
