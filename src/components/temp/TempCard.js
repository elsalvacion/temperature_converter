import React, { useState } from "react";

const TempCard = (props) => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const convertToCelsius = (far) => {
    const cel = (parseFloat(far) - 32) * (5 / 9);
    setCelsius(parseFloat(cel));
  };

  const convertToFarenheit = (cel) => {
    const far = (parseFloat(cel) * 9) / 5 + 32;
    setFahrenheit(far.toString());
  };
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
            <div className="input-field">
              <input
                type="text"
                id="celsius"
                value={celsius}
                onChange={handleCelsius}
                placeholder="Celsius"
              />
              <label htmlFor="celsius">Celsius</label>
            </div>
          </div>
          <div className="col m2 vertical-wrapper center hide-on-small-only">
            <i className="material-icons">drag_handle</i>
          </div>
          <div className="col m5 s6">
            <div className="input-field">
              <input
                type="text"
                id="fahrenheit"
                value={fahrenheit}
                onChange={handleFahrenheit}
                placeholder="Fahrenheit"
              />
              <label htmlFor="fahrenheit">Fahrenheit</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempCard;
