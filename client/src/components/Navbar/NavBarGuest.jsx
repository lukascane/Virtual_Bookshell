import React from 'react';
import let2 from '../../assets/images/lettring2.png'

export default function Navbar() {

/*   let loggedIn = true;
  return {
        <>
            {loggedIn ? 
                <NavBarLoggedIn /> :
                <NavBarGuest />
            }
        </>
    } */



  return <div id='navB'>
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid d-flex justify-content-between">
    <div>
    <img src={let2} alt='logo-brand' className='logoImg navbar-brand'/>
    <button className="navbar-toggler togg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon d-flex justify-content-center align-items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-caret-down-square-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"/>
    </svg>
      </span>
    </button>
    </div>
    <div className="collapse navbar-collapse collM" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
          <a className="nav-link" href="#"><button className="btn rounded-pill buttons" type="button">demo</button></a>
        </li>
                <li className="nav-item">
          <a className="nav-link" href="#"><button className="btn rounded-pill buttons" type="button">sign up</button></a>
        </li>
                <li className="nav-item">
          <a className="nav-link" href="#"><button className="btn rounded-pill buttons" type="button">login</button></a>
        </li>
      </ul>
    </div>
  </div>
</nav>


{/*     <button className="btn rounded-pill me-3" type="button">books</button>
        <button className="btn rounded-pill me-3" type="button">to read</button>
          <button className="btn rounded-pill me-3" type="button">read</button>
            <button className="btn rounded-pill me-3" type="button">profile</button>
              <button className="btn rounded-pill" type="button">logout</button> */}

</div>;
}