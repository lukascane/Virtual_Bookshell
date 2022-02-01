import React from 'react';
import { useState } from 'react';

function ListCard() {

  const [buttonText, setButtonText] = useState("SHARE"); 
  const changeText = (text) => setButtonText(text);


  return <div id="listcard" className="h-25">
  <div className="info ">

    <section className="d-flex col align-items-center">
    <div className="poster justify-content-center">
    <img src="https://covers.openlibrary.org/b/id/8166951-M.jpg" alt="194x228" className="image img-responsive card-img-top"/>  
    </div>

   

    <div className="info align-items-center">
    <div className='textWrap bookinfo vText '>
            <br />
            <h1>Title: Lord of the Rings </h1>
            <h5>Author: J.R.R. Tolkien</h5>
            <p>First Published: 1954</p>
            <p>Pages:500 pages </p>
            </div>
      

    <section id="plot-section">
      <div >
        <h4 className='bookinfo'>Plot</h4>
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="rounded scrollspy-example textScroll p-3" tabindex="0">

          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </p>
        </div>
        </div>
        <br/>
        <div className='bookgenre p-1 d-flex justify-content-center align-items-center'>
                <h5 className='mb-0'>I Book genres, subjects I</h5>
            </div>
    </section>

 
    <section>
      <div className="button col text-center">
        <a href="#" className="btn cardBtn homeBtn btn-sm">Read</a>
        <a href="#" className="btn cardBtn homeBtn btn-sm">Delete</a>
      
      <div className="dropdown d-flex justify-content-center      align-items-center mb-5">
        <button className="btn cardBtn homeBtn btn-sm dropdown-toggle btLink" type="button" data-bs-toggle="dropdown" aria-expanded="false" >{buttonText}
        </button>
        <ul className="dropdown-menu cardBtn" aria-labelledby="dropdownMenuButton1">
        <li onClick={() => changeText('Facebook')} className="dropdown-item title">
        <a> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-facebook" viewBox="0 0 18 18">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>&#8287;  Facebook </a></li>
        <li onClick={() => changeText('Twitter')}  className="dropdown-item year">
        <a> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-twitter" viewBox="0 0 18 18">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>&#8287;  Twitter </a></li>
        <li onClick={() => changeText('EMAIL')} className="dropdown-item author"><a> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 18 18">
        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
        </svg>&#8287;  mail a friend! </a></li>
        </ul>
        </div>
        </div>
      </section>
    
        </div>
      </section>
    </div>
       
  </div>;
}

export default ListCard;
