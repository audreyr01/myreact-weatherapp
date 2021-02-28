import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="TimeDate">
        <FormatDate date={props.data.date} />
      </div>

      <h1> {props.data.city} </h1>

      <div className="weatherIcon">
        <WeatherIcon code={props.data.icon} />
      </div>

      <ul>
        <div className="row">
          <div className="col-4 description text-capitalize">
            {props.data.description}
          </div>

          <div className="col-4 humidity description">
            Humidity: {props.data.humidity}%
          </div>

          <div className="col-4 wind description">
            Wind: {Math.round(props.data.wind)} mph
          </div>
        </div>
      </ul>

      <div className="container">
        <div className="row">
          <div className="col-6 temperature description">
            <WeatherTemperature fahrenheit={props.data.temperature} />
            <br />
            <span className="TruFeel">
              TruFeel {Math.round(props.data.feelsLike)}°F{" "}
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
}
