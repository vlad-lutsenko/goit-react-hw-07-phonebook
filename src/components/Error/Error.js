import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.error}>
      <p className={styles.text}>Something gone wrong</p>
      <p className={styles.text}>reload page and try again</p>
    </div>
  );
};

export default Error;
