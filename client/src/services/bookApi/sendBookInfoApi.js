import React from 'react';
import axiosApi from 'axios';
import axios from '../../util/axiosInstance';

async function sendBookInfoApi() {
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

  return <div></div>;
}

export default sendBookInfoApi;
