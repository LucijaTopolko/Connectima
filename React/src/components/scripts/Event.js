import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import '../styles/Event.css'

const Event = (props) => {
    return (
        <div className={`event-container ${props.rootClassName} `}>
            <div className="event-container1">
                <img
                    alt={props.imageAlt1}
                    src={props.imageSrc1}
                    className="event-image"
                />
                <div className="event-container2">
                    <h1 className="event-text">{props.text1}</h1>
                    <span className="">{props.text2}</span>
                    <span className="">
            <DateTimePrimitive
                format="DD/MM/YYYY"
                date="Thu Feb 08 2024 18:27:25 GMT+0100 (Central European Standard Time)"
                className=""
            ></DateTimePrimitive>
          </span>
                </div>
                <div className="event-container3"></div>
                <div className="event-container4">
                    <div className="event-container5">
                        <svg viewBox="0 0 1024 1024" className="event-icon">
                            <path
                                d="M950.857 340.571c0-160.571-108.571-194.286-200-194.286-85.143 0-181.143 92-210.857 127.429-13.714 16.571-42.286 16.571-56 0-29.714-35.429-125.714-127.429-210.857-127.429-91.429 0-200 33.714-200 194.286 0 104.571 105.714 201.714 106.857 202.857l332 320 331.429-319.429c1.714-1.714 107.429-98.857 107.429-203.429zM1024 340.571c0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"
                                className=""
                            ></path>
                        </svg>
                        <span className="">{props.text5}</span>
                        <h3 className="event-text3">{props.text4}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

Event.defaultProps = {
    text3: 'Text',
    imageSrc1:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGV2ZW50fGVufDB8fHx8MTcwNzQxNjMyMXww&ixlib=rb-4.0.3&q=80&w=500',
    rootClassName: '',
    imageSrc:
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYwfHxldmVudHxlbnwwfHx8fDE3MDc0MTYzMjl8MA&ixlib=rb-4.0.3&w=200',
    text4: 'Text',
    text1: 'Text',
    imageAlt1: 'image',
    text2: 'Text',
    text5: 'Text',
    imageAlt: 'image',
    text: 'Hello World',
}

Event.propTypes = {
    text3: PropTypes.string,
    imageSrc1: PropTypes.string,
    rootClassName: PropTypes.string,
    imageSrc: PropTypes.string,
    text4: PropTypes.string,
    text1: PropTypes.string,
    imageAlt1: PropTypes.string,
    text2: PropTypes.string,
    text5: PropTypes.string,
    imageAlt: PropTypes.string,
    text: PropTypes.string,
}

export default Event
