import React from "react";
import "./Result.css";

const Result = (props) => {
  const error = <h4>Błąd</h4>;
  const result = <div>Pogoda miasto...</div>;

  return <div>{props.error ? error : result}</div>;
};

export default Result;
