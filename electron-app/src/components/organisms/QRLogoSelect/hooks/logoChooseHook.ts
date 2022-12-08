import { useState, useEffect } from "react";

import { FileWithPath } from "@custom-types/filePath";

function useLogoChooseHook(
  selectedOption: string,
  onQRLogoSelect: (logoPath: string | null) => void
) {
  const [imgUrl, setImgUrl] = useState<any | null>(null);

  const onChoose = (file: FileWithPath) => {
    const reader = new FileReader();
    reader.onloadend = () => setImgUrl(reader.result);
    reader.readAsDataURL(file);
    onQRLogoSelect(file.path);
  };

  const onRemoveImg = () => {
    setImgUrl(null);
    onQRLogoSelect(null);
  };

  useEffect(() => {
    setImgUrl(null);
  }, [selectedOption]);

  return { imgUrl, onChoose, onRemoveImg };
}

export default useLogoChooseHook;
