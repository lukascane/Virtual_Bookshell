import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import NavBarLoggedIn from './components/Navbar/NavBarLoggedIn';
import NavbarGuest from './components/Navbar/NavBarGuest';
import HomeBanner from './components/HomeBanner/HomeBanner';
import MiniCard from './components/Card/MiniCard';
import axios from './util/axiosInstance';
import { useState, useEffect } from 'react';
import search from './services/bookApi/searchTitleAuthApi';
import axiosApi from 'axios';

function App() {
  useEffect(() => {
    search();
  }, []);
  const sendBookInfo = async () => {
    const response = await axiosApi.get(
      `http://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2&limit=10`
    );

    const books = response.data;
    const bookOne = books.docs[0];
    const bookInfoToSend = {
      key_isbn: bookOne.isbn[0],
      cover: bookOne.isbn[0],
      title: bookOne.title,
      author: bookOne.author_name[0],
      subject: bookOne.isbn[0],
      publisher: bookOne.publisher[0],
      reading_status: 0,
      pages: 50,
      //  user_id
      language: 'english',
    };
    console.log(bookOne);
    const res = await axios.post('/api/books/create', bookInfoToSend);
    console.log(res.data);
  };
  return (
    <div className="App">
      {/* <Card /> */}
      {/* <MiniCard /> */}
      {/* <HomeBanner /> */}
      <button onClick={sendBookInfo}>Click to read</button>
    </div>
  );
}

export default App;
