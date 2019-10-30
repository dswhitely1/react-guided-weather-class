import React, { Component } from 'react'
import WeatherCard from './weather/WeatherCard';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            alerts : []
        }
    }
    componentDidMount() {
        axios.get('https://api.weather.gov/alerts?limit=18').then(res => {
            this.setState({alerts: res.data.features})
        }).catch(err => console.log(err.response))
    }
    render() {
        console.log(this.state);
        return (
            <div>
               {this.state.alerts.map(alert => <WeatherCard key={alert.id} alert={alert}/>)}
            </div>
        )
    }
}


export default App;