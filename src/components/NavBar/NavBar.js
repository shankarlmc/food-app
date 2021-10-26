import React, {useState, useEffect} from "react";
import { FaBars, FaSearch, FaUserAlt,FaCartPlus, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-scroll';
import {useHistory} from "react-router-dom";
import './NavBar.css'
import Search from "../Search/Search";
import Cart from "../Cart/Cart";


function NavBar(){
    // eslint-disable-next-line
    const [scrollNav, setScrollNav] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isActive, setActive] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
            setActive(false);
            setIsSearchOpen(false);
            setIsCartOpen(false);
        } else {
            setScrollNav(false);
        }
    }

    const history = useHistory();

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    });

    const handleMobileMenu = () => {
        setActive(!isActive);
        setIsCartOpen(false);
        setIsSearchOpen(false);
    };

    const handleLogin = () => {
        history.push('/login');
    }
    const handleSearchForm = () => {
        setActive(false);
        setIsCartOpen(false);
        setIsSearchOpen(!isSearchOpen);
    }

    const handleCart = () => {
        setActive(false);
        setIsSearchOpen(false);
        setIsCartOpen(!isCartOpen);
    }

    return (
        <header className="header">
            <Link to="/" className="logo">
                <i className=""><FaUtensils /></i> food
            </Link>
            <nav className={isActive ? "navbar active" : "navbar"}>
                <Link
                    className="navbar-links" to="home"
                    activeClass="active"
                    smooth={true} duration={500} spy={true} exact='true' offset={-150}
                    onClick={handleMobileMenu}
                >Home</Link>
                <Link
                    className="navbar-links" to="about"
                    activeClass="active"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    onClick={handleMobileMenu}
                >About</Link>
                <Link
                    className="navbar-links" to="popular"
                    activeClass="active"
                    smooth={true} duration={500} spy={true} exact='true' offset={-75}
                    onClick={handleMobileMenu}
                >Popular</Link>
                <Link
                    className="navbar-links" to="offer"
                    activeClass="active"
                    smooth={true} duration={900} spy={true} exact='true' offset={-75}
                    onClick={handleMobileMenu}
                >Offer</Link>
                <Link
                    className="navbar-links" to="menu"
                    activeClass="active"
                    smooth={true} duration={900} spy={true} exact='true' offset={-75}
                    onClick={handleMobileMenu}
                >Menu</Link>
                <Link
                    className="navbar-links" to="order"
                    activeClass="active"
                    smooth={true} duration={500} spy={true} exact='true' offset={-75}
                    onClick={handleMobileMenu}
                >Order</Link>
                <Link
                    className="navbar-links" to="blogs"
                    activeClass="active"
                    smooth={true} duration={500} spy={true} exact='true' offset={-78}
                    onClick={handleMobileMenu}
                >Blogs</Link>
            </nav>
            <div className="icons">
                <span
                    className="left-nav-icons menu-btn"
                    onClick={handleMobileMenu}><FaBars />
                </span>
                <span className="left-nav-icons" onClick={handleSearchForm}><FaSearch /></span>
                <span className="left-nav-icons" onClick={handleLogin}><FaUserAlt /></span>
                <span className="left-nav-icons cart-icon" onClick={handleCart}><FaCartPlus />
                    {/*<span className="cart-item-counter">6</span>*/}
                </span>
            </div>
            {isSearchOpen && (
                <Search />
            )}
            {isCartOpen && (
                <Cart />
            )}
        </header>
    );
}

export default NavBar;