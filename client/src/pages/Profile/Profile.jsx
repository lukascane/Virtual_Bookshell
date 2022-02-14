import React from 'react';
import EditProfileForm from '../../components/ProfileComponents/EditProfileForm';
import ProfileCard from '../../components/ProfileComponents/ProfileCard';

function Profile() {
  return <div id="profileView" className="container mb-5">
      <div className="d-flex col justify-content-center profileviewcontainer mb-5" style={{marginTop:"130px"}}>
      <ProfileCard />
      <EditProfileForm />
      </div>
      
  </div>;
}

export default Profile;
