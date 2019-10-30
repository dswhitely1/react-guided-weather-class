import React from 'react'
import {Accordion, Icon} from 'semantic-ui-react';
import './weather.css'
const WeatherCard = ({alert: {properties: {event, headline, instruction, description, severity, urgency}}, active, index, handleClick}) => {
    return (
        <div>
            <Accordion.Title
            active={active}
            index={index}
            onClick={handleClick}
            style={severity === 'Moderate' ? {color: 'yellow'} : severity === 'Severe' ? {color: 'red'} : null}
          >
            <Icon name='dropdown' />
            {event}
          </Accordion.Title>
          <Accordion.Content active={active}>
          <h3>{headline}</h3>
            <h4>{`This is very ${urgency}`}</h4>
            <p>{description}</p>
            <p>{instruction}</p>
          </Accordion.Content>
        </div>
    )
}

export default WeatherCard
