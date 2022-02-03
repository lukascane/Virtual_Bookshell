import React from 'react';
import { useState } from 'react';


export default function ErrorModal() {


  return (
  <div id='ErrorModalContainer' className='mt-5 mb-5'>

     <div id='ErrorModal' className='shadow-lg justify-content-center align-items-center'>

        <div className=' justify-content-center text-center'>
            <div className='textWrap'>
            <br />
            <h1>404</h1>
            <h5>Oops</h5>
            <p>Something went wrong  :(</p>
            </div>
            <div className="card-body justify-content-start align-items-center mb-2" style={{maxWidth:'93%'}}>
         <a href="#" className="btn btLink m-2 text-center">back to book search</a>
         </div>
            <hr />
        </div>



     </div>
     

  </div>);
};
