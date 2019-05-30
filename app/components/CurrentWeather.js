import React, { Component } from 'react';
import axios from 'axios'
require('../../secrets')

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
      description: undefined,
      icon: undefined
    };
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]:evt.target.value,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      icon:undefined
    })
  }

  async handleSubmit(evt){
    evt.preventDefault()
    try{
      const {data}= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=${process.env.WEATHERID}&units=imperial`)
      console.log('handleSubmit data:', data)
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`

      })
    }catch(error){
      next(error)
    }
  }

  async componentDidMount(){
    try{
      const {data}= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=${process.env.WEATHERID}&units=imperial`)
      console.log(data)
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
      })
    }catch(error){
      next (error)
    }
  }


  render() {
    return <div>
      <CitySearch handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <CityWeather {...this.state}/>
    </div>;
  }
}

export default CurrentWeather;
