import React from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

const APIKey = "97e45c83e89d2245ef87c28399a60b80";

class App extends React.Component {
  state = {
    inputValue: "",
    weather: {
      date: "",
      city: "",
      sunrise: "",
      sunset: "",
      temp: "",
      wind: "",
      pressure: "",
    },
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=${APIKey}`;

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

        this.setState((prevState) => ({
          weather: {
            date: actualTime,
            city: prevState.inputValue,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            wind: data.wind.speed,
            pressure: data.main.pressure,
          },
          err: false,
        }));
      })
      .catch((err) => {
        console.log(err);
        this.setState((prevState) => ({
          err: true,
          weather: {
            city: prevState.inputValue,
          },
        }));
      });
  };

  render() {
    const { err, inputValue, weather } = this.state;

    return (
      <div className="App">
        <Form
          value={inputValue}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result error={err} weather={weather} />
      </div>
    );
  }
}

export default App;
