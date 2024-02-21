import React from 'react';
import '../styles/ContactUs.css';
import Header from "./Header";
import Footer from "./Footer";

const ContactUs = () => {
    return (
        <div className="contactus">
            <Header/>
            <h1>CONTACT US</h1>
            <div className="contact-us-container">

                <div className="contact-info">
                    <div className="info-table">
                        <div className="info-row">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAYZJREFUWEft1u1twkAMBmAzCXSS0k1gEtpJYBO6SbtJm1eKkWXsO59NEEKclD/JfTzxXeys6MHa6sE89JSgDREd50jviei3EvVqhID5EQBgPiqoCkhj2FVCZUFWZADCfbQ0KgOyMHx2zlXUKMjDfM+RwfMSagTUw/AZKqGioCimjIqARjElVA+UxaRRLVAVk0J5oFthhlEWyMrAKAf8aWdLVajMaJBXDiz4bk6CgDJ2O99DpuZLvsCfepurjK4XQqHk9C/Hyn5c3bE4t68pIb5PMHkPSF39NYjLzBtPlAHhVwPRiTSgsN3chkF4e17sICaScGvSFs4bi6iineTvSuuzlwvLft62Wiickct2EJE352VsBvQ5TSyj14oOooD+1paZa2dAmDyCwlbgUMu2SIR4gRbKwmDcoiAvUh7mLiCNamHuBmLU2jgz+sAvvmWtL8x69gL1IlaK0EhG7kH0c53BQ5k6kvxGIdxfZ/AQCJ1Q2fkfJ7u4Hudi0LH3k38rRHieF6gXqn8gqoIluclVcwAAAABJRU5ErkJggg==" alt=""/>
                            <span className="info-label">Address:</span>
                            <span className="info-value">Unska 3, 10000 Zagreb</span>
                        </div>
                        <div className="info-row">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAXtJREFUWEftl90NwjAMhN1NYBOYBJgEmASYBDaBUeCkWqpS/yU4qA9Eqnhoib/67Is70MLWsDAe+gN5ikQztCKil7dZxn0PaENE9xHm9gl4yghq7WEB7YnoUvz53BtKA0ImjsKbQLaumZKApMxM2QB1IKJHD/kkIC07P4FqBQIcMrXN7r4WycpMrTOlk4C41aNxAJTmURIQTPAZpEFhQ7a0pbU9zBCZslY6DILV+hADdoGxgKw66gZjAaGOIBt+y4Wa6WKKFhDuaY59HZ06rZCnG1mHq9ZtNUdH9djijR9algDlGSJ3apWje0B4Q4wgkgVY0pW2EYbygCCvZZRSIM3DQlJHgKwC50MWXYc5CTOUZajuPBUFQuDIWBLpPBOqBigTCnuJ43AtUCaUWFMtQFzompNHZONnZvFbgRgKPiV9DESgxCPoGyAOClsA2E45+yQ49TzMAJqCAY7BtPY3v+0ygcpMAI4vlhiFDIdXV0+gSB3NnvkDeWlbXIbenwBNJfLpLHUAAAAASUVORK5CYII=" alt=""/>
                            <span className="info-label">Get in touch:</span>
                            <span className="info-value">091 133 7096&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lucetopolko@gmail.com</span>
                        </div>
                        <div className="info-row">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAgVJREFUWEftmI1NAzEMRt1NYBJgEmASYBLoJMAksAn0oTNyXcd2TgVViEinFi6XPH/+ybkbObGxOTEe+TNAZyJyIyIXIsJ3rvdFbT65tiLyMuuBWYXuReRuYhMF47nW6AJdisjjokRrYTepDdYBilSxLlEX4TYGn9c7d2GE/k/5HnZfUrUqoOdlYV2wbekCQ5wBZ8GeROR2JHMG5JUhQK9W+EsTwMbeUKkREHKjjo7UqgZkBIVKrLs3RkBvRuZKGeC5GMwdpTpQqIQbGbj/vAPEA2SUjirOrGuroAUK5TWmDuZHm1l1QlmdVTNAPGoNPlDJA82qwwazQKiDB9TNJMq3mz0QE9XH3UCeBUqN8EC27nTctUYhnrFZvJc0HsjGDxmgB2aW2WsUwm3sdZBtHuhjIrt0qgXquvlHgXwiVKmvhoTGH8NlPo74u4JqK2SDei8dsyBa7vmzL4OyqqZBvSYeLKuHGhk1LC/eZTYdw7NmQqmsbNhsTgsj+9lg69Yiz2nfsf299DSIzrL0rGkoVE1Jz8oIyJ/I3dpSgXDfJk379cOfyJ007sDYQGZ+GPC/8QrrlUkNnHn50nOHBrDbZ0UdS/oGWgFFVVjBWBi4qA2ifEQNZVXB2739MRpFSkjZWncU0oCNOocqmGf6uK+1ZoDs5tWPDa9FBzI0ZC1Qpczq+/9AlXSf+xWTJXkSZ60AAAAASUVORK5CYII=" alt=""/>
                            <span className="info-label">Working Hours:</span>
                            <span className="info-value" colSpan="2">Mon-Fri: 9am-5pm</span>
                        </div>
                    </div>
                </div>

                <div className="map-section">
                    <iframe
                        title="Google Map"
                        className="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.0104083286316!2d15.976724115479385!3d45.81215977910697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765dd6cbbf74f7b%3A0xd76f47bbfd5f3c87!2sUnska%203%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1646777425887!5m2!1sen!2shr"
                        width="600"
                        height="450"
                        allowFullScreen=""
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
