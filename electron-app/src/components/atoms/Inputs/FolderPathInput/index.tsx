import React from "react";

import styles from "./index.module.scss";

interface props {
  /** id */
  id: string;
  /** Value to show in input */
  value: string;
  /** Function to execute when input is clicked */
  onClick(): void;
}

const FolderPathInput: React.FC<props> = ({ id, value, onClick }) => {
  return (
    <input
      id={id}
      aria-label="folder-input"
      className={styles.input}
      readOnly
      value={value}
      onClick={onClick}
    />
  );
};

export default FolderPathInput;
