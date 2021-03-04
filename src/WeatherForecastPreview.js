import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let maxTemperature = Math.round(props.data.main.temp);
    let minTemperature = Math.round(props.data.main.temp_min);

    return `↑${maxTemperature}°F ↓${minTemperature}°F`;
  }

  return (
    <div className="forecast">
      {hours()}
      <WeatherIcon className="forecastIcon" code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
