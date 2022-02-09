import React from 'react';

function miniCard({ item }) {
  return (
    <div
      className="card text-left d-flex justify-content-center align-items-center m-4"
      id="miniCard">
      <img
        className="card-img-top p-1 miniCardPic mt-3"
        src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
        alt="thumb" />
      <div className="mx-2 mt-2">
        <h5 className="card-title">{item.title}</h5>
        <sm className="card-text">{item.author[0]}</sm>
      </div>
      <div className="button mb-2">
        <a href="#" className="btn cardBtn homeBtn btn-sm">
          OPEN
        </a>
      </div>
    </div>
  );
}

export default miniCard;
