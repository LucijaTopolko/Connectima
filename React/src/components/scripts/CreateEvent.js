import React, { useState } from 'react';
import '../styles/CreateEvent.css';
import Header from "./Header";
import Footer from "./Footer";
import {useNavigate} from "react-router-dom";

function CreateEvent() {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    const [startingTime, setStartingTime] = useState("");
    const [endingTime, setEndingTime] = useState("");
    const [ticketPrice, setTicketPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState([]);

    const accessToken = sessionStorage.getItem('accessToken');

    const navigate = useNavigate();
    const handleFileChange = (event) => {
        const selectedFile = event.target.files;
        setFile((prevFiles) => [...prevFiles, ...selectedFile]);
    };

    const handleAddEvent = async () => {
        try {
            const eventData = {
                name,
                type,
                city,
                location,
                startingTime,
                endingTime,
                ticketPrice,
                description
            };
            const response1 = await fetch('http://localhost:8080/event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': accessToken,
                },
                body: JSON.stringify(eventData),
            });
            if (!response1.ok) {
                console.log(response1);
            }
            navigate("/");
            /*for (const f of file) {
                const formData = new FormData();
                formData.append("file", f);

                const type = f.type.startsWith("image/") ? "image" : "video";

                const response2 = await fetch(`api/media/${type}?id=${id}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': accessToken,
                    },
                    body: formData,
                });
                if (!response2.ok) {
                    throw new Error("Error");
                }
                console.log(await response2.text());
            }*/
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='create'>
            <Header></Header>
            <div className="event-form">
                <h2>Create Event</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} required onChange={(e) => {
                        setName(e.target.value);
                    }}/>

                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type" value={type} required onChange={(e) => {
                        setType(e.target.value);
                    }}/>

                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" value={city} required onChange={(e) => {
                        setCity(e.target.value);
                    }}/>

                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" value={location} required onChange={(e) => {
                        setLocation(e.target.value);
                    }}/>

                    <label htmlFor="startingTime">Starting time:</label>
                    <input type="datetime-local" id="startingTime" name="startingTime" value={startingTime} required onChange={(e) => {
                        setStartingTime(e.target.value);
                    }}/>

                    <label htmlFor="endingTime">Ending time:</label>
                    <input type="datetime-local" id="endingTime" name="endingTime" value={endingTime} required onChange={(e) => {
                        setEndingTime(e.target.value);
                    }}/>

                    <label htmlFor="ticketPrice">Ticket price:</label>
                    <input type="number" step="0.01" id="ticketPrice" name="ticketPrice" value={ticketPrice} required onChange={(e) => {
                        setTicketPrice(e.target.value);
                    }}/>

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={description} required onChange={(e) => {
                        setDescription(e.target.value);
                    }}/>

                    <label className="dogadjanja-labele">Gallery:</label>
                    <input type="file" multiple accept="image/*,video/*" onChange={handleFileChange}/>

                    {
                        file.length > 0 && (
                            <div>
                                <p>Chosen files:</p>
                                <ul>
                                    {Array.from(file).map((file, index) => (
                                        <li key={index}>
                                            <button className="delete-button" onClick={(e) => { e.preventDefault();}}>x</button> {file.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        )
                    }

                    <button type="submit" className='event-form-button' onClick={handleAddEvent}>Create</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default CreateEvent;