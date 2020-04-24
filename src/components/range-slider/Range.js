import React from "react";
import styles from "../range-slider/range.module.css";

const RangeSlider = ({ minVal, maxVal, inputVal, step, rangeFunction }) => {
  return (
    <div className={styles.slidecontainer}>
      <input
        type="range"
        min={minVal}
        max={maxVal}
        defaultValue={inputVal}
        step={step}
        className={styles.slider}
        onChange={(e) => rangeFunction(e)}
      />
      <div className={styles.minMAx}>
        <span>{minVal}</span>
        <span>{maxVal}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
