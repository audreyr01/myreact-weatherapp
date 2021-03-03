import React, { useState } from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setforecast] = useState(null);

  function handleForecastResponse(response) {
    console.log(response.data);
    setforecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        Forecast
        <br />
        <span>
          {new Date(forecast.list[0].dt * 1000).getHours()}:00
          <WeatherIcon
            className="forecastIcon"
            code={forecast.list[0].weather[0].icon}
          />
          ↑{Math.round(forecast.list[0].main.temp)}°F ↓
          {Math.round(forecast.list[0].main.temp_min)}°F
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
    );
  } else {
    let apiKey = "41abd775b8901ed20c768543cad4ede2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
