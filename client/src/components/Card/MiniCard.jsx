import React, { useContext } from 'react';
import PurpleBook from '../../assets/images/bookDarkMagenta.png';
import ModalContext from '../../context/ModalContext';

function MiniCard({ item }) {
  const { onClickShowModal, setModalContent } = useContext(ModalContext);

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
  return (
    <div
      className="card text-left d-flex justify-content-center align-items-center m-4 zooms"
      id="miniCard"
    >
      <a onClick={handleOpenModal}>
        <div className="d-flex justify-content-center align-items-center">
          {item.cover_i ? (
            <img
              className="card-img-top p-1 miniCardPic mt-3"
              src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
              alt="thumb"
            />
          ) : (
            <img
              className="card-img-top p-1 miniCardPic mt-3"
              src={PurpleBook}
              alt="thumb"
            />
          )}
        </div>
        <div className="p-2 infoLittle">
          <h5 className="card-title">{item.title}</h5>
          <p style={{ fontSize: '14px' }}>
            <sm className="card-text">{item.author}</sm>
          </p>
        </div>
      </a>
    </div>
  );
}

export default MiniCard;
