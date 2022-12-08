import React from "react";

import styles from "./index.module.scss";

import InputLabelText from "src/components/atoms/Texts/InputLabelText";
import FolderPathInput from "src/components/atoms/Inputs/FolderPathInput";

interface props {
  id: string;
  labelText: string;
  value: string;
  onClick: () => void;
}

const LabelFolderChoose: React.FC<props> = ({
  id,
  labelText,
  value,
  onClick,
}) => {
  return (
    <div className={styles.container}>
      <InputLabelText htmlfor={id} labelText={labelText} />
      <FolderPathInput id={id} value={value} onClick={onClick} />
    </div>
  );
};

export default LabelFolderChoose;
