import React from 'react'

const WeatherCard = ({alert: {properties: {event, headline, instruction, description, severity, certainty, urgency}}}) => {
    return (
        <div>
            <h1>{event}</h1>
            <h3>{headline}</h3>
            <h4>{`This is very ${urgency}`}</h4>
            <p>{description}</p>
            <p>{instruction}</p>
        </div>
    )
}

export default WeatherCard
