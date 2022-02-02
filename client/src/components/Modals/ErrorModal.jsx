import React from 'react';
import { useState } from 'react';


export default function ErrorModal() {


  return (
  <div id='bookModalContainer' className='mt-5 mb-5'>
     <button className='closeButton d-flex justify-content-center align-items-center fixed-top'>X</button>

     <div id='bookModal' className='justify-content-between align-items-center'>

        <div className="card">

        <div className='d-flex justify-content-center align-items-center p-4'>
        <img src="https://covers.openlibrary.org/b/id/8166951-L.jpg" className="card-img-top rounded" alt="Book-cover" />
        </div>

        <div className="card-body d-flex row justify-content-center align-items-center">
        <a href="#" className="btn btLink m-2">list to read</a>
        <a href="#" className="btn btLink m-2">review</a>
        <a href="#" className="btn btLink m-2">Read/+Collection</a>
        </div>
        
       
        
        </div>

        <div className='textContainer'>
            <div className='textWrap'>
            <br />
            <h1>Book title?</h1>
            <h5>some variable?</h5>
            <p>other variable?</p>
            </div>
            
            <hr />
            
            <div className='silverSect p-1 d-flex justify-content-center align-items-center'>
                <h5 className='mb-0'>I Book genre? I</h5>
            </div>
            
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="rounded scrollspy-example mt-3 textScroll p-3" tabindex="0">

            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </p>
            </div>






        </div>

     </div>

  </div>);
}
