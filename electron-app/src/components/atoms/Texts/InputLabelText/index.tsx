import React from "react";

import styles from "./index.module.scss";

interface props {
  /** Label Text */
  labelText: string;
  /** Html for */
  htmlfor: string;
}

const InputLabelText: React.FC<props> = ({ labelText, htmlfor }) => {
  return (
    <label className={styles.label} htmlFor={htmlfor}>
      {labelText}
    </label>
  );
};

export default InputLabelText;
