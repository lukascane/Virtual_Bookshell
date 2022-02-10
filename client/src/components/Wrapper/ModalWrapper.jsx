import React, { useEffect } from 'react';
import ModalContext from '../../context/ModalContext';
import { useState, useContext } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import BookModal from '../Modals/BookModal';
import ModalProvider from '../../context/ModalProvider';


export default function ModalWrapper() {
    const {closeHandler,showModal} = useContext(ModalContext);
    useEffect(()=> {console.log(showModal);},[])
  return <ModalProvider>
        {showModal ? <BookModal closeHandler={closeHandler}/> : null }
        </ModalProvider>;
}
