import React from 'react'

import PropTypes from 'prop-types'

import '../styles/Search.css'

const Search = (props) => {
    return (
        <div className={`search-container ${props.rootClassName} `}>
            <div className="search-container1">
                <input
                    type="text"
                    placeholder={props.textinputPlaceholder}
                    className="search-textinput input"
                />
                <svg viewBox="0 0 1024 1024" className="search-icon">
                    <path
                        d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"
                        className=""
                    ></path>
                </svg>
            </div>
        </div>
    )
}

Search.defaultProps = {
    rootClassName: '',
    textinputPlaceholder: 'placeholder',
}

Search.propTypes = {
    rootClassName: PropTypes.string,
    textinputPlaceholder: PropTypes.string,
}

export default Search
