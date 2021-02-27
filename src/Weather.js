import React, { useState } from "react";
import axios from "axios";

import FormatDate from "./FormatDate";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    setweatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.main.name,
      icon: "🌦",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="SearchEngine">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="TYPE A CITY..."
                autoComplete="off"
                autoFocus="on"
                className="form-control"
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                id="search-button"
                className="form-control btn btn-primary"
              />
            </div>
          </div>
        </form>

        <div className="TimeDate">
          <FormatDate date={weatherData.date} />
        </div>

        <h1> {weatherData.city} </h1>

        <div className="WeatherIcon">
          <i className="icon">{weatherData.icon}</i>
        </div>

        <ul>
          <div className="row">
            <div className="col-4 description text-capitalize">
              {weatherData.description}
            </div>

            <div className="col-4 humidity description">
              Humidity: {weatherData.humidity}%
            </div>

            <div className="col-4 wind description">
              Wind: {Math.round(weatherData.wind)} mph
            </div>
          </div>
        </ul>

        <div className="container">
          <div className="row">
            <div className="col-6 temperature description">
              <span className="degrees">
                {" "}
                {Math.round(weatherData.temperature)}{" "}
              </span>
              <a href="https://yjm1h.csb.app/" className="celsius units">
                °C |
              </a>

              <a href="https://yjm1h.csb.app/" className="farenheit units">
                {" "}
                °F
              </a>
              <br />
              <span className="TruFeel">
                TruFeel {Math.round(weatherData.feelsLike)}°F{" "}
              </span>
            </div>

            <div className="col-6">
              <span className="forecast">
                01:00 <i className="fas fa-cloud-sun-rain icon"></i> ↑55 ↓45
              </span>
              <br />
              <span className="forecast">
                04:00 <i className="fas fa-cloud-sun-rain icon"></i> ↑32 ↓22
              </span>
              <br />
              <span className="forecast">
                07:00 <i className="fas fa-cloud-sun-rain icon"></i> ↑71 ↓65
              </span>
              <br />
              <span className="forecast">
                10:00 <i className="fas fa-cloud-sun-rain icon"></i> ↑60 ↓58
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "41abd775b8901ed20c768543cad4ede2";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
