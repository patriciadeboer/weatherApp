import React from 'react';

export const CityWeather = (props) => {
  return (
    <div>
      <h1>{props.city}</h1>
      <img src={props.icon} alt={props.icon}/>
      <h2>{props.description}</h2>
      <p>Current Temp: {props.temperature}F </p>
      <p>Current Humidity: {props.humidity}% </p>
    </div>
  );
};

export default CityWeather;
