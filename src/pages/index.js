import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home"
import Category from "../components/Category/Category";
import About from "../components/About/About";
import PopularDishes from "../components/PopularDishes/PopularDishes";
import Banner from "../components/Banner/Banner";
import Menu from "../components/Menu/Menu";
import Order from "../components/Order/Order";
import Blogs from "../components/Blogs/Blogs";
import Footer from "../components/Footer/Footer";

function MainPage() {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            <NavBar toggle={toggle}/>
            <Home />
            <Category />
            <About />
            <PopularDishes />
            <Banner />
            <Menu />
            <Order />
            <Blogs />
            <Footer />
        </React.Fragment>
    );
}

export default MainPage;
