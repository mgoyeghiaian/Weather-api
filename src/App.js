import React from "react";
import "./App.css";
import IncomingWeather from "./components/IncomingWeather";
import Search from "./components/Search";
import Middle from "./components/WeatherNow";
import { defCo } from "./components/getColor";
import { useState } from "react";
import Error from "./components/Error";



const App = () => {
  let current, remaining;
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const [color, setColor] = useState(defCo);
  const [error, setError] = useState(false);
  const fetchData = (e) => {
    e.preventDefault();
    const data = async () => {
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4459cccf26f5959f575f9ded555922bd`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((data) => {
          console.log(data)
          setData(data);
          setCity("");
          setError("");
        })
        .catch((err) => {
          setError(err);
        });
    };
    data();
  };

  if (data !== "") {
    const { list } = data;
    [current, ...remaining] = list;
    console.log();
    console.log(list);
  }

  if (data === "")
    return (
      <div className="app" style={color[0]}>
        <Search setCity={setCity} onClick={fetchData} color={color} />
        {error ? <Error error={error} /> : ""}
        {data ? (
          <>
            <Middle current={current} color={setColor} />
            <IncomingWeather remaining={remaining} />
          </>
        ) : (
          ""
        )}
      </div>
    );
  else
    return (
      <div className="app" style={color[0]}>
        <Search setCity={setCity} onClick={fetchData} color={color} />
        <Middle current={current} color={setColor} />
        <IncomingWeather rem={remaining} />
        <></>
      </div>
    );
};


export default App;