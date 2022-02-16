import React, {useContext} from 'react';
import LoginForm from '../../components/Form/LoginForm';
import AlertLogin from '../../components/ParagraphInfo/AlertLogin';
import AlertLoginSucces from '../../components/ParagraphInfo/AlertLoginSucces';
import AlertLogout from '../../components/ParagraphInfo/AlertLogout';
import AlertContext from '../../context/AlertContext';
import AlertRegisterSucces from '../../components/ParagraphInfo/AlertRegisterSuccess'

function Login() {
    const {showAlert, onClickShowAlert, currentAlertType } = useContext(AlertContext)
  return <div id="loginview" style={{marginTop:"130px"}}>
      <div className='container'>
      {showAlert && currentAlertType === 7 ? <AlertLogin /> : null}
      {showAlert && currentAlertType === 9 ? <AlertLogout /> : null}
      {showAlert && currentAlertType === 10 ? <AlertRegisterSucces /> : null}
      </div>
      <div className="container mb-5" >
      <LoginForm />
      
    </div>
  </div>;
}

export default Login;
