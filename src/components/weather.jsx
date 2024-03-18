import axios from 'axios'
import React, { useState } from 'react';

const Weather = () => {

  const [city, setCity] = useState("Rosario");
  const [country, setCountry] = useState("AR");
  const getWeatherData = async(city,country) =>{
    await axios({
      method: 'GET',
      url:`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=85d978259d59a3e72dcf14251e348607`
    }).then((res) =>{
      console.log(res.data);
    }).catch((err) =>{
      console.log(err);
    })
  }
  return (
    <div  className="container">
    <h1>Aplicacion del Clima</h1>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)}  placeholder='Ciudad'/>
      <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Pais'  />
      <button onClick={() => getWeatherData(city,country)} className='btn btn-primary'>Obtener Clima</button>
    </div>

  )
}

export default Weather
