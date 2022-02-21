import { useState } from 'react';
import ModalContext from './ModalContext';
import BookModal from '../components/Modals/BookModal';
import ReviewModal from '../components/Modals/ReviewModal';

export default function ModalProvider({ children }) { 
  const [showReviewModal, setReviewModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    key: 0,
    title: '',
    author: '',
    pages: 0,
    isbn: '',
    cover_i: 0,
  });

  const closeHandler = () => {
    return setShowModal(false);
  };

  const onClickShowModal = () => {
    return setShowModal(true);
  };

  const closeHandlerRev = () => {
    return setReviewModal(false);
  };

  const onClickShowModalReview = () => {
    return setReviewModal(true);
  };

  const example = () => {
    console.log('example');
  };

  const providedData = { closeHandler, onClickShowModal, example, closeHandlerRev, onClickShowModalReview };
  return (
    <ModalContext.Provider
      value={{
        providedData,
        closeHandler,
        onClickShowModal,
        showModal,
        setModalContent,
        modalContent,
        showReviewModal,
        closeHandlerRev,
        onClickShowModalReview
      }}
    >
      {children}
      {showModal ? (
        <BookModal closeHandler={closeHandler} content={modalContent} />
      ) : null}
      {showReviewModal ? (
        <ReviewModal closeHandler={closeHandlerRev} content={modalContent} />
      ) : null}
    </ModalContext.Provider>
  );
}
