import React from "react";
import { SET_CELSIUS, SET_FAHRENHEIT } from "./types";
const tempReducer = (state, action) => {
  switch (action.name) {
    case SET_CELSIUS:
      return {
        ...state,
        celsius: action.value,
      };
    case SET_FAHRENHEIT:
      return {
        ...state,
        fahrenheit: action.value,
      };
    default:
      return state;
  }
};

export default tempReducer;
