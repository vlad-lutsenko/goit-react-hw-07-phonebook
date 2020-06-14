import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <>{children}</>
      </div>
    </div>
  );
};

export default Modal;
