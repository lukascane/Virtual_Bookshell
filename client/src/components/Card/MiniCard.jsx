import React from 'react';

function miniCard() {
  return (
 <div className="card m-1 text-center">
  <img className="card-img-top p-1"src="https://covers.openlibrary.org/b/id/8166951-M.jpg
  " />
  <div className="card-body">
    <h5 className="card-title">Book Title</h5>
    <p className="card-text button">Some quick example.</p>
    <a href="#" className="btn cardBtn homeBtn btn-sm">Go somewhere</a>
  </div>
</div>
  );


}

export default miniCard;
