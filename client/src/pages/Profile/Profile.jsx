import React, {useContext} from 'react';
import AlertPictureUpdated from '../../components/ParagraphInfo/AlertPictureUpdated';
import AlertProfile from '../../components/ParagraphInfo/AlertProfile';
import AlertProfileDeleted from '../../components/ParagraphInfo/AlertProfileDeleted';
import EditProfileForm from '../../components/ProfileComponents/EditProfileForm';
import ProfileCard from '../../components/ProfileComponents/ProfileCard';
import AlertContext from '../../context/AlertContext';
import AlertLoginSucces from '../../components/ParagraphInfo/AlertLoginSucces';

function Profile() {
  const { showAlert, currentAlertType } = useContext(AlertContext)

  return <div id="profileView" className="container mb-5" style={{marginTop:"130px"}}>
  <div className='container'>
  {showAlert === true && currentAlertType === 4 ? <AlertPictureUpdated /> : null}
    {showAlert === true && currentAlertType === 5 ?  <AlertProfileDeleted /> : null}
    {showAlert === true && currentAlertType === 6 ?   <AlertProfile /> : null}
    {showAlert === true && currentAlertType === 8 ? <AlertLoginSucces /> : null}
  </div>
      <div className="d-flex col justify-content-center profileviewcontainer mb-5">
      <ProfileCard />
      <EditProfileForm />
      </div>
  </div>;
}

export default Profile;
