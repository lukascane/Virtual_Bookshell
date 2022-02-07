import React, { useContext } from 'react';

function Card() {
  return (
    <div id="bigCard">
      <div class="row d-flex justify-content-between">
        <div>
          <div className="shadow-lg row card" style={{ width: '18rem' }}>
            <div className="photoframe card-img-top">
              <img
                src="https://covers.openlibrary.org/b/id/8166951-M.jpg
  "
                className="card-img-top mt-3"
                alt="book-cover"
              />
            </div>
            <div className="card-body text-left">
              <h5 className="card-title">title</h5>
              <p className="card-text">Some quick example </p>
            </div>

            <div className="button">
              <a href="#" className="btn cardBtn homeBtn btn-sm">
                List to read
              </a>
              <a href="#" className="btn cardBtn homeBtn btn-sm">
                Review
              </a>
              <a href="#" className="btn cardBtn homeBtn btn-sm">
                Read/to read
              </a>
            </div>
          </div>
          ;
        </div>
      </div>
    </div>
  );
}

export default Card;
