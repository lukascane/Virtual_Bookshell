import React from 'react';

function miniCard() {
  return (
 <div className="card text-left d-flex justify-content-center align-items-center m-4" id='miniCard'>
  <img className="card-img-top p-1 miniCardPic mt-3" src="https://covers.openlibrary.org/b/id/8166951-M.jpg
  " alt="thumb"/>
  <div className="mx-2 mt-2">
    <h5 className="card-title">Book Title</h5>
    <p className="card-text">Some quick example.</p>
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
