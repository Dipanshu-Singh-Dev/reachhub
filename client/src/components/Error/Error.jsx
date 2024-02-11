import React from "react";
import styles from "./styles.module.css";

const ErrorMessage = ({message}) => {
  return (
    <div className={styles.errorMessage}>
      <span className={styles.errorText}>{message}</span>
    </div>
  );
};

export default ErrorMessage;
