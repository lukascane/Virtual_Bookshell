import React from 'react';
import axios from '../../util/axiosInstance';

export default function LoginForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Login the user');
    const formData = new FormData(event.target);

    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
    };
    console.log(data);
    try {
      const response = await axios.post('/api/user/login', data);

      if (response.status === 200) {
        //everything went well!
        console.log('You are now logged in');
      }
    } catch (error) {
      console.log('The error is: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        id="login"
        className="d-flex justify-content-center row align-items-center"
      >
        <h4 className="mt-2 mb-5">Login with your existing account to start</h4>
        <h4 className="mt-2">Username:</h4>
        <input
          type="text"
          name="username"
          id="user_name_input"
          className="form-control w-100 mx-1 text-light mb-5"
        />
        <h4 className="mt-2">Password:</h4>
        <input
          type="password"
          name="password"
          id="password_input"
          className="form-control w-100 mx-1 text-light mb-5"
        />
        <div>
          <button className="rounded-pill buttons">LOGIN</button>
        </div>
      </div>
    </form>
  );
}
