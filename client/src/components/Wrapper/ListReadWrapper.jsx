import React, { useEffect, useContext } from 'react';
import ListCard from '../Card/ListCard';
import BookContext from '../../context/booksContextApi/BookContext';

function ListBooksWrapper() {
  const { fetchReadBookList, readList } = useContext(BookContext);
  console.log(readList.length)
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
