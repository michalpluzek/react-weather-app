import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form>
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="Wpisz nazwę miasta"
      />
    </form>
  );
};

export default Form;
