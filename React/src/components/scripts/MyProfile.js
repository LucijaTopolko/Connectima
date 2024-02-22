import React from 'react';
import '../styles/MyProfile.css';
import Header from "./Header";
import Footer from "./Footer";

const MyProfile = () => {

    const accessToken = sessionStorage.getItem('accessToken');
    const profilePhoto = sessionStorage.getItem('profilePhoto');
    const typeOfUser = sessionStorage.getItem('typeOfUser');

    return (
        <div className="myprofile">
            <Header/>
            <div className="myprofile-container">
                <p>{accessToken}</p>
                <p>{typeOfUser}</p>
                <img src={profilePhoto} alt={"profile photo"}/>
            </div>
            <Footer />
        </div>
    );
};

export default MyProfile;
