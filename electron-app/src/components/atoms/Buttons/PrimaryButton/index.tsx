import React from "react";

import styles from "./index.module.scss";

interface props {
  /** for customm design */
  className?: string;
  /** Display Text for button */
  btnText: string;
  /** Function to execute when button is clicked */
  onClick(): void;
}

const PrimaryButton: React.FC<props> = ({
  className = "",
  btnText = "Primary Button",
  onClick = () => {},
}) => {
  return (
    <button className={[styles.button, className].join(" ")} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default PrimaryButton;
