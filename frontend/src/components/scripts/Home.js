import React from "react";
import '../styles/Home.css'
import SearchBar from "./SearchBar";
import searchBar from "./SearchBar";

const Home = () => {

    const accessToken = localStorage.getItem('accessToken');

    return(
        <div className='home-container'>
            <div className='search-container'>
                <SearchBar></SearchBar>
            </div>
        </div>
    );

}

export default Home;