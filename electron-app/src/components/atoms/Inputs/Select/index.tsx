import React from "react";

import styles from "./index.module.scss";

import SelectValType from "@custom-types/selectTypes";

interface props {
  /** id  */
  id: string;
  /** selected value with options list */
  val: SelectValType;
  /** Function to execute when value changes */
  onChange: (data: string) => void;
}

const Select: React.FC<props> = ({ id, val, onChange }) => {
  return (
    <select
      id={id}
      onChange={(e) => onChange(e.target.value)}
      className={styles.select}
    >
      {val.options.map((i) => (
        <option value={i.value} selected={i.value === val.selectedValue}>
          {i.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
