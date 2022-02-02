import React from 'react';
import BooksProvider from '../context/booksContextApi/BooksProvider';
import SearchForm from '../components/Form/SearchForm';
import Card from '../components/Card/Card';
import CardWrapper from '../components/wrapper/CardWrapper';

function MainRouter() {
  return (
    <BooksProvider>
      <div>
        <SearchForm />
        <CardWrapper />
      </div>
    </BooksProvider>
  );
}

export default MainRouter;
