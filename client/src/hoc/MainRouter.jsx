import React from 'react';
import BooksProvider from '../context/booksContextApi/BooksProvider';
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

function MainRouter() {
  return (
    <BooksProvider>
      <BrowserRouter>
        <NavG />
        <main>
          <Landing />
        </main>
        <Footer />
      </BrowserRouter>
    </BooksProvider>
  );
}
export default MainRouter;
