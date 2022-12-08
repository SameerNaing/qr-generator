import { screen, render } from "@testing-library/react";

import LogoHeader from ".";

describe("LogoHeader Component Tests", () => {
  it("should display the header", () => {
    render(<LogoHeader />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
