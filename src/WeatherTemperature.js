import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showfahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="degrees"> {Math.round(props.fahrenheit)} </span>
        <a href="/" className="celsius units" onclick={showCelsius}>
          °C
        </a>
        <span className="fahrenheit units"> | °F</span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="degrees"> {Math.round(props.fahrenheit)} </span>
        <span className="celsius units">°C</span>
        <a href="/" className="fahrenheit units" onclick={showfahrenheit}>
          | °F
        </a>
      </div>
    );
  }
}
