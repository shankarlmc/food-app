import React from 'react';
import {FaTrash} from 'react-icons/fa';
import Cart1 from '../../images/Cat1.png';
import Cart2 from '../../images/Cat2.png';
import Cart3 from '../../images/Cat3.png';
import './Cart.css';

function Cart(){
    return (
        <div className="shopping-cart active">
            <div className="box">
                <span className="trash-icon"><FaTrash /></span>
                <img src={Cart1} alt="cart-1" className="cart-image"/>
                    <div className="content">
                        <h3>Burger with ...</h3>
                        <span className="price">Rs. 600/-</span>
                        <span className="quantity">qty : 1</span>
                    </div>
            </div>
            <div className="box">
                <span className="trash-icon"><FaTrash /></span>
                <img src={Cart2} alt="cart-2" className="cart-image"/>
                    <div className="content">
                        <h3>Pizza</h3>
                        <span className="price">Rs. 150/-</span>
                        <span className="quantity">qty : 1</span>
                    </div>
            </div>
            <div className="box">
                <span className="trash-icon"><FaTrash /></span>
                <img src={Cart3} alt="cart-3" className="cart-image"/>
                    <div className="content">
                        <h3>HamBurger</h3>
                        <span className="price">Rs. 400/-</span>
                        <span className="quantity">qty : 1</span>
                    </div>
            </div>
            <div className="total"> total : Rs. 1000/-</div>
            <button className="place-order-btn">Place Order</button>
        </div>
    );
}

export default Cart;