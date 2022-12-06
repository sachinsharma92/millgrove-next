import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  classname,
  leftIcon,
  rightIcon,
  text,
  customStyles,
  variant,
  type,
  isRounded,
  clickhandler = () => { },
  isDisabled,
}) => {
  const getClassname = (btnType) => {
    switch (btnType) {
      case "primary": {
        return styles.primary;
      }
      case "secondary": {
        return styles.secondary;
      }
      default: {
        return styles.primary;
      }
    }
  };

  return (
    <button
      onClick={clickhandler}
      disabled={isDisabled}
      className={`${classname} ${getClassname(variant)} ${styles.btn} ${isRounded && styles.rounded
        }`}
      type={type || "button"}
      style={customStyles && { ...customStyles }}
    >
      {leftIcon && <span className={styles.btnIcon}>{leftIcon}</span>}
      {text && <span className={styles.btnText}>{text}</span>}
      {rightIcon && <span className={styles.btnIcon}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
