import React, { useEffect, useState, useContext } from 'react';
import ListCard from '../Card/ListCard';
import BookContext from '../../context/booksContextApi/BookContext';

function ListBooksWrapper(setCounter) {
  const { fetchReadBookList, readList } = useContext(BookContext);
  console.log(readList.length)
  useEffect(() => {
    fetchReadBookList();
  }, []);
/*   setCounter(readList.length)
 */  return (
    <div>
      {readList.map((item, index) => (
        <ListCard item={item} id={index}></ListCard>
      ))}
    </div>
  );
}

export default ListBooksWrapper;
