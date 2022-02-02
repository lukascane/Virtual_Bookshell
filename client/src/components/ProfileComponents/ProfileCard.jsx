import React from 'react';

export default function ProfileCard() {
  return <div id='profile'>

        <div className='mt-2 mb-5'>    
        <h4 >My profile</h4>
        <h6>Variable USER NAME</h6>
        </div>
        <div className='d-flex justify-content-between align-items-center mx-5 subC'>
        <div id="profilePicture" className='rounded-circle d-flex justify-content-center align-items-center'>
        <img src='https://avatars.githubusercontent.com/u/79979330?v=4' alt='pp' className='rounded-circle'/>
        </div>
        <div id='profileData'>
        <div className='texts'>
        <h4>First name:</h4>
        <h6>Variable first name?</h6>
        <h4 className='mt-4'>Last name:</h4>
        <h6>Variable last name?</h6>
        <h4 className='mt-4'>@ Email:</h4>
        <h6>Variable email?</h6>
        </div>
        </div>
    </div>
    <div>
    <button className='rounded-pill buttons mt-5 mb-2' type='button'>MODIFY IMAGE</button>
    </div>

  </div>;
}
