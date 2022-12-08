import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FolderPathInput from ".";

describe("FolderPathInput Component Tests", () => {
  it("should diplay the give value text", () => {
    const value = "/Path/Folder";

    render(<FolderPathInput id="id" value={value} onClick={() => {}} />);

    expect(screen.getByLabelText("folder-input")).toHaveValue(value);
  });

  it("should call the onClick function when the input field is clicked", async () => {
    const onClickMock = jest.fn();

    render(<FolderPathInput id="id" value="" onClick={onClickMock} />);

    await userEvent.click(screen.getByLabelText("folder-input"));

    expect(onClickMock).toHaveBeenCalled();
  });
});
