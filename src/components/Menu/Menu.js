import React from "react";
import './Menu.css';
import Menu1 from '../../images/Menu/Menu1.png';
import Menu2 from '../../images/Menu/Menu2.png';
import Menu3 from '../../images/Menu/Menu3.png';
import Menu4 from '../../images/Menu/Menu4.png';
import Menu5 from '../../images/Menu/Menu5.png';
import Menu6 from '../../images/Menu/Menu6.png';

function Menu() {
    return (
        <section className="menu" id="menu">
            <div className="heading">
                <span>our menu</span>
                <h3>our top dishes</h3>
            </div>
            <div className="box-container">
                <a href="#" className="box">
                    <img src={Menu1} alt="delicious-food" />
                        <div className="content">
                            <h3>Burger</h3>
                            <div className="price">$40.00</div>
                        </div>
                </a>
                <a href="#" className="box">
                    <img src={Menu2} alt="meatball-pizza" />
                        <div className="content">
                            <h3>Meatball Pizza</h3>
                            <div className="price">$40.00</div>
                        </div>
                </a>
                <a href="#" className="box">
                    <img src={Menu3} alt="delicious-cake" />
                        <div className="content">
                            <h3>delicious cake</h3>
                            <div className="price">$40.00</div>
                        </div>
                </a>
                <a href="#" className="box">
                    <img src={Menu4} alt="chicken-sandwich" />
                        <div className="content">
                            <h3>chicken sandwich</h3>
                            <div className="price">$40.00</div>
                        </div>
                </a>
                <a href="#" className="box">
                    <img src={Menu5} alt="french-fries" />
                        <div className="content">
                            <h3>french fries</h3>
                            <div className="price">$40.00</div>
                        </div>
                </a>
                <a href="#" className="box">
                    <img src={Menu6} alt="chicken-pizza" />
                        <div className="content">
                            <h3>chicken pizza</h3>
                            <div className="price">$40.00</div>
                        </div>
                </a>
            </div>

        </section>
    );
}

export default Menu;