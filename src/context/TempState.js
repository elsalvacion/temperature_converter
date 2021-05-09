import React, { useReducer } from "react";
import { SET_CELSIUS, SET_FAHRENHEIT } from "./types";
import TempContext from "./tempContext";
import tempReducer from "./tempReducer";
const TempState = (props) => {
  const initialState = {
    celsius: 0,
    fahrenheit: 32,
  };

  const [state, dispatch] = useReducer(tempReducer, initialState);
  const setCelsius = (cel) => {
    dispatch({
      name: SET_CELSIUS,
      value: cel,
    });
  };

  const setFahrenheit = (fah) => {
    dispatch({
      name: SET_FAHRENHEIT,
      value: fah,
    });
  };
  const convertToCelsius = (fah) => {
    const cel = (fah - 32) * (5 / 9);
    setCelsius(cel);
  };

  const convertToFarenheit = (cel) => {
    const fah = (cel * 9) / 5 + 32;
    setFahrenheit(fah);
  };
  return (
    <TempContext.Provider
      value={{
        celsius: state.celsius,
        fahrenheit: state.fahrenheit,
        setCelsius,
        setFahrenheit,
        convertToCelsius,
        convertToFarenheit,
      }}
    >
      {props.children}
    </TempContext.Provider>
  );
};

export default TempState;
