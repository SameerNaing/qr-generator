import React from "react";

import styles from "./AppLayout.module.scss";

import AppLogoHeader from "src/components/molecules/AppLogoHeader";

interface props {
  children: React.ReactElement;
}

const AppLayout: React.FC<props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoHeaderContainer}>
        <AppLogoHeader />
      </div>
      <div className={styles.childContainer}>{children}</div>
    </div>
  );
};

export default AppLayout;
