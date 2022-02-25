import React, { useContext } from 'react';
import axiosInstance from '../../util/axiosInstance';
import BookContext from '../../context/booksContextApi/BookContext';
import AlertContext from '../../context/AlertContext';

export default function EditProfileForm() {
  const { onClickShowAlert } = useContext(AlertContext);
  const { handleLogin } = useContext(BookContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
      username: formData.get('username'),
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
    };
    try {
      const response = await axiosInstance.patch(
        `http://localhost:3001/api/user/update`,
        data
      );
      handleLogin(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      id="login"
      className="d-flex mb-5 justify-content-center row align-items-center"
    >
      <h4 className="mt-2 mb-5">Edit your profile</h4>

      <form onSubmit={handleSubmit}>
        <h4 className="mt-2">Username:</h4>
        <input
          type="text"
          id="user_name_input"
          name="username"
          className="form-control w-100 mx-1 text-light mb-5"
        />
        <h4 className="mt-2">First name:</h4>
        <input
          type="text"
          id="first_name_input"
          name="firstname"
          className="form-control w-100 mx-1 text-light mb-5 signUp border-bottom"
        />
        <h4 className="mt-2">Last name:</h4>
        <input
          type="text"
          id="last_name_input"
          name="lastname"
          className="form-control w-100 mx-1 text-light mb-5 signUp border-bottom"
        />
        <h4 className="mt-2">Email:</h4>
        <input
          type="text"
          id="email_input"
          name="email"
          className="form-control w-100 mx-1 text-light mb-5 signUp border-bottom"
        />
        <h4 className="mt-2">Password:</h4>
        <input
          type="password"
          id="password_input"
          name="password"
          className="form-control w-100 mx-1 text-light mb-5"
        />
        <div>
          <button
            onClick={() => onClickShowAlert(6)}
            className="rounded-pill buttons"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}
