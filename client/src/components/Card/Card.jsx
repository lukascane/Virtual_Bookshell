import React, { useContext } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import PurpleBook from '../../assets/images/bookDarkMagenta.png';

function Card({ item }) {
  const { sendBookInfo, bookInfos } = useContext(BookContext);
  console.log(bookInfos);

  return (

    <div id="bigCard">
      <div className="row d-flex justify-content-between">
        <div>
          <div className="shadow-lg row card layout" style={{ width: '18rem' }}>
            <div className="photoframe card-img-top mt-3 layout">
            <a>
            {item.cover_i ?
            <img 
                src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`}
                alt="book-cover"
              /> :
              <img 
                src={PurpleBook}
                alt="book-cover"
              />}
              </a>
            </div>
            <div className="card-body text-left">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text bt">{item.author[0]}</p>
              <p className="card-text">Pages: {item.pages}</p>
            </div>

            <div className="button m-auto d-flex justify-content-center row align-items-center mb-2">
              <a onClick={sendBookInfo} className="btn cardBtn homeBtn btn-sm">
                List to read
              </a>
              <a className="btn cardBtn homeBtn btn-sm">Review</a>
              <a className="btn cardBtn homeBtn btn-sm">Read/to read</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
