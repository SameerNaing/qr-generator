import Status from "src/constants/status";

type GenerateQRStatesType = {
  openModal: boolean;
  nameCol: null | string;
  urlCol: null | string;
  nameOptions: [{ label: string; value: string }] | [];
  urlOptions: [{ label: string; value: string }] | [];
  outDir: null | string;
  qrLogo: null | string;
  status: Status;
};

export { GenerateQRStatesType };
