import React from 'react';
import btech from './images/btech.png';
import facebook from './images/footerimages/facebook.png';
import twitter from './images/footerimages/twitter.png';
import instagram from './images/footerimages/instagram.png';


function Footer() {
return (
<>
    <div className="footer">

        <div className="leftside">
            <img src={btech} alt="" />
            <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown
            </p>
            <h4>Social Media</h4>

            <div className="socials">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
            </div>
            <p>All rights reserved@2021</p>
        </div>
        <div className="rightside">
        <h2>Newslatter</h2>
        <div className="input">
        <input type="email"  placeholder='Email Address' />
        <button type="submit">Submit</button>
        </div>

        <hr />

        <div className="letdivided">
            <div className="first">
                <h4>About Us</h4>
                <div className="links">
                    <a href="#">Whitepaper</a>
                    <a href="#">Blog</a>
                    <a href="#">Activity</a>
                </div>
            </div>
            
            <div className="second">
                <h4>Support</h4>

                <div className="links">
                <a href="#">Help & Support</a>
                    <a href="#">Community</a>
                    <a href="#">Author Profile</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    </div>
    </div>


</>
)
}

export default Footer