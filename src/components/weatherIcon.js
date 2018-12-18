import React, { Component } from 'react'

export class WeatherIcon extends Component {
    render () {
        //return <i className={"wi "+this.props.icon}></i>
        return <img 
            src={`http://openweathermap.org/img/w/${this.props.icon}.png`} 
            alt={ this.props.description }
            className="card-img-top WeatherIcon"/>
    }
}