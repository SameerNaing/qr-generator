import React from "react";
import { Modal, Card } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";
import { BiErrorCircle } from "react-icons/bi";

import styles from "./index.module.scss";

import Status from "src/constants/status";

import ModalCloseButton from "src/components/atoms/Buttons/ModalCloseButton";

interface props {
  open: boolean;
  status: Status;
  errorMessage?: string;
  onClose(): void;
}

const StatusModal: React.FC<props> = ({
  open = false,
  status = Status.LOADING,
  errorMessage = "",
  onClose = () => {},
}) => {
  return (
    <Modal open={open}>
      <Card className={styles.card}>
        {status === Status.ERROR && (
          <>
            <BiErrorCircle size={30} color="red" />
            <p>{errorMessage}</p>
            <ModalCloseButton onClick={onClose} />
          </>
        )}

        {status === Status.LOADING && (
          <>
            <InfinitySpin color="#00aeef" />
            <p>Please wait</p>
          </>
        )}
      </Card>
    </Modal>
  );
};

export default StatusModal;
