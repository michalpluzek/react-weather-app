import React from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

class App extends React.Component {
  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Form value={this.state.inputValue} change={this.handleChange} />
        <Result />
      </div>
    );
  }
}

export default App;
