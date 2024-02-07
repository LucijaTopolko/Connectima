import React from "react";
import '../styles/Footer.css';
import logo from '../connectima.png';

const Footer = () => {
    return (
            <div className='footer'>
                <div className='footer-columns'>
                    <div className='el footer-logo'>
                        <img src={logo} alt={"connectima."}/>
                    </div>
                    <div className='el empty'></div>
                    <div className='el empty'></div>
                    <div className='el footer-links'>
                        <a>FAQ</a>
                        <a>Customer Support</a>
                        <a>User Guide</a>
                        <a>Contact Us</a>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <hr />
                    <p>©2024 - All rights reserved</p>
                </div>
            </div>
    );
};
export default Footer;
