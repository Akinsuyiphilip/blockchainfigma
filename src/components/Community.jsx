import React from 'react';
import combg from './images/communityimages/user.png';
import leftarrow from './images/communityimages/leftarrow.png';
import rightarrow from './images/communityimages/rightarrow.png'


function Community() {
return (
<>
    <div className="community"  data-aos="fade-right">
        <div className="elements">
            <h2>Our community with User reviews</h2>
            <div className="userbox">
            <img src={leftarrow} alt=""  className='leftarrow'/>
                <div className="imgbox">
                    <img src={combg} alt="" />
                </div>

                <div className="text">
                    <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown
                        <br />
                        <br />
                        -Dake M. Chile, Business Owner of Bellie
                    </p>
                </div>
                <img src={rightarrow} alt="" className='rightarrow'/>
            </div>
        </div>
    </div>
</>
)
}

export default Community