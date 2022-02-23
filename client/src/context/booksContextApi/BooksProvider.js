import React, { useState, useContext } from 'react';
import axiosApi from 'axios';
import axios from '../../util/axiosInstance';
import BookContext from './BookContext';
import searchTitleAuthApi from '../../services/bookApi/searchTitleAuthApi';
import sendBookInfoApi from '../../services/bookApi/sendBookInfoApi';

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

  // console.log(user);

  const sendBookInfo = async (item) => {
    const bookInfoToSend = {
      key: item.key,
      title: item.title,
      author: item.author[0],
      pages: item.pages,
      isbn: item.isbn,
      cover_i: item.cover_i,
      reading_status: readingStatus,
      //  user_id
      language: item.language,
    };
    const res = await axios.post('/api/books/create', bookInfoToSend);
    console.log(res.data);
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
      //  user_id
      language: item.language,
    };
    const res = await axios.post('/api/books/create', bookInfoToSend);
    console.log(res.data);
  };

  const fetchReadBookList = async () => {
    const response = await axios.get('/api/books/list');
    setListBooks(response.data.books);
    const result = listBooks.filter((element) => element.reading_status === 0);
    setReadList(result);
  };

  const fetchToReadList = async () => {
    const response = await axios.get('/api/books/list');
    setListBooks(response.data.books);
    const result = listBooks.filter((element) => element.reading_status === 1);
    setReadList(result);
  };

  const checkLogin = () => {
    setLoggedIn(true);
  };

  const onClickDeleteBook = () => {
    console.log('remove btn');
    // try {
    //   axios
    //     .delete(
    //       'http://localhost:3001/api/books/delete/62150a7c88434b3fe56320f7'
    //     )
    //     .then((response) => console.log('Delete successful ', response))
    //     .catch((error) => {
    //       console.log('There was an error!', error);
    //     });
    // } catch (error) {
    //   console.log('There is an error: ', error);
    // }
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
    sendBookInfoModal,
    fetchReadBookList,
    listBooks,
    readList,
    fetchToReadList,
    onClickDeleteBook,
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
        sendBookInfoModal,
        fetchReadBookList,
        listBooks,
        readList,
        fetchToReadList,
        onClickDeleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
