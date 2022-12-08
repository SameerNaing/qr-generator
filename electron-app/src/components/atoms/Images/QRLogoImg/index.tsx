import React from "react";

import styles from "./index.module.scss";

interface props {
  /** Url of an image */
  imgUrl: string;
}

const QRLogoImg: React.FC<props> = ({ imgUrl }) => {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt="logo" />
    </div>
  );
};

export default QRLogoImg;
