import React from 'react';
import SearchForm from '../../components/Form/SearchForm';
import CardWrapper from '../../components/Wrapper/CardWrapper';
import MiniCardWrapper from '../../components/Wrapper/MiniCardWrapper';

function SearchBooks() {
  return (
    <div>
      <SearchForm />
      <CardWrapper />
      <MiniCardWrapper />
    </div>
  );
}

export default SearchBooks;
