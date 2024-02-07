import React from "react";
import '../styles/Home.css'
import SearchBar from "./SearchBar";
import Footer from "./Footer";

const Home = () => {
    const accessToken = localStorage.getItem('accessToken');
    return(
        <div className='home-container'>
            <div className='search-container'>
                <SearchBar></SearchBar>
                <div className='test'></div>
            </div>

            <Footer />
        </div>
    );

}

export default Home;