import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import NavBarLoggedIn from './components/Navbar/NavBarLoggedIn';
import NavbarGuest from './components/Navbar/NavBarGuest';
import HomeBanner from './components/HomeBanner/HomeBanner';
import SearchForm from './components/Form/SearchForm';
import MiniCard from './components/Card/MiniCard';
import ListCard from './components/Card/ListCard';
import BookModal from './components/Modals/BookModal';

function App() {
  return (
    <div className="App">
      
      {/* <Card /> */}
      {/* <MiniCard /> */}
      <ListCard /> 
      {/* < BookModal /> */}
      {/* <HomeBanner /> */}
    </div>
  );
}

export default App;
