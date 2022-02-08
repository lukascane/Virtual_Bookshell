import React from 'react';
import { useState, useContext } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import MiniCard from '../Card/MiniCard';

function MiniCardWrapper() {
  const { onClickFetchData, bookInfos } = useContext(BookContext);
  console.log(bookInfos);
  return (
    <div className="d-flex justify-content-between col container">
      {bookInfos.map((item, index) => (
        <MiniCard item={item} id={index}></MiniCard>
      ))}
    </div>
  );
}

export default MiniCardWrapper;
