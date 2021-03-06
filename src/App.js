import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="Border">
        <div className="App">
          <Weather defaultCity="Italy" />
        </div>
      </div>
      <footer>
        Coded by{" "}
        <a href="https://www.linkedin.com/in/robertsonmba" target="_blank">
          {" "}
          Audrey Robertson
        </a>{" "}
        | Open-sourced{" "}
        <a
          href="https://github.com/audreyr01/myreact-weatherapp"
          target="_blank"
        >
          GitHub{" "}
        </a>{" "}
      </footer>
    </div>
  );
}
