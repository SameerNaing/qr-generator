import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PrimaryButton from ".";

describe("PrimaryButton tests", () => {
  it("should render the button component", () => {
    render(<PrimaryButton btnText="" onClick={() => {}} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call the onClick callback when button is clicked", async () => {
    const onClickMock = jest.fn();
    render(<PrimaryButton btnText="" onClick={onClickMock} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should render the button with given text", () => {
    const btnText = "Text";
    render(<PrimaryButton btnText={btnText} onClick={() => {}} />);

    expect(screen.getByRole("button")).toHaveAccessibleName(btnText);
  });
});
