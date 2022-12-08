import type { FileWithPath } from "@custom-types/filePath";

import React, { useRef } from "react";
import { AiFillFileAdd } from "react-icons/ai";

import styles from "./index.module.scss";

interface Props {
  /** Function to execute when csv file is selected */
  onSelectFile: (path: string, name: string) => void;
}

const CsvImportButton: React.FC<Props> = ({ onSelectFile = () => {} }) => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => ref?.current?.click();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file: FileWithPath = e.target.files[0] as FileWithPath;
    onSelectFile(file.path, file.name);
    // Clear the value, so the same file can be selectable again
    if (ref.current?.value) {
      ref.current.value = "";
    }
  };

  return (
    <>
      <input
        aria-label="file-upload"
        aria-hidden="true"
        onChange={onChange}
        ref={ref}
        type="file"
        hidden
        accept=".csv"
      />
      <button className={styles.button} onClick={onClick}>
        <AiFillFileAdd size={23} />
        <span>Import CSV File</span>
      </button>
    </>
  );
};

export default CsvImportButton;
