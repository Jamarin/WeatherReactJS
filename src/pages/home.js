import React, { Component } from 'react'
import { WeatherIcon } from '../components/weatherIcon'

export class Home extends Component {
    render () {
        const { weather } = this.props.weather
        console.log(weather)
        return (
            <div>
                <h1>{ weather.name }</h1>
                <h2>{ weather.coord.lat }, { weather.coord.lon }</h2>
                <WeatherIcon icon="wi-night-sleet"></WeatherIcon>
            </div>
        )
    }
}