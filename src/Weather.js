import React, { useState } from "react";
import axios from "axios";

export default function Weather(){
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({});

function showTemp(response){
  console.log(response.data)
setWeather({
  city: response.data.name,
  temperature: response.data.main.temp,
  humidity: response.data.main.humidity,
  icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  description: response.data.weather[0].description,
});
}

function handleSearch(event){
event.preventDefault();
let apiKey ="dfb7d1f03e3eb9184605492c12826c7d";
let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(url).then(showTemp);
}

function updateCity(event){
  setCity(event.target.value)
}

return (
  <div>
    <form className="search-form" onSubmit={handleSearch}>
      <input type="search" onChange={updateCity} size="35" placeholder="how's the weather in..." />
      <input type="submit" value="Search" />
    </form>
    <h3>Currently weather for {city}</h3>
    <ul>
      <img src={weather.icon} alt={weather.description} />
      <li>Temperature: {Math.round(weather.temperature)}°C</li>
      <li className="description">{weather.description}</li>
      <li>Humidity: {weather.humidity}%</li>
    </ul>
  </div>
); 

}