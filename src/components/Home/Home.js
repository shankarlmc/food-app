import React from "react";
import HomeImage from '../../images/HomeImage.png';
import HomeParallaxImage from '../../images/HomeParallaxImage.png';
import './Home.css';

function Home(){

    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);
    const [isMoved, setIsMoved] = React.useState(false);

    const handleImageMove = (e) => {
        setX((window.innerWidth - e.pageX * 2) / 90);
        setY((window.innerHeight - e.pageY * 2) / 90);
        setIsMoved(true);
    }
    const handleMouseLeave = () => {
        setIsMoved(false)
    }

    return (
        <section className="home" id="home" onMouseMove={handleImageMove} onMouseLeave={handleMouseLeave}>
            <div className="content">
                <span>welcome foodies</span>
                <h3>different spices for the different tastes 😋</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde dolores temporibus hic quam
                    debitis tenetur harum nemo.</p>
                <a href="#" className="btn">order now</a>
            </div>
            <div className="image">
                <img src={HomeImage} alt="home" className="home-img" />
                <img src={HomeParallaxImage} alt="parallax"
                     style={{transform: isMoved ? `translateX(${x}px) translateY(${y}px)` : `translateX(0px) translateY(0px)`}}
                     className="home-parallax-img" />
            </div>
        </section>
    );
}
export default Home;