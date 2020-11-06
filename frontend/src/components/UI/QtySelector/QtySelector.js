import React from "react";
import styles from "./QtySelector.module.css";

const QtySelector = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.qtySelectorButton}>-</button>
      <div className={styles.qtySelectorNumber}>{props.number}</div>
      <button className={styles.qtySelectorButton}>+</button>
    </div>
  );
};

export default QtySelector;
