import React from 'react';
import {
    FaArrowRight,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaUtensils
} from 'react-icons/fa';
import PaymentImg from '../../images/PaymentImage.png';
import { Link } from 'react-scroll';
import './Footer.css';

function Footer(){
    return (
        <section className="footer" id="footer">
            <div className="box-container">
                <div className="box">
                    <h3><span><FaUtensils /></span> Food </h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, saepe.</p>
                    <div className="share">
                        <span className="share-icon"><FaFacebookF/></span>
                        <span className="share-icon"><FaTwitter/></span>
                        <span className="share-icon"><FaInstagram/></span>
                        <span className="share-icon"><FaLinkedin/></span>
                    </div>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#" className="links"><span className="link-item"><FaPhone /></span> 061 343-456 </a>
                    <a href="#" className="links"><span className="link-item"><FaPhone /></span> 061 234-789 </a>
                    <a href="#" className="links"> <span className="link-item"><FaEnvelope /></span> foodapp@gmail.com </a>
                    <a href="#" className="links"><span className="link-item"><FaMapMarkerAlt /></span>New Road, Pokhara </a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <Link
                        className="links"
                        to="about"
                        smooth={true} duration={500} spy={true} exact='true' offset={-150}
                    ><span className="link-item"> <FaArrowRight /></span> About </Link>
                    <Link
                        className="links"
                        to="popular"
                        smooth={true} duration={500} spy={true} exact='true' offset={-150}
                    ><span className="link-item"> <FaArrowRight /></span> Popular </Link>
                    <Link
                        className="links"
                        to="menu"
                        smooth={true} duration={500} spy={true} exact='true' offset={-150}
                    ><span className="link-item"> <FaArrowRight /></span> Menu </Link>
                    <Link
                        className="links"
                        to="order"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    ><span className="link-item"> <FaArrowRight /></span> Order </Link>
                    <Link
                        className="links"
                        to="blogs"
                        smooth={true} duration={500} spy={true} exact='true' offset={-120}
                    ><span className="link-item"> <FaArrowRight /></span> Blogs </Link>
                </div>

                <div className="box">
                    <h3>newsletter</h3>
                    <p>subscribe for latest updates</p>
                    <input type="email" placeholder="Your email..." className="email" />
                    <button type="submit" className="btn" >Subscribe</button>
                    <img src={PaymentImg} className="payment-img" alt="payment" />
                </div>
            </div>

            <div className="credit"> Developed By
                <span> Shankar Lamichhane</span> | all rights reserved!
            </div>
        </section>
    );
}
export default Footer;