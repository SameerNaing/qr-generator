import { useLocation } from "react-router-dom";
import styles from "./GenerateQR.module.scss";

import useGenerateQR from "../hooks/generateQRHook";

import StatusModal from "src/components/molecules/Modals/StatusModal";
import QRLogoSelect from "src/components/organisms/QRLogoSelect";
import LabelFolderChoose from "src/components/molecules/LabelFolderChoose";
import LabelSelect from "src/components/molecules/LabelSelect";
import PrimaryButton from "src/components/atoms/Buttons/PrimaryButton";

function GenerateQr() {
  const generateQRHook = useGenerateQR();

  return (
    <>
      <StatusModal
        open={generateQRHook.states.openModal}
        status={generateQRHook.states.status}
        errorMessage={generateQRHook.errorMsg}
        onClose={generateQRHook.onCloseModal}
      />
      <div className={styles.container}>
        <LabelSelect
          id=""
          labelText="Column for the images names"
          onChange={generateQRHook.onNameColChange}
          val={{
            selectedValue: generateQRHook.states.nameCol,
            options: generateQRHook.states.nameOptions,
          }}
        />
        <LabelSelect
          id=""
          labelText="Column for the redirect URLs"
          onChange={generateQRHook.onUrlColChange}
          val={{
            selectedValue: generateQRHook.states.urlCol,
            options: generateQRHook.states.urlOptions,
          }}
        />
      </div>
      <div style={{ marginTop: "25px" }}></div>
      <div className={styles.container}>
        <LabelFolderChoose
          id="folder-choose"
          labelText="Choose output folder"
          value={generateQRHook.states.outDir || ""}
          onClick={generateQRHook.onChooseDirClick}
        />
        <QRLogoSelect onQRLogoSelect={generateQRHook.onQRLogoSelect} />
      </div>
      <div style={{ marginTop: "40px" }}></div>
      {generateQRHook.showNextBtn && (
        <div className={styles.btnContainer}>
          <PrimaryButton btnText="Next" onClick={generateQRHook.onClickNext} />
        </div>
      )}
    </>
  );
}

export default GenerateQr;
