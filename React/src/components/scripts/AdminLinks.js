import React from 'react';
import PropTypes from "prop-types";

const AdminLinks = (props) => {
    return (
        <nav className={`navigation-links-nav ${props.rootClassName} `}>
            <a href="/users"><span className="navigation-links-text">{props.text}</span></a>
            <a href="/explore"><span className="navigation-links-text1">{props.text1}</span></a>
            <a href="/admin-inbox"><span className="navigation-links-text2">{props.text2}</span></a>
        </nav>
    )
}

AdminLinks.defaultProps = {
    rootClassName: '',
    text: 'Users',
    text1: 'Events',
    text2: 'Inbox',
}


export default AdminLinks;