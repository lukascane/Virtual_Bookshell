import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import NavBarLoggedIn from './components/Navbar/NavBarLoggedIn';
import NavbarGuest from './components/Navbar/NavBarGuest';
import HomeBanner from './components/HomeBanner/HomeBanner';
import SearchForm from './components/Form/SearchForm';
import MiniCard from './components/Card/MiniCard';
import BookModal from './components/Modals/BookModal';
import searchTitleAuthApi from './services/bookApi/searchTitleAuthApi';
import sendBookInfoApi from './services/bookApi/sendBookInfoApi';
import BooksProvider from './context/booksContextApi/BooksProvider';

function App() {
  return (
    <div className="App">
      <SearchForm />
      {/* <Card /> */}
      <MiniCard />
      {/* <HomeBanner /> */}
      <button onClick={searchTitleAuthApi}>click me</button>
    </div>
  );
}

export default App;
