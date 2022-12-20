import React from "react";
import "./App.css";
import IncomingWeather from "./components/IncomingWeather";
import Search from "./components/Search";
import Middle from "./components/WeatherNow";

function App() {
  return (
    <body className="app">
      <header>
        <Search />
      </header >
      <div>
        <Middle />
      </div>
      <footer>
        <IncomingWeather />
      </footer>
    </body>
  );

}

export default App;