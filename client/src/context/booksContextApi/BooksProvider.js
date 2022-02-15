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
  const [user, setUser] = useState("")
  const handleLogin = (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser("");
    }
  };


console.log(user);

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
    <BookContext.Provider value={{bookInfos,
      sendBookInfo,
      handleLogin,
      user,}}>{children}</BookContext.Provider>
  );
}
