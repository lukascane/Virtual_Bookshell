import { useContext, useState, useEffect } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import SearchForm from '../../components/Form/SearchForm';
import CardWrapper from '../../components/Wrapper/CardWrapper';
import MiniCardWrapper from '../../components/Wrapper/MiniCardWrapper';
import BookModal from '../../components/Modals/BookModal';

function SearchBooks() {
  const { onClickFetchData, bookInfos } = useContext(BookContext);
  const [showModal, setShowModal] = useState(true)

  useEffect(async () => {
    onClickFetchData();
  }, []);

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
    {showModal ? <BookModal closeHandler={closeModal} /> : null}
    <div>
      <SearchForm />
      <CardWrapper />
      <MiniCardWrapper />
    </div>
    </>
  );
}

export default SearchBooks;
