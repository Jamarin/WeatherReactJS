import React, { Component } from 'react'

import { WeatherFetcher } from '../components/weatherFetcher'

export class Home extends Component {
    render () {
        return <WeatherFetcher></WeatherFetcher>
    }
}