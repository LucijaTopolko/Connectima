import React from "react";
import '../styles/Footer.css';
import logo from '../connectima.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-columns'>
                    <div className='footer-logo'>
                        <img src={logo} alt={"connectima."}/>
                    </div>
                    <div className='empty'></div>
                    <div className='empty'></div>
                    <div className='footer-links'>
                        <a>FAQ</a>
                        <a>Customer Support</a>
                        <a>User Guide</a>
                        <a>Contact Us</a>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <hr />
                    <p>Copyright @2024 - All rights reserved</p>
                </div>
            </div>
        </div>
    );
};
export default Footer;
