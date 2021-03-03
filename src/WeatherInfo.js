import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

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
            <WeatherForecast city={props.data.city} />
          </div>
        </div>
      </div>
    </div>
  );
}
