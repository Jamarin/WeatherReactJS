import React, { Component } from 'react'
import { WeatherIcon } from './weatherIcon'

const moment = require('moment')

export class WeatherItem extends Component {

    state = {
        date: 0,
        name: '',
        temp: 0,
        pressure: 0,
        humidity: 0,
        temp_min: 0,
        temp_max: 0,
        wind_speed: 0.0,
        cloud: 0,
        sunrise: 0,
        sunset: 0,
        weather_main: '',
        weather_description: '',
        weather_icon: ''
    }

    constructor(props) {
        super(props)
        props = {
            weather: {},
        }
    }

    componentDidMount () {
        moment.locale("es")

        const { weather } = this.props
        this.setState({
            date: weather.dt,
            name: weather.name,
            temp: weather.main.temp,
            pressure: weather.main.pressure,
            humidity: weather.main.humidity,
            temp_min: weather.main.temp_min,
            temp_max: weather.main.temp_max,
            wind_speed: weather.wind.speed,
            cloud: weather.clouds.all,
            sunrise: weather.sys.sunrise,
            sunset: weather.sys.sunset,
            weather_main: weather.weather[0].main,
            weather_description: weather.weather[0].description,
            weather_icon: weather.weather[0].icon
        })
    }

    render () {

        const { date, name, temp, temp_min, temp_max, weather_icon, weather_main } = this.state

        let cardStyle = {
            width: '20rem'
        }

        let momentDate = moment.unix(this.props.weather.dt)
        momentDate = momentDate.format('DD/MM/YYYY - hh:mm:ss a')

        //<WeatherIcon style={{fontSize: 50}} icon="wi-day-cloudy"></WeatherIcon>

        return (
            <div className="card text-center" style={cardStyle}>
                <WeatherIcon icon={ weather_icon } description={ weather_main }></WeatherIcon>
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{ Math.round(temp) }º</h6>
                    <p className="card-text">Max temp: { Math.round(temp_max) }º | Min temp: { Math.round(temp_min) }º</p>
                    <p className="card-text">{ momentDate } </p>
                </div>
            </div>
        )
    }
}