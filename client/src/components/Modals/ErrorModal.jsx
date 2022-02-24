import React from 'react';

export default function ErrorModal() {
  return (
    <div id="mask">
      <div id="ErrorModalContainer">
        <div
          id="ErrorModal"
          className="shadow-lg justify-content-center align-items-center"
        >
          <div className=" justify-content-center text-center mt-4">
            <div className="textWrap">
              <br />
              <div className="esclamation d-flex justify-content-center align-items-center">
                !
              </div>
              <h1>404</h1>
              <h5>Oops...</h5>
              <p>Something went wrong 🥲</p>
            </div>
            <div className="card-body justify-content-start align-items-center">
              <a href="#" className="btn btLink m-2 text-left">
                back to book search
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
