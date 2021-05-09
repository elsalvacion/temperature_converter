import React from "react";

const CelsiusInput = (props) => {
  return (
    <div className="input-field">
      <input
        type="number"
        id={props.name}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.name}
      />
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
};

export default CelsiusInput;
