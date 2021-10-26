import React from "react";
import './Banner.css';
import Banner1 from '../../images/Banner/Banner1.png';
import Banner2 from '../../images/Banner/Banner2.png';
import Banner3 from '../../images/Banner/Banner3.png'

function Banner(){
    return (
        <section className="banner" id="offer">
            <div className="row-banner">
                <div className="content">
                    <span>double cheese</span>
                    <h3>burger</h3>
                    <p>with cococola and fries</p>
                    <a href="#" className="btn">order now</a>
                </div>
            </div>
            <div className="grid-banner">
                <div className="grid">
                    <img src={Banner1} alt="special-offer-50" />
                    <div className="content">
                        <span>special offer</span>
                        <h3>upto 50% off</h3>
                        <a href="#" className="btn">order now</a>
                    </div>
                </div>
                <div className="grid">
                    <img src={Banner2} alt="special-offer-25" />
                    <div className="content center">
                        <span>special offer</span>
                        <h3>upto 25% extra</h3>
                        <a href="#" className="btn">order now</a>
                    </div>
                </div>
                <div className="grid">
                    <img src={Banner3} alt="special-offer-100" />
                    <div className="content">
                        <span>limited offer</span>
                        <h3>100% cashback</h3>
                        <a href="#" className="btn">order now</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Banner;