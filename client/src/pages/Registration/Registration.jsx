import React, {useContext} from 'react';
import SignUpForm from '../../components/Form/SignUpForm';
import AlertPasswordMinimum from '../../components/ParagraphInfo/AlertPasswordminimum';
import AlertRegister from '../../components/ParagraphInfo/AlertRegister';
import AlertContext from '../../context/AlertContext';


function Registration() {

  const {showAlert, currentAlertType } = useContext(AlertContext)

  return <div id="profileView" className="container" style={{marginTop:"130px"}}>
      {showAlert === true && currentAlertType === 11 ? <AlertRegister /> : null}
      {showAlert === true && currentAlertType === 14 ? <AlertPasswordMinimum /> : null}
  <div className="d-flex col justify-content-center profileviewcontainer fade-in" >
  <SignUpForm/>
  </div>
  </div>;
}

export default Registration;
