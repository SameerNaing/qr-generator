import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import styles from "./index.module.scss";

interface props {
  /** Function to execute when button is clicked */
  onClick(): void;
}

const RemoveIconButton: React.FC<props> = ({ onClick = () => {} }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      aria-label="remove-icon-btn"
    >
      <AiOutlineCloseCircle size={20} />
    </button>
  );
};

export default RemoveIconButton;
