import { useState, useContext } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import Card from '../Card/Card';

export default function CardWrapper() {
  const { onClickFetchData, bookInfos } = useContext(BookContext);
  console.log(bookInfos);

  return (
    <div>
      {bookInfos.map((item) => (
        <Card item={item}></Card>
      ))}
    </div>
  );
}
