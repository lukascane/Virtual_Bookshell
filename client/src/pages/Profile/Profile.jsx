import React from 'react';
import EditProfileForm from '../../components/ProfileComponents/EditProfileForm';
import ProfileCard from '../../components/ProfileComponents/ProfileCard';

function Profile() {
  return <div id="profileview" className="container ">
      <div className="d-flex col justify-content-center profileviewcontainer" style={{marginTop:"200px"}}>
      <ProfileCard />
      <EditProfileForm /></div>
      
  </div>;
}

export default Profile;
