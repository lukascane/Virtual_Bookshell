import React from 'react';
import Landing from '../pages/Landing/Landing';
import BooksProvider from '../context/booksContextApi/BooksProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavG from '../components/Navbar/NavBarGuest';
import Footer from '../components/Footer/Footer';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Registration from '../pages/Registration/Registration';
import SearchBooks from '../pages/SearchBooks/SearchBooks';
import ToReadList from '../pages/ReadList/ToReadList';
import ReadList from '../pages/ReadList/ReadList';
import NotFound from '../pages/NotFound/NotFound';

function MainRouter() {
  return (
    <BrowserRouter>
      <BooksProvider>
        <NavG />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/searchbooks" element={<SearchBooks />} />
            <Route path="/toreadlist" element={<ToReadList />} />
            <Route path="/readlist" element={<ReadList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <Footer />  */}
      </BooksProvider>
    </BrowserRouter>
  );
}
export default MainRouter;
