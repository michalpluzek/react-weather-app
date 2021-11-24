import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form>
      <input type="text" value={props.value} onChange={props.change} />
      <button>Wyszukaj miasto</button>
    </form>
  );
};

export default Form;
