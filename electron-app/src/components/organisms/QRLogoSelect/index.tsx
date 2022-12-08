import React from "react";

import options, { CUSTOM } from "./constants/options";

import useOptionSelect from "./hooks/optionSelectHook";
import useLogoChooseHook from "./hooks/logoChooseHook";

import LabelSelect from "src/components/molecules/LabelSelect";
import UploadQRLogoInput from "src/components/atoms/Inputs/UploadQRLogoInput";
import ImageRemoveIcon from "src/components/molecules/ImageRemoveIcon";

interface props {
  onQRLogoSelect: (logoPath: string | null) => void;
}

const QRLogoSelect: React.FC<props> = ({ onQRLogoSelect }) => {
  const optionSelectHook = useOptionSelect(onQRLogoSelect);
  const logoChooseHook = useLogoChooseHook(
    optionSelectHook.selectedValue,
    onQRLogoSelect
  );

  return (
    <div>
      <LabelSelect
        id="logo-select"
        labelText="Choose Logo for QR"
        onChange={optionSelectHook.onChange}
        val={{ selectedValue: optionSelectHook.selectedValue, options }}
      />

      <div style={{ height: "20px" }}></div>
      {optionSelectHook.selectedValue === CUSTOM &&
        logoChooseHook.imgUrl === null && (
          <UploadQRLogoInput onChange={logoChooseHook.onChoose} />
        )}
      {optionSelectHook.selectedValue === CUSTOM &&
        logoChooseHook.imgUrl !== null && (
          <ImageRemoveIcon
            onRemoveClick={logoChooseHook.onRemoveImg}
            imgUrl={logoChooseHook.imgUrl}
          />
        )}
    </div>
  );
};

export default QRLogoSelect;
