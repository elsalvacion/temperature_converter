import React, { useContext, useState } from "react";
import TempContext from "../../context/tempContext";
import TempInput from "./TempInput";
const TempCard = (props) => {
  const tempContext = useContext(TempContext);

  const {
    celsius,
    fahrenheit,
    setCelsius,
    setFahrenheit,
    convertToCelsius,
    convertToFarenheit,
  } = tempContext;

  const handleCelsius = (e) => {
    if (isNaN(parseFloat(e.target.value))) {
      setCelsius("");
      setFahrenheit("");
    } else {
      setCelsius(e.target.value);
      convertToFarenheit(e.target.value);
    }
  };

  const handleFahrenheit = (e) => {
    if (isNaN(parseFloat(e.target.value))) {
      setFahrenheit("");
      setCelsius("");
    } else {
      setFahrenheit(e.target.value);
      convertToCelsius(e.target.value);
    }
  };

  return (
    <div className="card z-depth-3 grey lighten-4">
      <div className="card-content">
        <h3 className="card-title center-align">Temperature Conversion App</h3>
        <div className="row">
          <div className="col m5 s6">
            <TempInput
              name="Celsius"
              value={celsius}
              handleChange={handleCelsius}
            />
          </div>
          <div className="col m2 vertical-wrapper center hide-on-small-only">
            <i className="material-icons">drag_handle</i>
          </div>
          <div className="col m5 s6">
            <TempInput
              name="Fahrenheit"
              value={fahrenheit}
              handleChange={handleFahrenheit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempCard;
