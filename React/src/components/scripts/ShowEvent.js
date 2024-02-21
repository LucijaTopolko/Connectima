import React, { useState } from 'react';
import '../styles/ShowEvent.css';
import photo from './img.png'
import Header from "./Header";
import Footer from "./Footer";

import Heart from "react-animated-heart";

const ShowEvent = () => {
    const [isClick, setClick] = useState(false);
    return (
        <div className='showEvent'>
            <Header />
            <div className="event-container">
                <div className="event-details">
                    <div className="event-info">
                        <p className="event-time-place">February 21, 2024, 7:00 PM | Venue Name, City</p>
                        <h1 className="event-name">Event Name</h1>
                        <div className="heart">
                            <button className="buy-ticket-button">Buy Ticket</button>
                            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                        </div>
                    </div>
                    <img className='event-photo' src={photo} alt="Event Photo" />

                </div>
                <div className="event-description">
                    <h1 className="section-title">Time & Location</h1>
                    <p className="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <h1 className="section-title">About the Event</h1>
                    <p className="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <h1 className="section-title">Organiser</h1>
                    <p className="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default ShowEvent;
