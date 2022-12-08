import Status from "src/constants/status";

type SelectFileStateTypes = {
  status: Status;
  errorMessage: string;
  fileName: string | null;
  filePath: string | null;
  showNextBtn: boolean;
  openModal: boolean;
};

type SelectFileHookReturn = {
  showNextBtn: boolean;
  status: Status;
  errorMessage: string;
  fileName: string | null;
  openModal: boolean;
  onClickNext(): void;
  onSelectFile(path: string, fileName: string): void;
  onRemoveFile(): void;
  onFileLinkClick(): void;
  onCloseModal(): void;
};

export type { SelectFileHookReturn, SelectFileStateTypes };
