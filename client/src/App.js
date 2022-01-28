import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import NavBarLoggedIn from './components/Navbar/NavBarLoggedIn';
import NavbarGuest from './components/Navbar/NavBarGuest';
import HomeBanner from './components/HomeBanner/HomeBanner';
import SearchForm from './components/Form/SearchForm';
import MiniCard from './components/Card/MiniCard';


function App() {
  return (
    <div className="App">
    
    <SearchForm />
      {/* <Card /> */}
      <MiniCard />
      {/* <HomeBanner /> */}
    
    </div>
  );
}

export default App;
