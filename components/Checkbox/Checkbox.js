import React, { useState } from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ isChecked, setIsChecked }) => {
  // const [isChecked, setIsChecked] = useState(false)
  return (
    <div class={styles.round}>
      <input
        // onChange={() => {
        //   console.log("heyyy");
        //   setIsChecked(!isChecked);
        // }}
        type="checkbox"
        checked={isChecked}
        id="checkbox"
      />
      {/* <label for="checkbox"></label> */}
      <label onClick={() => setIsChecked(!isChecked)} for="checkbox"></label>
    </div>
  );
};

export default Checkbox;
