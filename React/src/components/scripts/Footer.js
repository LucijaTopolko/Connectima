import React from 'react'

import PropTypes from 'prop-types'

import '../styles/Footer.css'

const Footer = (props) => {
    return (
        <footer className={`footer-footer`}>
            <img
                alt={props.imageAlt3}
                src={props.imageSrc3}
                className="footer-image"
            />
            <span className="footer-text">{props.text}</span>
            <div className="footer-container">
                <h3 className="footer-text1">{props.heading}</h3>
                <div className="footer-container1">
                    <a
                        href={props.linkText}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer-link"
                    >
                        {props.text1}
                    </a>
                    <a
                        href={props.linkText1}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer-link"
                    >
                        {props.text2}
                    </a>
                    <a
                        href={props.linkText2}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer-link"
                    >
                        {props.text3}
                    </a>
                    <a
                        href={props.linkText3}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer-link"
                    >
                        {props.text4}
                    </a>
                </div>
            </div>
        </footer>
    )
}

Footer.defaultProps = {
    text1: 'FAQ',
    linkText: '/faq',
    text2: 'Customer Support',
    imageAlt3: 'image',
    text3: 'User Guide',
    heading: 'Help',
    text4: 'Contact Us',
    linkText1: '/customer-support',
    linkText2: '/user-guide',
    imageSrc3: '/connectima-200h.png',
    linkText3: '/contact-us',
    text: '© Connectima, All Rights Reserved.',
    imageAlt2: 'image',
    imageAlt: 'logo',
}

Footer.propTypes = {
    text2: PropTypes.string,
    linkText: PropTypes.string,
    text4: PropTypes.string,
    imageAlt3: PropTypes.string,
    text1: PropTypes.string,
    heading: PropTypes.string,
    text3: PropTypes.string,
    linkText1: PropTypes.string,
    linkText2: PropTypes.string,
    imageSrc3: PropTypes.string,
    linkText3: PropTypes.string,
    rootClassName: PropTypes.string,
    imageAlt1: PropTypes.string,
    text: PropTypes.string,
    imageSrc2: PropTypes.string,
    imageSrc1: PropTypes.string,
    imageAlt2: PropTypes.string,
    imageAlt: PropTypes.string,
    imageSrc: PropTypes.string,
}

export default Footer
