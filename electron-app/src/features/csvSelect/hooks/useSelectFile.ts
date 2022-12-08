import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  SelectFileHookReturn,
  SelectFileStateTypes,
} from "../types/useSelectFileHookTypes";

import Status from "src/constants/status";

function useSelectFile(): SelectFileHookReturn {
  const navigate = useNavigate();

  const [_states, _setStates] = useState<SelectFileStateTypes>({
    status: Status.INITIAL,
    openModal: false,
    errorMessage: "",
    fileName: null,
    filePath: null,
    showNextBtn: false,
  });

  const onSelectFile = (path: string, fileName: string) => {
    _setStates((prev) => ({
      ...prev,
      filePath: path,
      fileName: fileName,
      showNextBtn: true,
    }));
  };
  const onRemoveFile = () => {
    _setStates((prev) => ({
      ...prev,
      filePath: null,
      fileName: null,
      showNextBtn: false,
    }));
  };
  const onFileLinkClick = () => {
    window.api.openPath(_states.filePath!);
  };

  const onCloseModal = () =>
    _setStates((prev) => ({ ...prev, openModal: false }));

  const onClickNext = () => {
    _setStates((prev) => ({
      ...prev,
      status: Status.LOADING,
      openModal: true,
    }));
    window.api.processCsv(_states.filePath!);
  };

  useEffect(() => {
    window.api.processCsvResponse((data: any) => {
      if (data.error) {
        _setStates((prev) => ({
          ...prev,
          status: Status.ERROR,
          errorMessage: data.errorMessage,
        }));

        return;
      }
      _setStates((prev) => ({ ...prev, openModal: false }));
      navigate("/generate", {
        state: {
          csvPath: data.csvPath,
          nameCols: data.data.names,
          urlCols: data.data.links,
        },
      });
    });
  }, []);

  return {
    showNextBtn: _states.showNextBtn,
    status: _states.status,
    fileName: _states.fileName,
    errorMessage: _states.errorMessage,
    openModal: _states.openModal,
    onClickNext,
    onSelectFile,
    onRemoveFile,
    onFileLinkClick,
    onCloseModal,
  };
}

export default useSelectFile;
