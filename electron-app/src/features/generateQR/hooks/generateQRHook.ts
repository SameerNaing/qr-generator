import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { GenerateQRStatesType } from "../types/generateQRHookTypes";
import Status from "src/constants/status";

function useGenerateQR() {
  const location = useLocation();
  const navigate = useNavigate();

  const [states, setStates] = useState<GenerateQRStatesType>({
    openModal: false,
    nameCol: null,
    urlCol: null,
    nameOptions: [],
    urlOptions: [],
    outDir: null,
    qrLogo: "none",
    status: Status.INITIAL,
  });

  const [errorMsg, setErrorMsg] = useState("");

  const [showNextBtn, setShowNextBtn] = useState<boolean>(false);

  const onQRLogoSelect = (logoPath: string | null) => {
    setStates((prev) => ({ ...prev, qrLogo: logoPath }));
  };

  const onNameColChange = (val: string) => {
    setStates((prev) => ({ ...prev, nameCol: val }));
  };

  const onUrlColChange = (val: string) => {
    setStates((prev) => ({ ...prev, urlCol: val }));
  };

  const onChooseDirClick = () => window.api.chooseFolder();

  const onCloseModal = () =>
    setStates((prev) => ({ ...prev, openModal: false }));

  const onClickNext = () => {
    setStates((prev) => ({ ...prev, openModal: true, status: Status.LOADING }));
    window.api.generateQR(
      location.state.csvPath,
      states.nameCol!,
      states.urlCol!,
      states.qrLogo!,
      states.outDir!
    );
  };

  useEffect(() => {
    setStates((prev) => ({
      ...prev,
      nameCol: location.state.nameCols[0],
      urlCol: location.state.urlCols[0],
      nameOptions: location.state.nameCols.map((i: string) => ({
        label: i,
        value: i,
      })),
      urlOptions: location.state.urlCols.map((i: string) => ({
        label: i,
        value: i,
      })),
    }));

    window.api.generateQRResponse((data: any) => {
      if (data.error) {
        setStates((prev) => ({ ...prev, status: Status.ERROR }));
        setErrorMsg(data.teMsg);
        return;
      }

      navigate("/success", { state: { outDir: data.outDir } });
    });
  }, []);

  window.api.chooseFolderResponse((path: string) => {
    setStates((prev) => ({ ...prev, outDir: path }));
  });

  useEffect(() => {
    setShowNextBtn(states.outDir !== null && states.qrLogo !== null);
  }, [states.outDir, states.qrLogo]);

  return {
    states,
    showNextBtn,
    errorMsg,
    onQRLogoSelect,
    onNameColChange,
    onUrlColChange,
    onChooseDirClick,
    onCloseModal,
    onClickNext,
  };
}

export default useGenerateQR;
