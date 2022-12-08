import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import DirLinkText from ".";

describe("LinkText component tests", () => {
  it("should display the link text", () => {
    render(<DirLinkText size="small" onClick={() => {}} text="" />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should display the given text", () => {
    const text = "link text";
    render(<DirLinkText size="small" text={text} onClick={() => {}} />);
    expect(screen.getByRole("link")).toHaveAccessibleName(text);
  });

  it("should call the onClick callback function when clicked", async () => {
    const onClickMock = jest.fn();
    render(<DirLinkText size="small" onClick={onClickMock} text="" />);

    await userEvent.click(screen.getByRole("link"));

    expect(onClickMock).toHaveBeenCalled();
  });
});
