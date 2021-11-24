import React from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

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
    err: "",
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=97e45c83e89d2245ef87c28399a60b80`;

    fetch(API)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw Error(" Nie udało się");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.inputValue}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result />
      </div>
    );
  }
}

export default App;
