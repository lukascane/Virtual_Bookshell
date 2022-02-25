import React from 'react';
import { useState, useContext } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import ParagraphInfo from '../ParagraphInfo/ParagraphInfo';

export default function SearchForm() {
  const [title, setTitle] = useState('');
  const [buttonText, setButtonText] = useState('Title');
  const { onClickFetchData, bookInfos } = useContext(BookContext);
  const changeText = (text) => setButtonText(text);

  const onChangeSearchInput = (e) => {
    e.preventDefault();
    return setTitle(e.target.value);
  };

  return (
    <div id="searchForm">
      <div className="container formWrapper">
        <div className="dropdown dropDForm rounded-pill">
          <button
            className="btn dropdown-toggle rounded-pill dropDForm"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {buttonText}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li
              onClick={() => changeText('Title')}
              className="dropdown-item title"
            >
              Title
            </li>
            <li
              onClick={() => changeText('Author')}
              className="dropdown-item author"
            >
              Author
            </li>
            <li
              onClick={() => changeText('Subject')}
              className="dropdown-item subject"
            >
              Subject
            </li>
          </ul>
        </div>

        <input
          type="text"
          onChange={onChangeSearchInput}
          id="inputSearchField"
          className="form-control w-50 mx-3 text-light"
          placeholder="Type your book here.."
          name="searchbook"
        />

        <button
          type="button"
          className="btn rounded-pill"
          onClick={(e) => onClickFetchData(title, buttonText, e)}
        >
          search
        </button>
      </div>

      <div className="dropdown dropDForm2 rounded-pill mt-3">
        <button
          className="btn dropdown-toggle rounded-pill dropDForm2"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {buttonText}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li onClick={() => changeText('Title')} className="dropdown-item">
            Title
          </li>
          <li onClick={() => changeText('Year')} className="dropdown-item">
            Year
          </li>
          <li onClick={() => changeText('Author')} className="dropdown-item">
            Author
          </li>
        </ul>
      </div>
      {bookInfos[0] === undefined ? null : (
        <ParagraphInfo bookInfos={bookInfos} />
      )}
    </div>
  );
}
