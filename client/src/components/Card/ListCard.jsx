import React from 'react';
import { useState, useContext } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import ModalContext from '../../context/ModalContext';
import PurpleBook from '../../assets/images/bookDarkMagenta.png';

export default function ListCard({ item }) {
  const [buttonText, setButtonText] = useState('SHARE');
  const changeText = (text) => setButtonText(text);
  const { sendBookInfo, bookInfos } = useContext(BookContext);
  const { onClickShowModal, setModalContent } = useContext(ModalContext);

  const handleOpenModal = () => {
    onClickShowModal();
    setModalContent({
      title: item.title,
      author: item.author[0],
      pages: item.pages,
      // isbn: item.isbn[0],
      cover_i: item.cover_i,
    });
  };

  return (
    <div id="listCardElement" className="border-bottom mt-4">
      <div className="picBookCont me-4 ms-4">
        <a onClick={handleOpenModal}>
          {item.cover_i ? (
            <img
              src="https://covers.openlibrary.org/b/id/8166951-M.jpg"
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
          <div className="ms-3 mt-4 bigHide">
            <p className="mt-3">hkhkhkjhk</p>
            <p>Year: variable</p>
            <p>Author: {item.author}</p>
            <p>more variable</p>
            <p>pages? variable</p>
          </div>
        </div>
      </div>

      <div className="dataBookCont d-flex justify-content-evenly col">
        <div className="bookInfo">
          <div className="ms-3 mt-4">
            <p className="mt-3">uztutzutzutzut</p>
            <p>Year: variable</p>
            <p>Author: variable</p>
            <p>more variable</p>
            <p>pages? variable</p>
          </div>
        </div>

        <div className="description">
          <div className="descrTxt textScroll p-3">
            <p>
              In ancient times the Rings of Power were crafted by the
              Elven-smiths, and Sauron, The Dark Lord, forged the One Ring,
              filling it with his own power so that he could rule all others.
              But the One Ring was taken from him, and though he sought it
              throughout Middle-earth, it remained lost to him. After many ages
              it fell, by chance, into the hands of the hobbit, Bilbo Baggins.
              From his fastness in the Dark Tower of Mordor, Sauron's power
              spread far and wide. He gathered all the Great Rings to him, but
              ever he searched far and wide for the One Ring that would complete
              his dominion. On his eleventy-first birthday Bilbo disappeared,
              bequeathing to his young cousin Frodo the Ruling Ring and a
              perilous quest --- to journey across Middle-earth, deep into the
              shadow of the Dark Lord, and destroy the Ring by casting it into
              the Cracks of Doom. THE LORD OF THE RINGS tells of the great quest
              undertaken by Frodo and the Fellowship of the Ring: Gandalf the
              Wizard, Merry, Pippin, and Sam, Gimli the Dwarf, Legolas the Elf,
              Boromir of Gondor, and a tall, mysterious stranger called Strider.
              --back cove
            </p>
          </div>
          <div className="silverSect p-1 d-flex justify-content-center align-items-center mb-4">
            <h5 className="mb-0">I Book genre? I</h5>
          </div>
        </div>

        <div className="commandWrap d-flex justify-content-around col align-items-center">
          <div className="bttW mx-2 container-fluid">
            <a href="#" className="btn btLink">
              to read
            </a>
            <a href="#" className="btn btLink">
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
                  <a>
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
                  <a>
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
                  <a>
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
