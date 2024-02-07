import React from "react";
import '../styles/SearchBar.css'
import search from '../search.png';

const SearchBar = () => {

    return (
        <div className="searchbar">
            <div className="search-container">
                <span>Location</span>
                <input
                    type="text"
                    placeholder='Where are you going'
                    name="location"
                />
            </div>
            <div className="search-container">
                <span>Date</span>
                <input
                    type="text"
                    placeholder={'When are you going?'}
                />
            </div>
            <div className="search-container">
                <span>Type</span>
                <input
                    type="text"
                    placeholder={'What are you looking for?'}
                />
            </div>
            <button type="button">
               <img src={search} alt='search'/>
            </button>
        </div>
    );


}

export default SearchBar;