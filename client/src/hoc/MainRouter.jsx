import React from 'react';
import BooksProvider from '../context/booksContextApi/BooksProvider';
import Profile from '../pages/Profile/Profile'
import LoginForm from '../components/Form/LoginForm';
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
import ParagraphInfo from '../components/ParagraphInfo/ParagraphInfo';
import LoginForm from '../components/Form/LoginForm';


function MainRouter() {
  return (
    <BooksProvider>
      <BrowserRouter>
        <NavG />
        <main>
<LoginForm />
        </main>
        <Footer />
      </BrowserRouter>
    </BooksProvider>
  );
}
export default MainRouter;
