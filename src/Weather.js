import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
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

        <WeatherInfo data={weatherData} />
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
