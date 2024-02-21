import React, {useEffect} from 'react';

import Header from './Header.js'
import Event from './Event.js'
import Footer from './Footer.js'
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const accessToken = sessionStorage.getItem('accessToken');

  useEffect(() => {
        if (accessToken == null) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="home-container">
            <Header rootClassName="header-root-class-name2"></Header>
            <div className="home-container1">
                <div className="home-container2">
                    <div className="home-container3"></div>
                </div>
                <h1 className="home-text">Connectima: Gathering events in one click</h1>
                <Event
                    id={1}
                    date={"February 19, 2024"}
                    photo={"profilePhoto.png"}
                    city={"New York"}
                    location={"Central Park"}
                    name={"Central Park Music Festival"}
                ></Event>
            </div>
            <Footer rootClassName="footer-root-class-name6"></Footer>
        </div>
    )
}

export default Home;