import React from 'react';
import './Form.css';

const Form = ({ value, change }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={value}
        onChange={change}
        placeholder="Wpisz nazwę miasta"
      />
    </form>
  );
};

export default Form;
