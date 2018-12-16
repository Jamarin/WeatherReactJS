import React, { Component } from 'react'

export class WeatherIcon extends Component {
    render () {
        return <i className={"wi "+this.props.icon}></i>
    }
}