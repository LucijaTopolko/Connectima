import React from 'react'

import PropTypes from 'prop-types'

import '../styles/NavigationLinks.css'

const NavigationLinks = (props) => {
    return (
        <nav className={`navigation-links-nav ${props.rootClassName} `}>
            <a href="/explore"><span className="navigation-links-text">{props.text}</span></a>
            <a href="/favorites"><span className="navigation-links-text1">{props.text1}</span></a>
            <a href="/inbox"><span className="navigation-links-text2">{props.text2}</span></a>
            <a href="/create-event"><span className="navigation-links-text3">{props.text3}</span></a>
        </nav>
    )
}

NavigationLinks.defaultProps = {
    rootClassName: '',
    text: 'Explore',
    text3: 'Create event',
    text1: 'Favorites',
    text2: 'Inbox',
}

NavigationLinks.propTypes = {
    rootClassName: PropTypes.string,
    text: PropTypes.string,
    text3: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
}

export default NavigationLinks
