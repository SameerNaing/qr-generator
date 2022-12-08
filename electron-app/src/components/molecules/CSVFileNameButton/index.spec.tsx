import { screen, render } from "@testing-library/react";

import CSVFileNameButton from ".";

describe("CSVFileNameButton component tests", () => {
  it("should display the file name if selected", () => {
    const fileName = "CsvFile.csv";
    render(
      <CSVFileNameButton
        fileName={fileName}
        onOpenDir={() => {}}
        onRemoveFile={() => {}}
        onSelectFile={() => {}}
      />
    );
    expect(screen.getByText(fileName)).toBeInTheDocument();
  });

  it("should show the file remove button when file is selected", () => {
    render(
      <CSVFileNameButton
        fileName={"file.csv"}
        onOpenDir={() => {}}
        onRemoveFile={() => {}}
        onSelectFile={() => {}}
      />
    );

    expect(
      screen.getByRole("button", { name: "remove-icon-btn" })
    ).toBeInTheDocument();
  });
});
