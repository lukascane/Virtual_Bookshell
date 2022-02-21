import React from 'react';
import { useState, useContext } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import MiniCard from '../Card/MiniCard';

function MiniCardWrapper() {
  const { bookInfos } = useContext(BookContext);
  console.log('BookInfos: ', bookInfos);
  return (
    <div
      id="miniCardWrapper"
      className="d-flex justify-content-evenly mx-5 card-group row-cols-2 row-cols-md-4 g-4" 
      style={{marginBottom:'130px'}}
    >
      {bookInfos.map((item, index) => (
        <MiniCard item={item} id={index}></MiniCard>
      ))}
    </div>
  );
}

export default MiniCardWrapper;
