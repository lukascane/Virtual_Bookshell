import { useState } from 'react';
import AlertContext from '../context/AlertContext'

export default function AlertProvider({children}){
    const [showAlert, setShowAlert] = useState(false);
    const [currentAlertType, setCurrentAlertType] = useState(0);

    const onClickShowAlert = (props) => {
     setCurrentAlertType(props)
     setShowAlert(true);   
     setTimeout(() => {
     setShowAlert(false)
  }, 3000)
  };

  const providedDataAlert = {
      onClickShowAlert, showAlert, currentAlertType
  }

    return  (
    <AlertContext.Provider value={{providedDataAlert, showAlert, onClickShowAlert, currentAlertType}}>
    {children}
    </AlertContext.Provider>
    )
}
