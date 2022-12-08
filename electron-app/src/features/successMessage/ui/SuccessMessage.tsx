import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./SuccessMessage.module.scss";

import DirLinkText from "src/components/atoms/Texts/DirLinkText";
import PrimaryButton from "src/components/atoms/Buttons/PrimaryButton";

function SuccessMessage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <p>🎉 QRs are generated. You can find the generated QRs at</p>
      <DirLinkText
        size="large"
        text={location.state.outDir}
        onClick={() => window.api.openPath(location.state.outDir)}
      />
      <PrimaryButton btnText="Generate New" onClick={() => navigate("/")} />
    </div>
  );
}

export default SuccessMessage;
