import React, {useState} from 'react'
import Av1 from '../../assets/images/avatar1.png'
import Av2 from '../../assets/images/avatar2.png'
import Av3 from '../../assets/images/avatar3.png'
import Av4 from '../../assets/images/avatar4.png'
import Av5 from '../../assets/images/avatar5.png'

function AvatarSelector(props) {
    const [currentAvatar, setCurrentAvatar] = useState(0)
    console.log(currentAvatar)
    props.setSelectAvatar(currentAvatar)
  return (
    <div id='avatar' className='rounded-pill mt-5 mb-5 d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-between align-items-center vw-100'>
            <a className='bg-light' onClick={()=>setCurrentAvatar(1)}><img src={Av1} alt='avatar' /></a>
            <a className='bg-light' onClick={()=>setCurrentAvatar(2)}><img src={Av2} alt='avatar'/></a>
            <a className='bg-light' onClick={()=>setCurrentAvatar(3)}><img src={Av3} alt='avatar'/></a>
            <a className='bg-light' onClick={()=>setCurrentAvatar(4)}><img src={Av4} alt='avatar'/></a>
            <a className='bg-light' onClick={()=>setCurrentAvatar(5)}><img src={Av5} alt='avatar'/></a>
        </div>
    </div>
  )
}

export default AvatarSelector