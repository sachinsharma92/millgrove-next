import React, { useState } from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ isBoxChecked, setIsBoxChecked }) => {
  return (
    <div className={styles.round}>
      <input
        onChange={() => {
          setIsBoxChecked((prev) => !prev);
        }}
        type="checkbox"
        checked={isBoxChecked}
        id="conditions-checkbox"
      />
      <label htmlFor="conditions-checkbox"></label>
    </div>
  );
};

export default Checkbox;
