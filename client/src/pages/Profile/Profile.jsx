import React, { useContext, useState } from 'react';
import AlertPictureUpdated from '../../components/ParagraphInfo/AlertPictureUpdated';
import AlertProfile from '../../components/ParagraphInfo/AlertProfile';
import AlertProfileDeleted from '../../components/ParagraphInfo/AlertProfileDeleted';
import EditProfileForm from '../../components/ProfileComponents/EditProfileForm';
import ProfileCard from '../../components/ProfileComponents/ProfileCard';
import AlertContext from '../../context/AlertContext';
import AlertLoginSucces from '../../components/ParagraphInfo/AlertLoginSucces';
import AlertSureToDelete from '../../components/ParagraphInfo/AlertSureToDelete';
import AvatarSelector from '../../components/ProfileComponents/AvatarSelector';

function Profile() {
  const { showAlert, currentAlertType } = useContext(AlertContext);
  const [showComponent, setShowComponent] = useState(false);
  const [selectAvatar, setSelectAvatar] = useState(0);

  return (
    <div
      id="profileView"
      className="container mb-5"
      style={{ marginTop: '130px' }}
    >
      <div className="container">
        {showAlert === true && currentAlertType === 4 ? (
          <AlertPictureUpdated />
        ) : null}
        {showAlert === true && currentAlertType === 5 ? (
          <AlertProfileDeleted />
        ) : null}
        {showAlert === true && currentAlertType === 6 ? <AlertProfile /> : null}
        {showAlert === true && currentAlertType === 8 ? (
          <AlertLoginSucces />
        ) : null}
        {showAlert === true && currentAlertType === 13 ? (
          <AlertSureToDelete />
        ) : null}
      </div>
      <div className="d-flex col justify-content-center profileviewcontainer mb-5 fade-in">
        <div>
          <ProfileCard
            setShowComponent={setShowComponent}
            selectAvatar={selectAvatar}
          />
          {showComponent === false ? null : (
            <AvatarSelector
              setSelectAvatar={setSelectAvatar}
              showComponent={showComponent}
            />
          )}
        </div>
        <EditProfileForm />
      </div>
    </div>
  );
}

export default Profile;
