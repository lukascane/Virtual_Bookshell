import React, {useContext} from 'react';
import axios from '../../util/axiosInstance';
import { useNavigate } from "react-router-dom";
import AlertContext from '../../context/AlertContext';

export default function SignUpForm() {

  const { onClickShowAlert } = useContext(AlertContext)
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submit the form');
    const formData = new FormData(event.target);
    const data = {
      username: formData.get('username'), //get the data from the input with name username
      firstname: formData.get('firstname'), //get the data from the input with name firstname
      lastname: formData.get('lastname'), //get the data from the input with name lastname
      email: formData.get('email'), //...
      password: formData.get('password'),
    };
    console.log(data.password, 'im the pass');
    if (data.password.length < 8){
      return onClickShowAlert(14)
    }
    console.log(data);
    try {
      const response = await axios.post('/api/user/register', data);
      if (response.status === 200) {
        console.log('user was created');
        onClickShowAlert(10)
        navigate("/login");
      }
    } catch (error) {
      console.log('The error is: ', error);
      return onClickShowAlert(11)
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        type="text"
        id="login"
        className="d-flex justify-content-center row align-items-center mb-5"
      >
        <h4 className="mt-2 mb-5">
          Please create an account by filling out the information below to start
        </h4>
        <h4 className="mt-2">Username:</h4>
        <input
          type="text"
          name="username"
          id="user_name_input"
          className="form-control w-100 mx-1 text-light mb-5"
        />
        <h4 className="mt-2">First name:</h4>
        <input
          type="text"
          name="firstname"
          id="first_name_input"
          className="form-control w-100 mx-1 text-light mb-5 signUp border-bottom"
        />
        <h4 className="mt-2">Last name:</h4>
        <input
          type="text"
          name="lastname"
          id="last_name_input"
          className="form-control w-100 mx-1 text-light mb-5 signUp border-bottom"
        />
        <h4 className="mt-2">Email:</h4>
        <input
          type="email"
          name="email"
          id="email_input"
          className="form-control w-100 mx-1 text-light mb-5 signUp border-bottom"
        />
        <h4 className="mt-2">Password:</h4>
        <input
          type="password"
          name="password"
          id="password_input"
          className="form-control w-100 mx-1 text-light mb-5"
        />
        <div>
          <button className="rounded-pill buttons">SIGN UP</button>
        </div>
      </div>
    </form>
  );
}
