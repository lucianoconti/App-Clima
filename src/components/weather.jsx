import axios from 'axios'
import React, { useState } from 'react';

const Weather = () => {

  const [city, setCity] = useState("Delhi")

  const getWeatherData = async(city,country) =>{
    await axios({
      method: 'GET',
      url:'https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}'
    }).then((res) =>{
      console.log(res.data);
    }).catch((err) =>{
      console.log(err)
    })
  }
  return (
    <div>
      <h1>hola</h1>
      <h1>{city}</h1>
    </div>
  )
}

export default Weather
