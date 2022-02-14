import React from 'react';
import { useState, useContext } from 'react';
import PurpleBook from '../../assets/images/bookDarkMagenta.png';
import ModalContext from '../../context/ModalContext';
export default function BookModal(props) {

  const [buttonText, setButtonText] = useState('SHARE');
  const changeText = (text) => setButtonText(text);

  return (
    <>
    <div id="mask">
      <div id="bookModalContainer" className="mb-5">
        <button onClick={props.closeHandler} className="closeButton d-flex justify-content-center align-items-center fixed-top">
          X
        </button>

        <div
          id="bookModal"
          className="justify-content-between align-items-center"
        >
          <div className="card">
            <div className="d-flex justify-content-center align-items-center p-4">

               { props.content.cover_i ? <img
                src={`https://covers.openlibrary.org/b/id/${props.content.cover_i}-L.jpg`}
                className="card-img-top rounded"
                alt="Book-cover"
              /> : 
              <img
                src={PurpleBook}
                className="card-img-top rounded"
                alt="Book-cover"
              /> 
               } 
            </div>

            <div className="card-body d-flex row justify-content-center align-items-center">
              <a href="#" className="btn btLink m-2">
                list to read
              </a>
              <a href="#" className="btn btLink m-2">
                review
              </a>
              <a href="#" className="btn btLink m-2">
                Read/to read
              </a>
            </div>

            <div className="dropdown d-flex justify-content-center align-items-center mb-5">
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

          <div className="textContainer">
            <div className="textWrap">
              <br />
              <h1>{props.content.title}</h1>
              <h5>{props.content.author}</h5>
              <p>Pages: <b>{props.content.pages}</b></p>
            </div>

            <hr />

            <div
              className="silverSect p-1 d-flex justify-content-center align-items-center"
              style={{ backgroundColor: '#C4C4C4' }}
            >
              <h5 className="mb-0">I Book genre? I</h5>
            </div>

            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-offset="0"
              className="rounded scrollspy-example mt-3 textScroll p-3 mb-5"
              tabindex="0"
            >
              <p>
              {props.content.isbn[0]}{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {props.children}
    </>

  );
}
