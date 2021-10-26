import React from 'react';
import {FaCalendar} from 'react-icons/fa';
import './Blogs.css';
import Blog1 from '../../images/Blogs/Blog1.jpg';
import Blog2 from '../../images/Blogs/Blog2.jpg';
import Blog3 from '../../images/Blogs/Blog3.jpg';

function Blogs(){
    return (
        <section className="blogs" id="blogs">
            <div className="heading">
                <span>our blogs</span>
                <h3>our daily stories</h3>
            </div>
            <div className="box-container">
                <div className="box">
                    <div className="image">
                        <h3><FaCalendar /> 21st may, 2021 </h3>
                        <img src={Blog1} alt="" />
                    </div>
                    <div className="content">
                        <div className="tags">
                            <a href="#"> <i className="fas fa-tag"></i> food / </a>
                            <a href="#"> <i className="fas fa-tag"></i> burger / </a>
                            <a href="#"> <i className="fas fa-tag"></i> pizza </a>
                        </div>
                        <h3>blog title goes here...</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <h3><FaCalendar /> 21st may, 2021 </h3>
                        <img src={Blog2} alt="" />
                    </div>
                    <div className="content">
                        <div className="tags">
                            <a href="#"> <i className="fas fa-tag"></i> food / </a>
                            <a href="#"> <i className="fas fa-tag"></i> burger / </a>
                            <a href="#"> <i className="fas fa-tag"></i> pizza </a>
                        </div>
                        <h3>blog title goes here...</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <h3><FaCalendar /> 21st may, 2021 </h3>
                        <img src={Blog3} alt="" />
                    </div>
                    <div className="content">
                        <div className="tags">
                            <a href="#"> <i className="fas fa-tag"></i> food / </a>
                            <a href="#"> <i className="fas fa-tag"></i> burger / </a>
                            <a href="#"> <i className="fas fa-tag"></i> pizza </a>
                        </div>
                        <h3>blog title goes here...</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Blogs;