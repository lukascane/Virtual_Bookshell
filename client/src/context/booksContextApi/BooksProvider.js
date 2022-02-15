import React, { useState, useContext } from 'react';
import axiosApi from 'axios';
import axios from '../../util/axiosInstance';
import BookContext from './BookContext';
import searchTitleAuthApi from '../../services/bookApi/searchTitleAuthApi';
import sendBookInfoApi from '../../services/bookApi/sendBookInfoApi';

export default function BooksProvider({ children }) {
  const [bookInfos, setBookInfos] = useState([]);

  const onClickFetchData = async (title, buttonText) => {
    const data = await searchTitleAuthApi(title, buttonText);
    console.log(title);
    setBookInfos(data);
    console.log('I am from showData ', bookInfos);
    return bookInfos;
  };

  // handle user /log in function
  const [user, setUser] = useState('');
  const handleLogin = (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser('');
    }
  };

  console.log(user);

  const sendBookInfo = async (item) => {
    const bookInfoToSend = {
      title: item.title,
      author: item.author[0],
      pages: item.pages,
      isbn: item.isbn[0],
      cover_i: item.cover_i,
      reading_status: 0,
      //  user_id
      language: 'english',
    };
    const res = await axios.post('/api/books/create', bookInfoToSend);
    console.log(res.data);
  };

  // const newData = onClickFetchData();
  // console.log(newData);

  const providedData = {
    onClickFetchData,
    bookInfos,
    sendBookInfo,
    handleLogin,
    user,
  };

  return (
    <BookContext.Provider
      value={{ onClickFetchData, bookInfos, sendBookInfo, handleLogin, user }}
    >
      {children}
    </BookContext.Provider>
  );
}
