import React from 'react';
import worldimg from './images/worldpic.png';

function Achievements() {
return (
<>
    <div className="bid">
    <div className="achievement" data-aos="fade-down">
        <div className="texts">
            <p className='dip'>Achievements</p>
            <h3 className='dipper'>Full Decentralised and Currency Security</h3>
            <div className="foil">
                <div className="users padarea">
                    <h2> 1M+</h2>
                    <p>Happy Users</p>
                </div>
                <div className="assest padarea">
                   <h2> 200K+</h2>
                    <p>Community Assets</p>
                </div>
                <div className="build padarea">
                    <h2>20K+</h2>
                    <p>Build Community</p>
                </div>
            </div>
        </div>
        <div className="worldimg">
            <img src={worldimg} alt="" />
        </div>
    </div>
    </div>
</>
)
}

export default Achievements