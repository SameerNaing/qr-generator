import React from "react";

import styles from "./index.module.scss";

interface props {
  className?: string;
}

const LogoHeader: React.FC<props> = ({ className = "" }) => {
  return (
    <h3 className={[styles.heading, className].join(" ")}>QR Generator</h3>
  );
};

export default LogoHeader;
