import React from "react";

import styles from "./index.module.scss";

import CsvImportButton from "src/components/atoms/Buttons/CsvImportButton";
import DirLinkText from "src/components/atoms/Texts/DirLinkText";
import RemoveIconButton from "src/components/atoms/Buttons/RemoveIconButton";

interface props {
  /** Selected CSV file name */
  fileName: string | null;
  /** Function to open dir for the csv file */
  onOpenDir(): void;
  /** Function to execute on CSV File choose */
  onSelectFile(path: string, fileName: string): void;
  /** Function to execute on selected CSV file remove */
  onRemoveFile(): void;
}

const CSVFileNameButton: React.FC<props> = ({
  fileName = null,
  onOpenDir = () => {},
  onSelectFile = () => {},
  onRemoveFile = () => {},
}) => {
  return (
    <div className={styles.container}>
      <CsvImportButton onSelectFile={onSelectFile} />
      {fileName && (
        <div className={styles.removeBtnFileNameContainer}>
          <RemoveIconButton onClick={onRemoveFile} />
          {/* Space Between */}
          <span style={{ width: "10px" }}></span>
          <DirLinkText size="small" text={fileName} onClick={onOpenDir} />
        </div>
      )}
    </div>
  );
};

export default CSVFileNameButton;
