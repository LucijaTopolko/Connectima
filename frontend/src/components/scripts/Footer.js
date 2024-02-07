import React from "react";
import '../styles/Footer.css';
import logo from '../connectima.png';

const Footer = () => {

    const handleClick = () => {
        window.location.href = "/";
    };

    return (
            <footer className='footer'>
                <div className='footer-columns'>
                    <div className='el footer-logo'>
                        <img src={logo} alt="connectima." onClick={handleClick}/>
                    </div>
                    <div className='el empty'></div>
                    <div className='el empty'></div>
                    <div className='el footer-links'>
                        <a href='/faq'>FAQ</a>
                        <a href='/support'>Customer Support</a>
                        <a href='/guide'>User Guide</a>
                        <a href='/contact'>Contact Us</a>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <hr />
                    <p>©2024 - All rights reserved</p>
                </div>
            </footer>
    );
};
export default Footer;
