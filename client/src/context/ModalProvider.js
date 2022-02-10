import { useContext, useState } from "react";
import ModalContext from "./ModalContext";

export default function ModalProvider({children}){

    const [showModal, setShowModal] = useState(true)
    const closeHandler = ()=>{
      return  setShowModal(false)
       
    }
    const example = ()=>{
        console.log('example');
    }
    const providedData = {closeHandler, example}
      return (
          <ModalContext.Provider value={{providedData,closeHandler,showModal}}>
            {children} 
          </ModalContext.Provider>
      )
}