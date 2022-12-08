import { FileWithPath } from "@custom-types/filePath";

import styles from "./index.module.scss";

import Logo from "src/components/atoms/Images/Logo";
import LogoHeader from "src/components/atoms/Headings/LogoHeader";

function AppLogoHeader() {
  return (
    <div className={styles.container}>
      <Logo />
      <LogoHeader />
    </div>
  );
}

export default AppLogoHeader;
