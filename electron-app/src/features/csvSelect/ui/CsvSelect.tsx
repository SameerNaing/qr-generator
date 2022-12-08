import styles from "./CsvSelect.module.scss";

import Status from "src/constants/status";

import useSelectFile from "../hooks/useSelectFile";

import StatusModal from "src/components/molecules/Modals/StatusModal";
import CSVFileNameButton from "src/components/molecules/CSVFileNameButton";
import PrimaryButton from "src/components/atoms/Buttons/PrimaryButton";

function CsvSelect() {
  const selectFileHook = useSelectFile();
  return (
    <>
      <StatusModal
        open={selectFileHook.openModal}
        status={selectFileHook.status}
        errorMessage={selectFileHook.errorMessage}
        onClose={selectFileHook.onCloseModal}
      />
      <div className={styles.container}>
        <CSVFileNameButton
          fileName={selectFileHook.fileName}
          onOpenDir={selectFileHook.onFileLinkClick}
          onSelectFile={selectFileHook.onSelectFile}
          onRemoveFile={selectFileHook.onRemoveFile}
        />
        {selectFileHook.showNextBtn && (
          <PrimaryButton
            className={styles.button}
            btnText="Next"
            onClick={selectFileHook.onClickNext}
          />
        )}
      </div>
    </>
  );
}

export default CsvSelect;
