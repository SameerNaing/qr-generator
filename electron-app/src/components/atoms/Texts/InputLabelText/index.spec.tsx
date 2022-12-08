import { render, screen } from "@testing-library/react";

import InputLabelText from ".";

describe("InputlabelText tests", () => {
  it("should display the given text", () => {
    const text = "label";

    render(<InputLabelText htmlfor="" labelText={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
