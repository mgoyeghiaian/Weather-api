import React from "react";
import getImages from "./getImages"

function IncomingWeather({ rem }) {
  return (
    <div id="hours">
      {rem.splice(0, 7).map((item) => (
        <div key={item.dt}>
          <p id="time"> {item.dt_txt.substr(11, 5)} </p>
          <img src={getImages(item.weather[0].id)} alt="icons" />
          <p>{Math.round(item.main.temp - 273.15)}°C </p>
        </div>
      ))}
    </div>
  );
}

export default IncomingWeather;
