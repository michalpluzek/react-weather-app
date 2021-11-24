import React from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <Result />
      </div>
    );
  }
}

export default App;
