import React from 'react'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Payment from "../../assets/payments.png"
import "./Footer.scss";

const Footer = () => {
    return (<footer className='footer'>
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, rem quia.
                    Numquam impedit neque eos alias velit doloremque optio, libero labore
                    tempore nihil ipsam repellat molestiae dolore atque, suscipit nobis?
                </div>
            </div>
            <div className="col">
                <div className="title">Contect</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        Sector-12  Mp-nagar Bhopal, M.P, 462010
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">  Phone : +91 8770763728</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">E-mail : dpstore@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speaker</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theatre</div>
                <div className="text">Projectors</div>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & conditions</div>
                <div className="text">Contect Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">  
                DPSTORE 2023 CREATED BY DEEPESH SINGH TOMAR.

                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>);
};

export default Footer;
