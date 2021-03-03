import React from "react";

export default function WeatherForecast() {
  return (
    <div className="forecast">
      <span>
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
  );
}
