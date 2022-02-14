import { useContext, useState } from 'react';
import ModalContext from './ModalContext';
import BookModal from '../components/Modals/BookModal';

export default function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

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
      value={{ providedData, closeHandler, onClickShowModal, showModal }}
    >
      {children}
      {showModal ? <BookModal closeHandler={closeHandler} /> : null}
    </ModalContext.Provider>
  );
}
