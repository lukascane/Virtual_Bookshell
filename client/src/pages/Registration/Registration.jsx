import React from 'react';
import SignUpForm from '../../components/Form/SignUpForm';
import AlertRegister from '../../components/ParagraphInfo/AlertRegister';

function Registration() {
  return <div id="profileView" className="container">
  <div className="d-flex col justify-content-center profileviewcontainer" style={{marginTop:"130px"}}>
  <SignUpForm/>
  <AlertRegister />
  </div>
  </div>;
}

export default Registration;
