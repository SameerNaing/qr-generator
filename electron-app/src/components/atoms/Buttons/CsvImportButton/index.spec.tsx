import { render, screen, fireEvent } from "@testing-library/react";

import type { FileWithPath } from "@custom-types/filePath";

import CsvImportButton from ".";

describe("CsvImportButton tests", () => {
  it("should be displayed on the screen", () => {
    render(<CsvImportButton onSelectFile={() => {}} />);
    expect(
      screen.getByRole("button", { name: "Import CSV File" })
    ).toBeInTheDocument();
  });

  it("should hide the file input", () => {
    render(<CsvImportButton onSelectFile={() => {}} />);
    expect(screen.getByLabelText("file-upload")).not.toBeVisible();
  });

  it("should call the callback function with selected file path", async () => {
    const filePath = "fake/path";
    const fileName = "test.csv";
    const onSelectFileMock = jest.fn();

    render(<CsvImportButton onSelectFile={onSelectFileMock} />);
    const file = new File(["test"], fileName, {
      type: "text/csv",
    }) as FileWithPath;
    file.path = filePath;

    const input: HTMLInputElement = screen.getByLabelText("file-upload");

    fireEvent.change(input, {
      target: { files: [file] },
    });

    expect(onSelectFileMock).toHaveBeenCalledWith(filePath, fileName);
  });
});
