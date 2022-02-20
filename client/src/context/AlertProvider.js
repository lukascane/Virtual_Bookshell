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
  }, 4000)
  };

  const onClickShowAlert2 = (props) => {
     setCurrentAlertType(props)
     setShowAlert(true);   
  };

  const providedDataAlert = {
      onClickShowAlert, showAlert, currentAlertType, onClickShowAlert2
  }

    return  (
    <AlertContext.Provider value={{providedDataAlert, showAlert, onClickShowAlert, currentAlertType, onClickShowAlert2}}>
    {children}
    </AlertContext.Provider>
    )
}
