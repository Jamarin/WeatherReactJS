import React, { Component } from 'react'

import { WeatherItem } from './weatherItem'

const APP_ID = process.env.REACT_APP_WEATHER_APP_ID;

export class WeatherFetcher extends Component {

    state = {
        location: '',
        weather: {},
        loading: true
    }

    _handleChange = (e) => {
        this.setState({ location: e.target.value, loading: true })
    }

    _isWeatherSaved = () => {
        let weather = localStorage.getItem(this.state.location)
        if(weather !== null) return true
        return false
    }

    _fetchWeather = (e) => {
        e.preventDefault()
        const { location } = this.state
        if(this._isWeatherSaved()) {
            this.setState({ weather: JSON.parse(localStorage.getItem(location)), loading: false })
        } else {
            console.log('I need to fetch again :(')
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location},es&units=metric&appid=${APP_ID}`)
            .then(res => res.json())
            .then(results => {
                console.log(results)
                localStorage.setItem(location, JSON.stringify(results))
                this.setState({ weather: results, loading: false })
            })
        }
    }

    render () {
        return (
            <div>
                <form className="SearchForm" onSubmit={this._fetchWeather}>
                    <label className="sr-only SearchForm-item" htmlFor="location">Location</label>
                    <input type="text" className="form-control mb-2 mr-sm-2 SearchForm-item" id="location" placeholder="Location to search..." onChange={this._handleChange} />
                    <button type="submit" className="btn btn-primary SearchForm-button">Search</button>
                </form>
                <br />
                {this.state.loading ?
                    <p>Loading...</p>
                : 
                    <div className="card-columns">
                        {this.state.weather.list.map((weather, idx) => {
                            return <WeatherItem key={idx} weather={weather}></WeatherItem>
                        })}

                    </div>
                }
            </div>
        )
    }
}