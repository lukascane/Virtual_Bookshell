import React from 'react'
import Av1 from '../../assets/images/avatar1.png'
import Av2 from '../../assets/images/avatar2.png'
import Av3 from '../../assets/images/avatar3.png'
import Av4 from '../../assets/images/avatar4.png'
import Av5 from '../../assets/images/avatar5.png'

function AvatarSelector() {
  return (
    <div id='avatar' className='rounded-pill mt-5 mb-5 d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-between align-items-center vw-100'>
            <a className='bg-light'><img src={Av1} /></a>
            <a className='bg-light'><img src={Av2}/></a>
            <a className='bg-light'><img src={Av3}/></a>
            <a className='bg-light'><img src={Av4}/></a>
            <a className='bg-light'><img src={Av5}/></a>
        </div>
    </div>
  )
}

export default AvatarSelector