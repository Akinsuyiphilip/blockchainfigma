import React from 'react';
import citypeg from './images/Citypeg.png'

function Home() {
return (
<>
    <div className="home" data-aos="fade-right" data-aos-duration="1500">

        <div className="lay">

            <div className="texts">
                <h3>Build the Future with </h3>
                <h1>Blockchain technology
                    and Currency</h1>
            </div>
            <div className="homeimg">
                <img src={citypeg} alt="" />
            </div>
        </div>
        <div className="button">
            <a href="#">Get Whitepaper</a>
        </div>
    </div>
</>
)
}

export default Home