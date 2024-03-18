import axios from 'axios'
import React, { useState } from 'react';

const Weather = () => {

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [icon, setIcon] = useState("");
  const [mostrarComponente, setMostrarComponente] = useState(false);


  const apiResponse = async(lat,lon) =>{  await axios({
    method:'GET',
    url:`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=85d978259d59a3e72dcf14251e348607&lang=es`
  }).then((datosClima) =>{
  console.log(datosClima.data);
  setTemp(datosClima.data.main.temp -273.15)
  setMin(datosClima.data.main.temp_min - 278.15);
  setMax(datosClima.data.main.temp_max - 273.15);
  setDescripcion(datosClima.data.weather[0].description);
  setIcon(datosClima.data.weather[0].icon);
  setMostrarComponente(true);
    }
  ).catch((err) =>{
    console.log(err);
    }
  )
}
  const getWeatherData = async(city,country) =>{
    await axios({
      method: 'GET',
      url:`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=85d978259d59a3e72dcf14251e348607`
    }).then((res) =>{
      console.log(res.data);
      apiResponse(res.data[0].lat,res.data[0].lon);
    }).catch((err) =>{
      console.log(err);
    })
  }

  return (
    <div  className="container my-4">
    <h1>Aplicacion del Clima</h1>
      <input className='mx-1 p-1' type="text" value={city} onChange={(e) => setCity(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}  placeholder='Ciudad'/>
      <input className='mx-1 p-1' type="text" value={country} onChange={(e) => setCountry(e.target.value.toUpperCase())} placeholder='Pais'  />
      <button onClick={() => getWeatherData(city,country)} className='btn btn-primary'>Obtener Clima</button>
     <div className="data_container p-4 my-5">
     <h1>{city}, {country}</h1>
     <div className="my-2">
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icono-clima" />
     </div>
        {temp ? (<h1>{Math.floor(temp)}°C</h1>) : null}
        <h4 className="my-4">
          Min:<span>{Math.floor(min)}</span><span className="mx-3">|</span> Max:<span>{Math.floor(max)}</span>
        </h4>
        {descripcion ? (<h1>{descripcion.charAt(0).toUpperCase() + descripcion.slice(1)}</h1>) : null}
     </div>
    </div>

  );
};

export default Weather
