import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CurrentWeather from './CurrentWeather';
import Navbar from './Navbar';

export class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>🌈 Welcome to Patricia's Weather Tracker ⛅</h1>
          <Navbar />
          <Route exact path="/" component={CurrentWeather} />
        </div>
      </Router>
    );
  }
}

export default Root;
