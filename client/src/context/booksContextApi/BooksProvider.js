import React, { useState, useContext } from 'react';
import axios from '../../util/axiosInstance';
import BookContext from './BookContext';
import searchTitleAuthApi from '../../services/bookApi/searchTitleAuthApi';

export default function BooksProvider({ children }) {
  const [readingStatus, setReadingStatus] = useState(0);
  const [bookInfos, setBookInfos] = useState([]);
  const [readList, setReadList] = useState([]);
  const [listBooks, setListBooks] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  const onClickFetchData = async (title, buttonText) => {
    const data = await searchTitleAuthApi(title, buttonText);
    if (Array.isArray(data)) {
      setBookInfos(data);
    } else {
      setBookInfos([]);
    }
    return bookInfos;
  };

  const onClickToRead = () => {
    setReadingStatus(1);
    console.log();
  };

  const onClickRead = () => {
    setReadingStatus(0);
  };

  // handle user /log in function
  const handleLogin = (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser('');
    }
  };

  const logout = async () => {
    const response = await axios.get('/api/user/logout');
    handleLogin(null);
    setLoggedIn(false);
  };

  const sendBookInfo = async (item) => {
    const bookInfoToSend = {
      key: item.key,
      title: item.title,
      author: item.author[0],
      pages: item.pages,
      isbn: item.isbn,
      cover_i: item.cover_i,
      reading_status: readingStatus,
      user: user._id,
      language: item.language,
    };
    const res = await axios.post('/api/books/create', bookInfoToSend);
  };

  const sendBookInfoModal = async (item) => {
    const bookInfoToSend = {
      key: item.key,
      title: item.title,
      author: item.author,
      pages: item.pages,
      isbn: item.isbn,
      cover_i: item.cover_i,
      reading_status: readingStatus,
      user: user._id,
      language: item.language,
    };
    const res = await axios.post('/api/books/create', bookInfoToSend);
  };

  const fetchReadBookList = async () => {
    const response = await axios.get('/api/books/listbyuser');
    setListBooks(response.data.bookListByUser);
    const result = listBooks.filter((element) => element.reading_status === 1);
    setReadList(result);
  };

  const fetchToReadList = async () => {
    const response = await axios.get('/api/books/listbyuser');
    setListBooks(response.data.bookListByUser);
    const result = listBooks.filter((element) => element.reading_status === 0);
    setReadList(result);
  };

  const checkLogin = () => {
    setLoggedIn(true);
  };

  const onClickDeleteBook = (item) => {
    try {
      axios
        .delete(`http://localhost:3001/api/books/delete/${item}`)
        .then((response) => console.log())
        .catch((error) => {
          console.log('There was an error!', error);
        });
    } catch (error) {
      console.log('There is an error: ', error);
    }
  };

  return (
    <BookContext.Provider
      value={{
        onClickFetchData,
        bookInfos,
        sendBookInfo,
        handleLogin,
        user,
        checkLogin,
        loggedIn,
        logout,
        readingStatus,
        sendBookInfoModal,
        fetchReadBookList,
        listBooks,
        readList,
        fetchToReadList,
        onClickDeleteBook,
        onClickRead,
        onClickToRead,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
