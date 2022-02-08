import React from 'react';

export default function SignUpForm() {
  return <div id='login' className='d-flex justify-content-center row align-items-center'>

    <h4 className='mt-2 mb-5'>Please create an account by filling out the information below to start</h4>
    <h4 className='mt-2'>Username:</h4>
    <input type="text" id="user_name_input" className="form-control w-100 mx-1 text-light mb-5"/>
    <h4 className='mt-2'>First name:</h4>
    <input type="text" id="first_name_input" className="form-control w-100 mx-1 text-light mb-5 signUp border-bottom"/>
    <h4 className='mt-2'>Last name:</h4>
    <input type="text" id="last_name_input" className="form-control w-100 mx-1 text-light mb-5 signUp border-bottom"/>
    <h4 className='mt-2'>Email:</h4>
    <input type="text" id="email_input" className="form-control w-100 mx-1 text-light mb-5 signUp border-bottom"/>
    <h4 className='mt-2'>Password:</h4>
    <input type="text" id="password_input" className="form-control w-100 mx-1 text-light mb-5"/>
    <div>
    <button className='rounded-pill buttons' type='button'>SIGN UP</button>
    </div>

  </div>;
}
