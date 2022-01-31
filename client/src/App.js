import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import NavBarLoggedIn from './components/Navbar/NavBarLoggedIn';
import NavbarGuest from './components/Navbar/NavBarGuest';
import HomeBanner from './components/HomeBanner/HomeBanner';
import MiniCard from './components/Card/MiniCard';
import axios from './util/axiosInstance';
import { useState, useEffect } from 'react';
import search from './services/bookApi/searchTitleAuthApi';
import sendBookInfoApi from './services/bookApi/sendBookInfoApi';

function App() {
  useEffect(() => {
    search();
  }, []);
  return (
    <div className="App">
      {/* <Card /> */}
      {/* <MiniCard /> */}
      {/* <HomeBanner /> */}
      <button onClick={sendBookInfoApi}>Click to read</button>
    </div>
  );
}

export default App;
