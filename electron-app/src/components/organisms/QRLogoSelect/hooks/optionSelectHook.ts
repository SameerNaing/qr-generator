import { useState } from "react";

import { NONE, CUSTOM } from "../constants/options";

function useOptionSelect(onQRLogoSelect: (logoPath: string | null) => void) {
  const [selectedValue, setSelectedValue] = useState<string>(NONE);

  const onChange = (val: string) => {
    setSelectedValue(val);

    if (val === CUSTOM) return onQRLogoSelect(null);

    if (val === NONE) return onQRLogoSelect("none");
  };

  return { selectedValue, onChange };
}

export default useOptionSelect;
