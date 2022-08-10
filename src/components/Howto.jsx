import React from 'react';
import con01 from './images/howtoimages/01.png';
import constar from './images/howtoimages/constar.png';
import technology from './images/howtoimages/technology.png';
import tech03 from './images/howtoimages/03.png';
import carbon03 from './images/howtoimages/02.png';
import carbon from './images/howtoimages/carbonchart.png'

function Howto() {
return (
<>
    <div className="howto" data-aos="fade-down">
        <h2>
            How Do We Work Our System and Our Journey
        </h2>
        <div className="consulting" data-aos="fade-left">
            <div className="textlogo">
                <img src={con01} alt="" />
                <div className="texts">
                    <h3>Consulting</h3>
                    <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, </p>
                </div>
            </div>
            <div className="lsimg">
                <img src={constar} alt="" />
            </div>
        </div>

        <div className="research" data-aos="fade-right">
            <div className="textlogo">
                <img src={carbon03} alt="" />
                <div className="texts">
                    <h3>Research & Complaince</h3>
                    <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown</p>
                </div>
            </div>

            <div className="lsimg">
                <img src={carbon} alt="" />
            </div>
        </div>

        <div className=" consulting" data-aos="fade-left">
            <div className="textlogo">
                <img src={tech03} alt="" />
                <div className="texts">
                    <h3>Technology</h3>
                    <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown </p>
                </div>
            </div>

            <div className="lsimg">
                <img src={technology} alt="" />
            </div>
        </div>

        <div className="link" data-aos="fade-down">
            <a href="#">Let’s See More</a>
        </div>
    </div>
</>
)
}

export default Howto