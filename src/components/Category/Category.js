import React from "react";
import './Category.css';
import Cat1 from '../../images/Cat1.png';
import Cat2 from '../../images/Cat2.png';
import Cat3 from '../../images/Cat3.png';
import Cat4 from '../../images/Cat4.png';
import Cat5 from '../../images/Cat5.png';
import Cat6 from '../../images/Cat6.png';

function Category() {
    return (
        <section className="category">
            <a href="#" className="box">
                <img src={Cat1} alt="" />
                    <h3>combo</h3>
            </a>
            <a href="#" className="box">
                <img src={Cat2} alt="" />
                    <h3>pizza</h3>
            </a>
            <a href="#" className="box">
                <img src={Cat3} alt="" />
                    <h3>burger</h3>
            </a>
            <a href="#" className="box">
                <img src={Cat4} alt="" />
                    <h3>chicken</h3>
            </a>
            <a href="#" className="box">
                <img src={Cat5} alt="" />
                    <h3>dinner</h3>
            </a>
            <a href="#" className="box">
                <img src={Cat6} alt="" />
                    <h3>coffee</h3>
            </a>
        </section>
    );

}
export default Category;