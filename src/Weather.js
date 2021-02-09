import React from "react";
import "./Weather.css";

export default function Weather() {
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
        Tues Jan 26, 2021
        <br />
        3:33 pm
      </div>

      <h1> Italy</h1>

      <div className="WeatherIcon">
        <i className="fas fa-cloud-sun-rain"></i>
      </div>

      <ul>
        <li>
          <div className="row">
            <div className="col-4">
              <span className="humidity description">Humidity: 10%</span>
            </div>

            <div className="col-4">
              <span className="description">Light Rain</span>
            </div>

            <div className="col-4">
              <span className="wind description">Wind: 5mph</span>
            </div>
          </div>
        </li>
      </ul>

      <div className="container">
        <div className="row">
          <div className="col-6 Temperture">
            <span className="degrees">23 </span>
            <a href="https://yjm1h.csb.app/" className="celsius units">
              °C |
            </a>

            <a href="https://yjm1h.csb.app/" className="farenheit units">
              {" "}
              °F
            </a>
            <br />
            <span className="TruFeel">TruFeel 20°F </span>
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
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
