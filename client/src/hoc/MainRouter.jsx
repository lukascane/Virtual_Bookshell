import React from 'react';
import BooksProvider from '../context/booksContextApi/BooksProvider';
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavG from '../components/Navbar/NavBarGuest';
import Landing from '../pages/Landing/Landing';
import SearchView from '../pages/SearchBooks/SearchBooks'
import BookModal from '../components/Modals/BookModal'
import ErrorModal from '../components/Modals/ErrorModal'

function MainRouter() {
  return (
    <BooksProvider>
      <BrowserRouter>
        <NavG />
        <main>
        <SearchView />
        </main>
        {/* <Footer />  */}
      </BrowserRouter>
    </BooksProvider>
  );
}
export default MainRouter;
