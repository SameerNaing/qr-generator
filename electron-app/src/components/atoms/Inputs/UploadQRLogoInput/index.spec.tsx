import { render, screen, fireEvent } from "@testing-library/react";

import UploadQRLogoInput from ".";

describe("UploadQRLogoInput component tests", () => {
  it("should call the onChange function with choosen file", () => {
    const fileName = "test.png";
    const onChangeMock = jest.fn();
    const file = new File(["img"], fileName, { type: "image/png" });

    render(<UploadQRLogoInput onChange={onChangeMock} />);

    fireEvent.change(screen.getByLabelText("logo-input"), {
      target: { files: [file] },
    });

    expect(onChangeMock).toHaveBeenCalledWith(file);
  });
});
