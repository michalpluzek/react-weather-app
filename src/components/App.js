import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

const APIKey = "97e45c83e89d2245ef87c28399a60b80";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [weather, setWeather] = useState({
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    wind: "",
    pressure: "",
  });
  const [err, setErr] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue.length === 0) return;

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${APIKey}&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw Error(" Nie udało się");
        }
      })
      .then((data) => {
        const actualTime = new Date().toLocaleString();

        setErr(false);
        setWeather(() => ({
          date: actualTime,
          city: inputValue,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          wind: data.wind.speed,
          pressure: data.main.pressure,
        }));
      })
      .catch((err) => {
        console.log(err);
        setErr(true);
        setWeather((prevValue) => ({
          ...prevValue,
          city: inputValue,
        }));
      });
  }, [inputValue]);

  return (
    <div className="app">
      <Form value={inputValue} change={handleInputChange} />
      <Result error={err} weather={weather} />
    </div>
  );
};

export default App;
