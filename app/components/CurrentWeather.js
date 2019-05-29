import React, { Component } from 'react';
import axios from 'axios'

import CityWeather from './CityWeather'
import CitySearch from './CitySearch'

export class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {
      city: "Palatine",
      country: "US",
      temperature: undefined,
      humidity: undefined,
      description: undefined
    };
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]:evt.target.value
    })
  }

  async handleSubmit(evt){
    evt.preventDefault()
    this.setState({
      [evt.target.name]:evt.target.value
    })
    try{
      const {data}= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=fb350d657712286c5b79c2dfb9e5333c&units=imperial`)
      console.log('handleSubmit data:', data)
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description
      })
    }catch(error){
      next(error)
    }
  }

  async componentDidMount(){
    try{
      const {data}= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=fb350d657712286c5b79c2dfb9e5333c&units=imperial`)
      console.log(data)
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description
      })
    }catch(error){
      next (error)
    }
  }


  render() {
    return <div>
      <CityWeather {...this.state}/>
      <CitySearch handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    </div>;
  }
}

export default CurrentWeather;
