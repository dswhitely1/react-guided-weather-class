import React, { Component } from 'react'
import { Accordion, Icon, Segment } from 'semantic-ui-react'
import WeatherCard from './WeatherCard';

export default class WeatherContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 }
    }
  

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    console.log(this.props);
    return (
      <Segment inverted>
        <Accordion inverted>
            {this.props.alerts.map((alert, i) => <WeatherCard key={alert.id} alert={alert} active={activeIndex === i} index={i} handleClick={this.handleClick}/>)}
        </Accordion>
      </Segment>
    )
  }
}
