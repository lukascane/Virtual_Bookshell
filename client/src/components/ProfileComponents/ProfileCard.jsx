import React, {useContext} from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import AlertContext from '../../context/AlertContext'
import Cat from '../../assets/images/abase.jpg'

export default function ProfileCard() {
const {user} = useContext(BookContext)
const {onClickShowAlert} = useContext(AlertContext)
  return <div id='profile'>

        <div className='mb-5'>    
        <h4 >My profile</h4>
        <h6>{user.username}</h6>
        </div>
        <div className='d-flex justify-content-between align-items-center mx-5 subC'>
        <div id="profilePicture" className='rounded-circle d-flex justify-content-center align-items-center'>
        <a style={{cursor:'pointer', background: 'whitesmoke'}} className='rounded-circle'>
        <img src={Cat} alt='pp' className='rounded-circle' title='Click here to select a new avatar.'/>
        </a>
        </div>
        <div id='profileData'>
        <div className='texts'>
        <h4>First name:</h4>
        <h6>{user.firstname}</h6>
        <h4 className='mt-4'>Last name:</h4>
        <h6>{user.lastname}</h6>
        <h4 className='mt-4'>@ Email:</h4>
        <h6>{user.email}</h6>
        </div>
        </div>
    </div>
    <div className='d-flex flex-column align-items-center'>
    <button className='rounded-pill buttons mt-5 mb-2' type='button' onClick={()=>onClickShowAlert(4)}>SAVE AVATAR</button>
    <button className='rounded-pill buttons mt-3 mb-2' type='button'onClick={()=>onClickShowAlert(5)}>DELETE PROFILE</button>
    </div>

  </div>;
}
