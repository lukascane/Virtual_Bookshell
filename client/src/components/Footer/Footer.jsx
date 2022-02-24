import React from 'react';
import Logo2 from '../../assets/images/Logo2.png';

export default function Footer() {
  const today = new Date();

  return (
    <div id="footer" style={{ background: '#2c2c2c' }}>
      <nav className="navbar" style={{ background: '#2c2c2c' }}>
        <div className="container-fluid d-flex justify-content-center">
          <span className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={Logo2}
              alt="logo"
              width="48"
              height="42"
              className="d-inline-block align-text-top fs-5 p-1 logo"
            />
            &copy;<span className="p-1">{today.getFullYear()}</span>
          </span>
          <div className="d-flex justify-content-evenly d-inline-block">
            <span className="p-2 createdBY">Created by:</span>
            <a
              className="p-2"
              href="https://www.linkedin.com/in/peony-langner-6808b218a/"
              target="_blank"
            >
              Peony
            </a>
            <a
              className="p-2"
              href="https://www.linkedin.com/in/lukasz-trzcinski-berlin/"
              target="_blank"
            >
              Lukasz
            </a>
            <a
              className="p-2"
              href="https://www.linkedin.com/in/riccardo-limiti-a81061226/"
              target="_blank"
            >
              Riccardo
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
