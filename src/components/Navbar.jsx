import React from 'react';
import btech from './images/btech.png';

function Navbar() {
  return (
    <>
    <div className="nav-box">
        <div className="navcurve">

        <div className="navimg">
        <img src={btech} alt=""  />
        </div>

            <div className="linkpage">
                <a href="#" className='activenav'>About Us</a>
                <a href="#">Services</a>
                <a href="#">How it works</a>
                <a href="#">Community</a>

            </div>

            <div className="button">
            <a href="#">Join for Free</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar