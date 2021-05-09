import React from "react";

const CelsiusInput = (props) => {
  return (
    <div className="input-field">
      <input
        type="text"
        id={props.name}
        value={props.value}
        onChange={props.handleChange}
        placeholder="Fahrenheit"
      />
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
};

export default CelsiusInput;
