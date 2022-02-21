import React, { useState, useContext } from 'react';
import axiosApi from 'axios';
import axios from '../../util/axiosInstance';
import BookContext from './BookContext';
import searchTitleAuthApi from '../../services/bookApi/searchTitleAuthApi';
import sendBookInfoApi from '../../services/bookApi/sendBookInfoApi';

export default function BooksProvider({ children }) {
  const [readingStatus, setReadingStatus] = useState(0);
  const [bookInfos, setBookInfos] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  const onClickFetchData = async (title, buttonText) => {
    const data = await searchTitleAuthApi(title, buttonText);
    console.log(title);
    setBookInfos(data);
    return bookInfos;
  };

  const onClickChangeStatus = () => {
    if (readingStatus === 0) {
      setReadingStatus(1);
    } else if (readingStatus === 1) {
      setReadingStatus(0);
    }
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

  console.log(user);

  const sendBookInfo = async (item) => {
    const bookInfoToSend = {
      key: item.key,
      title: item.title,
      author: item.author[0],
      pages: item.pages,
      isbn: item.isbn,
      cover_i: item.cover_i,
      reading_status: 0,
      //  user_id
      language: item.language,
    };
    const res = await axios.post('/api/books/create', bookInfoToSend);
    console.log(res.data);
  };

  const checkLogin = () => {
    setLoggedIn(true);
  };

  // const checkLogout = () => {
  //   setLoggedIn(false);
  // };
  // const newData = onClickFetchData();
  // console.log(newData);

  const providedData = {
    onClickFetchData,
    bookInfos,
    sendBookInfo,
    handleLogin,
    user,
    checkLogin,
    // checkLogout,
    loggedIn,
    logout,
    onClickChangeStatus,
    readingStatus,
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
        // checkLogout,
        loggedIn,
        logout,
        onClickChangeStatus,
        readingStatus,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
