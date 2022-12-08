import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ImageRemoveIcon from ".";

describe("ImageRemoveIcon component tests", () => {
  it("should call the onRemoveClick function when the remove icon button is clicked", async () => {
    const onRemoveClickMock = jest.fn();
    render(<ImageRemoveIcon imgUrl="url" onRemoveClick={onRemoveClickMock} />);

    await userEvent.click(
      screen.getByRole("button", { name: "remove-icon-btn" })
    );

    expect(onRemoveClickMock).toHaveBeenCalled();
  });
});
