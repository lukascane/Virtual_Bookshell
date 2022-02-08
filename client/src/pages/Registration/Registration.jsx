import React from 'react';
import SignUpForm from '../../components/Form/SignUpForm';

function Registration() {
  return <div id="profileview" className="container">
  <div className="d-flex col justify-content-center profileviewcontainer" style={{marginTop:"130px"}}>
  <SignUpForm/>
  </div>
  </div>;
}

export default Registration;
