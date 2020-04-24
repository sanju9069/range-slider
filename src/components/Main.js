import React, { useContext } from "react";
import RangeSlider from "./range-slider/Range";
import styles from "./main.module.css";
import Header from "./header/Header";
import { RangeContext } from "../context/RangeProvider";

function App() {
  const { rangeVal, rangeValue } = useContext(RangeContext);
  const { minVal, maxVal, inputVal, step } = rangeVal;

  return (
    <div className={styles.wrapper}>
      <Header />
      <RangeSlider
        minVal={minVal}
        maxVal={maxVal}
        inputVal={inputVal}
        step={step}
        rangeFunction={rangeValue}
      />
    </div>
  );
}

export default App;
