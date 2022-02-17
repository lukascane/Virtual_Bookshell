import { useContext, useState, useEffect } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import SearchForm from '../../components/Form/SearchForm';
import CardWrapper from '../../components/Wrapper/CardWrapper';
import MiniCardWrapper from '../../components/Wrapper/MiniCardWrapper';
import BookModal from '../../components/Modals/BookModal';
import AlertSearchFailure from '../../components/ParagraphInfo/AlertSearchFailure';


function SearchBooks() {
  const { onClickFetchData, bookInfos } = useContext(BookContext);

  useEffect(async () => {
    onClickFetchData();
  }, []);

  return (
    <div>
    <div style={{marginTop:'130px'}} className='container'>
      <AlertSearchFailure />
    </div>
      <SearchForm />
      <CardWrapper />
      <MiniCardWrapper />
    </div>
  );
}

export default SearchBooks;
