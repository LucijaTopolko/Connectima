import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import '../styles/Event.css'

const Event = ({id, date, photo, city, location, name}) => {
    const formattedDate = format(new Date(date), "dd. MM. yyyy  HH:mm");


    const openEvent = (id) => {
        window.location.href = `/event_${id}`;
    };

    return (
        <div className="event"  onClick={() => openEvent(id)}>
            <div className="hovered">
                <p>{formattedDate}</p>
                {(
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                )}
            </div>
            <div>
                {photo && <img src={photo} alt={name} />}
            </div>
            <div>
                <span>{location + ', ' + city}</span>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Event;


