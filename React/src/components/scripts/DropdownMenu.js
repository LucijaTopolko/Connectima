import React, { useState } from 'react';
import '../styles/DropdownMenu.css';
import logo from './profilePhoto.png';

const DropdownMenu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const profilePhoto = localStorage.getItem('profilePhoto');

    return (
        <div className="dropdown-container" onMouseLeave={() => setIsDropdownOpen(false)}>
            <img
                alt="Your Profile"
                src={logo}
                className="header-image"
                onClick={toggleDropdown}
            />
            {isDropdownOpen && (
                <div className="dropdown-menu" onMouseEnter={() => setIsDropdownOpen(true)}>
                    <ul>
                        <a href="/my-profile"><li>My Profile</li></a>
                        <a href="/logout"><li>Logout</li></a>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
