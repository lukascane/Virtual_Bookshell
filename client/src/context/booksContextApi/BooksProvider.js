import BookContext from './BookContext';
import searchTitleAuthApi from '../../services/bookApi/searchTitleAuthApi';

function BooksProvider() {
  const fetchData = async () => {
    const data = await searchTitleAuthApi();

    const isbn = data.docs[0].isbn.map((book) => {
      return book;
    });
    console.log(isbn[0]);
    return isbn[0];
  };

  fetchData();
}

export default BooksProvider;
