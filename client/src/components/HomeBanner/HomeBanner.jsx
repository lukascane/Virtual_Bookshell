import React from 'react';
import l1 from '../../assets/images/Logo1.png'

export default function HomeBanner() {
  return <div id='banner'>
        <div className='container'>
        
        <div className='hideImg'></div>

        <div className='textWrapper rounded'>
        <div className="card">
        <img src={l1} className="card-img-top logoMain m-4 heartbeat" alt="Logo-BS" />
        <div className="card-body">
        <h4 className="card-title">Your favorite Virtual Book Shelve.</h4>

        <hr className='sep'/>

        <p className="card-text">I wish there is a nice and good looking opportunity to search for good books and store them to a wish or a want to read list.</p>
        <p className="card-text">It has to be very simple and intuitive to use at the first sight and not overcomplicated.</p>
        <p className="card-text">I don´t want to be overwhelmed.</p>

        <h5 className="card-title">Want to take a look inside?</h5>
        <br />
        <a href="#" className="btn homeBtn">Try me! DEMO MODE</a>
        </div>
        </div>

        </div>

        <div className='picWrapper mt-5'>
        
        </div>

        </div>
        
  </div>;
}
