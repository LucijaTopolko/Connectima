import React from 'react'

import PropTypes from 'prop-types'

import Search from '../scripts/Search'
import NavigationLinks from '../scripts/NavigationLinks'
import '../styles/Header.css'
import DropdownMenu from "./DropdownMenu";

const Header = (props) => {

    const profilePhoto = sessionStorage.getItem('profilePhoto');

    return (
        <header
            data-role="Header"
            className={`header-header ${props.rootClassName} `}
        >
            <Search rootClassName="search-root-class-name" className=""></Search>
            <NavigationLinks
                rootClassName="rootClassName17"
                className=""
            ></NavigationLinks>
            <div className="header-container"></div>
            <DropdownMenu/>
        </header>
    )
}

Header.defaultProps = {
    imageAlt2: 'image',
    imageAlt1: 'image',
    imageAlt: 'logo',
    rootClassName: '',
}

Header.propTypes = {
    imageAlt2: PropTypes.string,
    imageSrc1: PropTypes.string,
    imageSrc2: PropTypes.string,
    imageSrc: PropTypes.string,
    imageAlt1: PropTypes.string,
    imageAlt: PropTypes.string,
    rootClassName: PropTypes.string,
}
export default Header