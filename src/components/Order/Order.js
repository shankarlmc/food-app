import React, {useState, useEffect} from 'react';
import './Order.css';
import OpeningHour from '../../images/icons/OpeningHour.png';
import ContactNumber from '../../images/icons/ContactNumber.png';
import Located from '../../images/icons/Located.png';

function Order(){
    const currentDateTime = new Date().toISOString();
    const [latitude, setLatitude] = useState(27.728102644287233);
    const [longitude, setLongitude] = useState(85.33128650471177);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [pickUpTime, setPickUpTime] = useState(currentDateTime.substring(0, (currentDateTime.indexOf("T")|0) + 6|0));

    const [isAllowLocation, setIsAllowLocation] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(loading);
    const mapImage = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=eng&z=14&amp&output=embed`;

    const handleGetUserLocation = () => {
        if (navigator.geolocation) {
            setLoading(true);
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    setLoading(false);
                },
                () => {
                    setIsAllowLocation(false);
                    alert("The Geolocation service was denied by you.please allow location access to perform this action.");
                }
            );

        } else {
            console.log("The Geolocation service failed.");
        }
    }

    useEffect(() => {
        if(isAllowLocation){
            handleGetUserLocation();
        }
    },[isAllowLocation]);


    return (

        <section className="order" id="order">

            <div className="heading">
                <span>order now</span>
                <h3>fastest home delivery</h3>
            </div>

            <div className="icons-container">

                <div className="icons">
                    <img src={OpeningHour} alt="opening-hour" />
                        <h3>7:00am to 10:30pm</h3>
                </div>

                <div className="icons">
                    <img src={ContactNumber} alt="contact-number" />
                        <h3>+061 435566</h3>
                </div>

                <div className="icons">
                    <img src={Located} alt="location" />
                    <h3>Newroad, Pokhara</h3>
                </div>

            </div>

            <form>
                <div className="flex">
                    <div className="inputBox">
                        <span>your name</span>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name.." name="customer-name" />
                    </div>
                    <div className="inputBox">
                        <span>pick up time</span>
                        <input type="datetime-local" name="pick-up-time" value={pickUpTime} onChange={(e)=>setPickUpTime(e.target.value)}/>
                    </div>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>your number</span>
                        <input type="number" value={contact} onChange={(e)=>setContact(e.target.value)} placeholder="Enter your number" name="contact-number" />
                    </div>
                    <div className="inputBox allow-location">
                        <input type="radio" id="allow-user-location" name="allow-location" onChange={(e)=>setIsAllowLocation(e.target.checked)} />
                        <label htmlFor="allow-user-location">{loading ? "Obtaining your location ..." : "Allow Location access."} </label>
                    </div>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <div className="selected-items">
                            {/*<h1>Selected Items will appear here.</h1>*/}
                            <div className="item">
                                <div className="item-image">
                                    <img src={OpeningHour} alt="cart-item"/>
                                </div>
                                <div className="item-name">French Fries</div>
                                <div className="delete-item">
                                    <svg className="chip-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="inputBox">
                        <iframe
                            className="map"
                            frameBorder="0"
                            scrolling="yes"
                            marginHeight="0"
                            scrollwheel="yes"
                            allowFullScreen="yes"
                            loading="lazy"
                            src={mapImage}
                        >
                        </iframe>
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn"
                    disabled={isAllowLocation ? false : true}

                >proceed to order</button>
                {/*<input type="submit" value="proceed to order" className="btn" />*/}

            </form>

        </section>
    );
}
export default Order;