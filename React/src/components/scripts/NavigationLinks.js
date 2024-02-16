import React from 'react'

import PropTypes from 'prop-types'

import '../styles/NavigationLinks.css'

const NavigationLinks = (props) => {
    return (
        <nav className={`navigation-links-nav ${props.rootClassName} `}>
            <span className="navigation-links-text">{props.text}</span>
            <span className="navigation-links-text1">{props.text1}</span>
            <span className="navigation-links-text2">{props.text2}</span>
            <span className="navigation-links-text3">{props.text3}</span>
        </nav>
    )
}

NavigationLinks.defaultProps = {
    rootClassName: '',
    text: 'Explore',
    text3: 'Create',
    text1: 'Favorites',
    text4: 'Blog',
    text2: 'Inbox',
}

NavigationLinks.propTypes = {
    rootClassName: PropTypes.string,
    text: PropTypes.string,
    text3: PropTypes.string,
    text1: PropTypes.string,
    text4: PropTypes.string,
    text2: PropTypes.string,
}

export default NavigationLinks
