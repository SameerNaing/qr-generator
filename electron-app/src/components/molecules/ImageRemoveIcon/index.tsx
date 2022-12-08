import React from "react";

import styles from "./index.module.scss";

import QRLogoImg from "src/components/atoms/Images/QRLogoImg";
import RemoveIconButton from "src/components/atoms/Buttons/RemoveIconButton";

interface props {
  onRemoveClick: () => void;
  imgUrl: string;
}

const ImageRemoveIcon: React.FC<props> = ({ imgUrl, onRemoveClick }) => {
  return (
    <div className={styles.container}>
      <QRLogoImg imgUrl={imgUrl} />
      {/* Space between */}
      <div style={{ width: "8px" }}></div>
      <RemoveIconButton onClick={onRemoveClick} />
    </div>
  );
};

export default ImageRemoveIcon;
