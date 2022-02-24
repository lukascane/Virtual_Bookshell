import React, {useContext} from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import AlertContext from '../../context/AlertContext'
import Cat from '../../assets/images/abase.jpg'
import Av1 from '../../assets/images/avatar1.png'
import Av2 from '../../assets/images/avatar2.png'
import Av3 from '../../assets/images/avatar3.png'
import Av4 from '../../assets/images/avatar4.png'
import Av5 from '../../assets/images/avatar5.png'


export default function ProfileCard( props ) {
const {user} = useContext(BookContext)
const {onClickShowAlert, onClickShowAlert2} = useContext(AlertContext)
console.log(props.selectAvatar, 'props from profile')

const switchAvatar = () => {
let defaultElement = <img src={Cat} alt='avatar' className='rounded-circle' title='Click here to select a new avatar.'/>
  
switch (props.selectAvatar) {
  case 1 : 
  defaultElement = <img src={Av1} alt='avatar' className='rounded-circle' title='Click here to select a new avatar.'/>
    break;
  case 2 :
  defaultElement = <img src={Av2} alt='avatar' className='rounded-circle' title='Click here to select a new avatar.'/>
    break;
  case 3 : 
  defaultElement = <img src={Av3} alt='avatar' className='rounded-circle' title='Click here to select a new avatar.'/>
    break;
  case 4 : 
  defaultElement = <img src={Av4} alt='avatar' className='rounded-circle' title='Click here to select a new avatar.'/>
    break;
  case 5 :
  defaultElement = <img src={Av5} alt='avatar' className='rounded-circle' title='Click here to select a new avatar.'/>
    break;
  default : console.log('test')
          return  defaultElement
}
props.setShowComponent(false)
return defaultElement
}

  return <div id='profile'>

        <div className='mb-5'>    
        <h4 >My profile</h4>
        <h6>{user.username}</h6>
        </div>
        <div className='d-flex justify-content-between align-items-center mx-5 subC'>
        <div id="profilePicture" className='rounded-circle d-flex justify-content-center align-items-center'>
        <a onClick={()=>props.setShowComponent(true)} style={{cursor:'pointer', background: 'whitesmoke'}} className='rounded-circle'>
         {switchAvatar()}
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
    <button className='rounded-pill buttons mt-3 mb-2' type='button' onClick={()=>onClickShowAlert2(13)}>DELETE USER</button>
    </div>
  </div>;
}
