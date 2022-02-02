import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import NavBarLoggedIn from './components/Navbar/NavBarLoggedIn';
import NavbarGuest from './components/Navbar/NavBarGuest';
import HomeBanner from './components/HomeBanner/HomeBanner';
import SearchForm from './components/Form/SearchForm';
import MiniCard from './components/Card/MiniCard';
import BookModal from './components/Modals/BookModal';
import ReviewModal from './components/Modals/ReviewModal';
import LoginForm from './components/Form/LoginForm';
import SignUpForm from './components/Form/SignUpForm';
import EditProfileForm from './components/ProfileComponents/EditProfileForm';
import ProfileCard from './components/ProfileComponents/ProfileCard';

function App() {
  return (
    <div className="App">
      <ProfileCard />
    </div>
  );
}

export default App;
