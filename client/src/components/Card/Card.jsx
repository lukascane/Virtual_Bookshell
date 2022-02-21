import React, { useContext, useEffect } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import ModalContext from '../../context/ModalContext';
import PurpleBook from '../../assets/images/bookDarkMagenta.png';
import AlertContext from '../../context/AlertContext';

function Card({ item }) {
  const { sendBookInfo, bookInfos, onClickChangeStatus, readingStatus } =
    useContext(BookContext);
  const { onClickShowModal, setModalContent } = useContext(ModalContext);
  const { onClickShowAlert } = useContext(AlertContext);

  const handleOpenModal = () => {
    onClickShowModal();
    setModalContent({
      key: item.key,
      title: item.title,
      author: item.author[0],
      pages: item.pages,
      isbn: item.isbn[0],
      cover_i: item.cover_i,
    });
  };

  const listToReadBtn = () => {
    onClickChangeStatus();
    onClickShowAlert(1);
    sendBookInfo(item);
  };

  const title = item.title;
  const words = title.split(' ');

  const newTitle = words.reduce((prev, curr, index) => {
    if (index >= 7) {
      return prev;
    }

    return '' + prev + ' ' + curr;
  });

  return (
    <div id="bigCard">
      <div className="row d-flex justify-content-between">
        <div>
          <div className="shadow-lg row card layout" style={{ width: '18rem' }}>
            <div className="photoframe card-img-top mt-3 layout">
              <a onClick={handleOpenModal}>
                {item.cover_i ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`}
                    alt="book-cover"
                  />
                ) : (
                  <img src={PurpleBook} alt="book-cover" />
                )}
              </a>
            </div>
            <div className="card-body text-left">
              <h5 className="card-title">{newTitle}</h5>
              <p className="card-text bt">{item.author}</p>
              <p className="card-text">Pages: {item.pages}</p>
            </div>

            <div className="button m-auto d-flex justify-content-center row align-items-center mb-2">
              <a onClick={listToReadBtn} className="btn cardBtn homeBtn btn-sm">
                Add to read list
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
