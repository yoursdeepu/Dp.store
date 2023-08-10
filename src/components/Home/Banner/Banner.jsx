import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Nura v8</h1>
                    <p>
                    Urbanista Los Angeles Solar Powered Active Noise Cancelling Headphones 
                    with Infinite Playtime, Powerfoyle Self Charging Wireless Over Ear Bluetooth
                     6.0 Earphones, On Ear Detection, Midnight Black.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" alt="bg" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
