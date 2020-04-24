import React, { useState, createContext } from "react";

export const RangeContext = createContext();

export const RangeProvider = (props) => {
  const headingTitle = "Haptik";
  const [rangeVal, setRangeVal] = useState({
    inputVal: 70,
    step: 0,
    minVal: 0,
    maxVal: 100,
  });

  const rangeValue = (e) => {
    setRangeVal({ ...rangeVal, inputVal: e.target.value });
  };

  return (
    <RangeContext.Provider value={{ headingTitle, rangeVal, rangeValue }}>
      {props.children}
    </RangeContext.Provider>
  );
};
