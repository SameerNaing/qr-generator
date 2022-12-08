import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ModalCloseButton from ".";

describe("ModalCloseButton component tests", () => {
  it("should call the onClick function when the button is clicked", async () => {
    const onClickMock = jest.fn();

    render(<ModalCloseButton onClick={onClickMock} />);

    await userEvent.click(screen.getByRole("button"));

    expect(onClickMock).toHaveBeenCalled();
  });
});
