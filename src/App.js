import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      Weather App
      <footer>
        Coded by
        <a href="https://www.linkedin.com/in/robertsonmba" target="_blank">
          {" "}
          Audrey Robertson{" "}
        </a>
        <br />
        Open Sourced on{" "}
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
