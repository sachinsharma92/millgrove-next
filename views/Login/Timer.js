import React from "react";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const { totalSeconds = 0 } = props;
  const [seconds, setSeconds] = useState(totalSeconds);

  const remainingMinutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const shouldShowTimer = !!(remainingSeconds || remainingMinutes);

  const padWithZero = (num) => {
    return num < 10 ? `0${num.toString()}` : num.toString();
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds((prev) => {
          if (prev > 0) {
            return prev - 1;
          }
        });
      }

      if (seconds <= 1) {
        clearTimeout(timer);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [seconds]);

  return (
    <span>
      {shouldShowTimer && (
        <span>
          {padWithZero(remainingMinutes)}:{padWithZero(remainingSeconds)}
        </span>
      )}
    </span>
  );
};

export default Timer;
