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
import Registration from '../pages/Registration/Registration';




function MainRouter() {
  return (
    <BooksProvider>
      <BrowserRouter>
        <NavG />
        <main>

        <Registration/>

        </main>
        {/* <Footer />  */}
      </BrowserRouter>
    </BooksProvider>
  );
}
export default MainRouter;
