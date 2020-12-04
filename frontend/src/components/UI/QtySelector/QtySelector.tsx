import React from "react";
import styles from "./QtySelector.module.css";

type Iselector = {
  number: number;
}

const QtySelector = ({number}: Iselector) => {
  return (
    <div className={styles.container}>
      <button className={styles.qtySelectorButton}>-</button>
      <div className={styles.qtySelectorNumber}>{number}</div>
      <button className={styles.qtySelectorButton}>+</button>
    </div>
  );
};

export default QtySelector;
