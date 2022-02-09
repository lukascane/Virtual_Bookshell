import React, { useContext } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';

function Card({ item }) {
  const { sendBookInfo, bookInfos } = useContext(BookContext);
  console.log(bookInfos);

  return (
    <div id="bigCard">
      <div className="row d-flex justify-content-between">
        <div>
          <div className="shadow-lg row card" style={{ width: '18rem' }}>
            <div className="photoframe card-img-top">
              <img
                src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`}
                className="card-img-top mt-3"
                alt="book-cover"
              />
            </div>
            <div className="card-body text-left">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.author[0]} </p>
              <p className="card-text">Pages: {item.pages} </p>
            </div>

            <div className="button">
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
