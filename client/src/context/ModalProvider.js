import { useState } from 'react';
import ModalContext from './ModalContext';
import BookModal from '../components/Modals/BookModal';

export default function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    author: "",
    pages: 0,
    isbn: "",
    cover_i: 0
  });

  const closeHandler = () => {
    return setShowModal(false);
  };

  const onClickShowModal = () => {
    return setShowModal(true);
  };

  const example = () => {
    console.log('example');
  };

  const providedData = { closeHandler, onClickShowModal, example };
  return (
    <ModalContext.Provider
      value={{ providedData, closeHandler, onClickShowModal, showModal, setModalContent, modalContent }}
    >
      {children}
      {showModal ? <BookModal closeHandler={closeHandler} content={modalContent} /> : null}
    </ModalContext.Provider>
  );
}
