import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./App.css"; 

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({});

  function showTemp(response) {
    console.log(response.data);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      feels: response.data.main.feels_like,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "dfb7d1f03e3eb9184605492c12826c7d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }


  return (
    <div className="Weather">
      <div>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="search"
            onChange={updateCity}
            size="35"
            placeholder="how's the weather in..."
          />
          <input type="submit" value="Search" />
        </form>
        <h3>{city}</h3>
        <ul>
          <li>
           
          </li>
          <li className="description">{weather.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <img src={weather.icon} alt={weather.description} />
              </div>
              <div className="float-left">
                <h3>{Math.round(weather.temperature)}°C</h3>
              </div>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind Speed: {weather.wind}km/h</li>
              <li>Feels like {Math.round(weather.feels)}°C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
