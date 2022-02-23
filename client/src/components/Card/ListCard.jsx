import React from 'react';
import { useState, useContext } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import ModalContext from '../../context/ModalContext';
import PurpleBook from '../../assets/images/bookDarkMagenta.png';
import Description from '../Description/Description';
import AlertContext from '../../context/AlertContext';

export default function ListCard({ item }) {
  const [buttonText, setButtonText] = useState('SHARE');
  const changeText = (text) => setButtonText(text);
  const { sendBookInfo, bookInfos, onClickChangeStatus, readingStatus } =
    useContext(BookContext);
  const { onClickShowModal, setModalContent, onClickShowModalReview } =
    useContext(ModalContext);
  const { providedDataAlert, showAlert, onClickShowAlert } =
    useContext(AlertContext);

  const handleOpenModal = () => {
    onClickShowModal();
    setModalContent({
      key: item.key,
      title: item.title,
      author: item.author,
      pages: item.pages,
      // isbn: item.isbn[0],
      cover_i: item.cover_i,
    });
  };

  const listToReadBtn = () => {
    onClickShowAlert(1);
    onClickChangeStatus();
  };

  const titleToSplit = item.title;
  const words = titleToSplit.split(' ');

  const newTitle = words.reduce((prev, curr, index) => {
    if (index >= 7) {
      return prev;
    }

    return '' + prev + ' ' + curr;
  });

  return (
    <div id="listCardElement" className="border-bottom mt-4">
      <div className="picBookCont me-4 ms-4">
        <a onClick={handleOpenModal}>
          {item.cover_i ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
              alt="book-cover-thumb"
              className="book-cover-thumb"
            />
          ) : (
            <img
              src={PurpleBook}
              alt="book-cover-thumb"
              className="book-cover-thumb"
            />
          )}
        </a>
        <div className="bookInfo2">
          <div className="ms-4 mt-4 bigHide">
            <p className="mt-3 bttl">
              <b>{newTitle}</b>
            </p>
            <p>{item.author}</p>
            <p>Pages: {item.pages}</p>
            <p>more variable</p>
            <button
              onClick={() => onClickShowAlert(0)}
              className="btn btLink rmv d-flex justify-content-between align-items-center"
              style={{ width: '140px' }}
            >
              REMOVE{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="dataBookCont d-flex justify-content-evenly col">
        <div className="bookInfo">
          <div className="ms-4 mt-4">
            <p className="mt-3 bttl">
              <b>{newTitle}</b>
            </p>
            <p>{item.author}</p>
            <p>Pages: {item.pages}</p>
            <p>more variable</p>
            <button
              onClick={() => onClickShowAlert(0)}
              className="btn btLink2 d-flex justify-content-between align-items-center"
              style={{ margin: '0px', width: '170px' }}
            >
              REMOVE{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="description">
          <div className="descrTxt textScroll p-3">
            <Description item={item.key} />
          </div>
          <div className="silverSect p-1 d-flex justify-content-center align-items-center mb-4">
            <h5 className="mb-0">I Book genre? I</h5>
          </div>
        </div>

        <div className="commandWrap d-flex justify-content-around col align-items-center">
          <div className="bttW mx-2 container-fluid">
            <a onClick={listToReadBtn} href="#" className="btn btLink">
              to read
            </a>
            <a href="#" className="btn btLink" onClick={onClickShowModalReview}>
              review
            </a>
            <div className="dropdown d-flex justify-content-center align-items-center">
              <button
                className="btn dropdown-toggle btLink"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {buttonText}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li
                  onClick={() => changeText('Facebook')}
                  className="dropdown-item title"
                >
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=example.org"
                    target="_blank"
                  >
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 18 18"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    &#8287; Facebook{' '}
                  </a>
                </li>
                <li
                  onClick={() => changeText('Twitter')}
                  className="dropdown-item year"
                >
                  <a
                    href="https://twitter.com/intent/tweet"
                    id="tweet-quote"
                    target="_blank"
                  >
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 18 18"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                    &#8287; Twitter{' '}
                  </a>
                </li>
                <li
                  onClick={() => changeText('EMAIL')}
                  className="dropdown-item author"
                >
                  <a href="mailto:">
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-envelope-fill"
                      viewBox="0 0 18 18"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                    &#8287; mail a friend!{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
