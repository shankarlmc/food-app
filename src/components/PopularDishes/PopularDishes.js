import React from 'react';
import './PopularDishes.css';
import { FaStar, FaStarHalfAlt, FaHeart } from 'react-icons/fa';
import Food1 from '../../images/Dishes/Food1.png';
import Food2 from '../../images/Dishes/Food2.png';
import Food3 from '../../images/Dishes/Food3.png';
import Food4 from '../../images/Dishes/Food4.png';
import Food5 from '../../images/Dishes/Food5.png';
import Food6 from '../../images/Dishes/Food6.png';
import Food7 from '../../images/Dishes/Food7.png';
import Food8 from '../../images/Dishes/Food8.png';



function PopularDishes(){

    const handleAddToCart = (item) => {
        alert('item added to cart');
    }

    return (
        <section className="popular" id="popular">
            <div className="heading">
                <span>popular food</span>
                <h3>our special dishes</h3>
            </div>
            <div className="box-container">
                <div className="box">
                    <span className="like-food"><FaHeart/></span>
                    <div className="image">
                        <img src={Food1} alt="" />
                    </div>
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <span> (50) </span>
                        </div>
                        <div className="price">$40.00 <span>$50.00</span></div>
                        <button
                            onClick={(e)=>handleAddToCart(1)}
                            className="btn"
                        >Add To Cart</button>
                    </div>
                </div>

                <div className="box">
                    <span className="like-food"><FaHeart/></span>
                    <div className="image">
                        <img src={Food2} alt="" />
                    </div>
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <span> (50) </span>
                        </div>
                        <div className="price">$40.00 <span>$50.00</span></div>
                        <button
                            onClick={(e)=>handleAddToCart(1)}
                            className="btn"
                        >Add To Cart</button>
                    </div>
                </div>

                <div className="box">
                    <span className="like-food"><FaHeart/></span>
                    <div className="image">
                        <img src={Food3} alt="" />
                    </div>
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <span> (50) </span>
                        </div>
                        <div className="price">$40.00 <span>$50.00</span></div>
                        <button
                            onClick={(e)=>handleAddToCart(1)}
                            className="btn"
                        >Add To Cart</button>
                    </div>
                </div>

                <div className="box">
                    <span className="like-food"><FaHeart/></span>
                    <div className="image">
                        <img src={Food4} alt="" />
                    </div>
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <span> (50) </span>
                        </div>
                        <div className="price">$40.00 <span>$50.00</span></div>
                        <button
                            onClick={(e)=>handleAddToCart(1)}
                            className="btn"
                        >Add To Cart</button>
                    </div>
                </div>

                <div className="box">
                    <span className="like-food"><FaHeart/></span>
                    <div className="image">
                        <img src={Food5} alt="" />
                    </div>
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <span> (50) </span>
                        </div>
                        <div className="price">$40.00 <span>$50.00</span></div>
                        <button
                            onClick={(e)=>handleAddToCart(1)}
                            className="btn"
                        >Add To Cart</button>
                    </div>
                </div>

                <div className="box">
                    <span className="like-food"><FaHeart/></span>
                    <div className="image">
                        <img src={Food6} alt="" />
                    </div>
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <span> (50) </span>
                        </div>
                        <div className="price">$40.00 <span>$50.00</span></div>
                        <button
                            onClick={(e)=>handleAddToCart(1)}
                            className="btn"
                        >Add To Cart</button>
                    </div>
                </div>

                <div className="box">
                    <span className="like-food"><FaHeart/></span>
                    <div className="image">
                        <img src={Food7} alt="" />
                    </div>
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <span> (50) </span>
                        </div>
                        <div className="price">$40.00 <span>$50.00</span></div>
                        <button
                            onClick={(e)=>handleAddToCart(1)}
                            className="btn"
                        >Add To Cart</button>
                    </div>
                </div>

                <div className="box">
                    <span className="like-food"><FaHeart/></span>
                    <div className="image">
                        <img src={Food8} alt="" />
                    </div>
                    <div className="content">
                        <h3>delicious food</h3>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <span> (50) </span>
                        </div>
                        <div className="price">$40.00 <span>$50.00</span></div>
                        <button
                            onClick={(e)=>handleAddToCart(1)}
                            className="btn"
                        >Add To Cart</button>
                    </div>
                </div>
            </div>
        </section>
);
}
export default PopularDishes;