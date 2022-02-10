import React from 'react';
import PurpleBook from '../../assets/images/bookDarkMagenta.png';

function miniCard({ item }) {
  return (
    <div
      className="card text-left d-flex justify-content-center align-items-center m-4"
      id="miniCard">
      <a>
      <div className='d-flex justify-content-center align-items-center'>
       {item.cover_i ? <img
        className="card-img-top p-1 miniCardPic mt-3"
        src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
        alt="thumb" /> :
        <img
        className="card-img-top p-1 miniCardPic mt-3"
        src={PurpleBook}
        alt="thumb" />}
      </div>
      <div className="p-2 infoLittle">
        <h5 className="card-title">{item.title}</h5>
        <p style={{fontSize:'14px'}}><sm className="card-text">{item.author[0]}</sm></p>
      </div>
      {/* <div className="button mb-2">
        <a href="#" className="btn cardBtn homeBtn btn-sm">
          OPEN
        </a>
      </div> */}
      </a>
    </div>
  );
}

export default miniCard;
