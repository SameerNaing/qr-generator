import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import RemoveIconButton from ".";

describe("RemoveIconButton Component tests", () => {
  it("should display the button", () => {
    render(<RemoveIconButton onClick={() => {}} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call the onClick callback when button is clicked", async () => {
    const onClickMock = jest.fn();

    render(<RemoveIconButton onClick={onClickMock} />);

    await userEvent.click(screen.getByRole("button"));

    expect(onClickMock).toHaveBeenCalled();
  });
});
