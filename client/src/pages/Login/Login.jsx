import React from 'react';
import LoginForm from '../../components/Form/LoginForm';
import AlertLogin from '../../components/ParagraphInfo/AlertLogin';
import AlertLoginSucces from '../../components/ParagraphInfo/AlertLoginSucces';
import AlertLogout from '../../components/ParagraphInfo/AlertLogout';

function Login() {
  return <div id="loginview" style={{marginTop:"130px"}}>
      <div className='container'>
      <AlertLogin />
      <AlertLoginSucces />
      <AlertLogout />
      </div>
      <div className="container mb-5" >
      <LoginForm />
      
    </div>
  </div>;
}

export default Login;
