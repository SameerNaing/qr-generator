import React, { useRef } from "react";

import styles from "./index.module.scss";

import type { FileWithPath } from "@custom-types/filePath";

import { MdOutlineFileUpload } from "react-icons/md";

interface props {
  /** Function to execute on file select */
  onChange: (file: FileWithPath) => void;
}

const UploadQRLogoInput: React.FC<props> = ({ onChange }) => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => ref?.current?.click();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file: FileWithPath = e.target.files[0] as FileWithPath;

    // Clear the value, so the same file can be selectable again
    if (ref.current?.value) ref.current.value = "";

    onChange(file);
  };

  return (
    <>
      <input
        aria-label="logo-input"
        accept="image/*"
        onChange={onFileChange}
        ref={ref}
        type="file"
        hidden
      />
      <button onClick={onClick} className={styles.button}>
        <MdOutlineFileUpload size={33} />
      </button>
    </>
  );
};

export default UploadQRLogoInput;
