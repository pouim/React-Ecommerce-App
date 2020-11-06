import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={[styles.btn, styles.block, styles[props.btnType]].join(" ") }
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
