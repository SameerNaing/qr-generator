import React from "react";

import type SelectValType from "@custom-types/selectTypes";

import styles from "./index.module.scss";

import Select from "src/components/atoms/Inputs/Select";
import InputLabelText from "src/components/atoms/Texts/InputLabelText";

interface props {
  id: string;
  labelText: string;
  val: SelectValType;
  onChange: (val: string) => void;
}

const LabelSelect: React.FC<props> = ({ id, labelText, val, onChange }) => {
  return (
    <div className={styles.container}>
      <InputLabelText htmlfor={id} labelText={labelText} />
      <Select id={id} val={val} onChange={onChange} />
    </div>
  );
};

export default LabelSelect;
