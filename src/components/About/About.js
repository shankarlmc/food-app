import React from "react";
import './About.css';
import AboutImage from '../../images/About.png';
import Serv1 from '../../images/Serv1.png';
import Serv2 from '../../images/Serv2.png';
import Serv3 from '../../images/Serv3.png';
import Serv4 from '../../images/Serv4.png';

function About() {
    return (
        <section className="about" id="about">
            <div className="image">
                <img src={AboutImage} alt="about" />
            </div>
            <div className="content">
                <span>why choose us?</span>
                <h3 className="title">what's make our food delicious!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut explicabo, numquam iusto est a ipsum
                    assumenda tempore esse corporis?</p>
                <a href="#" className="btn">read more</a>
                <div className="icons-container">
                    <div className="icons">
                        <img src={Serv1} alt="fast-delivery" />
                            <h3>fast delivery</h3>
                    </div>
                    <div className="icons">
                        <img src={Serv2} alt="fresh-food" />
                            <h3>fresh food</h3>
                    </div>
                    <div className="icons">
                        <img src={Serv3} alt="best-quality" />
                            <h3>best quality</h3>
                    </div>
                    <div className="icons">
                        <img src={Serv4} alt="support-24-7" />
                            <h3>24/7 support</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;