import React, { Component } from 'react';
import './App.css';

import { Home } from './pages/home'

class App extends Component {

  state = {weather: {}, loading: true}

  componentDidMount () {
    
    console.log("ComponentDidMount")
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Santander,es&appid=6bb7df90e20ee7fb5b0e7dcee8c79de2')
    .then(res => res.json())
    .then(results => {
      this.setState({ weather: results, loading: false })
    })
  }

  render () {
    const weather = this.state
    let retornar = (this.state.loading) ? <p>Loading...</p> : <Home weather={ weather }></Home>
    return retornar
  }
}

export default App;
