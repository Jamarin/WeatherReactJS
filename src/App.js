import React, { Component } from 'react';
import './App.css';

import { Home } from './pages/home'

class App extends Component {

  render () {
    return (
      <div className="App">
        <h1 className="App-Title">Weather Search</h1>
        <Home></Home>
      </div>
    )
  }
}

export default App;
