import React from "react";

import styles from "./index.module.scss";

interface props {
  /** Function to execute when button is clicked */
  onClick(): void;
}

const ModalCloseButton: React.FC<props> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Close
    </button>
  );
};

export default ModalCloseButton;
