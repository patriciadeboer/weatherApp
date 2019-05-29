import React from 'react'

export const CitySearch = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" onChange={props.handleChange} name="city" placeholder="Enter City"/>
      <input type="text" onChange={props.handleChange} name="country" placeholder="Enter Country"/>
      <button type="submit" >Select</button>
    </form>
  )
}

export default CitySearch
