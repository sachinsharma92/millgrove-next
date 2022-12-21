import React from "react";
import { useState, useEffect } from "react";
import styles from "./Login.module.scss";

const Timer = (props) => {
  const { label } = props;

  const remainingMinutes = Math.floor(props.seconds / 60);
  const remainingSeconds = Math.floor(props.seconds % 60);

  const shouldShowTimer = !!(remainingSeconds || remainingMinutes);

  const padWithZero = (num) => {
    return num < 10 ? `0${num.toString()}` : num.toString();
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (props.seconds > 0) {
        props.setSeconds((prev) => {
          if (prev > 0) {
            return prev - 1;
          }
        });
      }

      if (props.seconds <= 1) {
        clearTimeout(timer);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [props.seconds]);

  return (
    <>
      {shouldShowTimer && <span>{props.seconds > 0 ? label : ""} </span>}
      {shouldShowTimer && (
        <span className={styles.timerCount}>
          {padWithZero(remainingMinutes)}:{padWithZero(remainingSeconds)} secs
        </span>
      )}
    </>
  );
};

export default Timer;
