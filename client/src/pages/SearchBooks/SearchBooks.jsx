import { useContext, useState, useEffect } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import SearchForm from '../../components/Form/SearchForm';
import CardWrapper from '../../components/Wrapper/CardWrapper';
import MiniCardWrapper from '../../components/Wrapper/MiniCardWrapper';
import BookModal from '../../components/Modals/BookModal';
import AlertSearchFailure from '../../components/ParagraphInfo/AlertSearchFailure';
import AlertContext from '../../context/AlertContext';

function SearchBooks() {
  const { showAlert, onClickShowAlert, currentAlertType } =
    useContext(AlertContext);
  const { onClickFetchData, bookInfos } = useContext(BookContext);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(async () => {
    onClickFetchData();
  }, []);

  useEffect(() => {
    if(!bookInfos.length && !firstLoad) {
      onClickShowAlert(16);
    }

    if(firstLoad) {
      setFirstLoad(false)
    }
  }, [bookInfos])

  return (
    <div>
    <div style={{marginTop:'130px'}} className='container'>
      {showAlert && currentAlertType === 16 ? <AlertSearchFailure /> : null }
    </div>
      <SearchForm />
      <CardWrapper /> 
      <MiniCardWrapper />
    </div>
  );
}

export default SearchBooks;
