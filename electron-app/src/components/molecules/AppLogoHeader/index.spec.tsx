import { render, screen } from "@testing-library/react";

import AppLogoHeader from ".";

describe("AppLogoHeader component tests", () => {
  it("should show the image", () => {
    render(<AppLogoHeader />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should show the app header on the screen", () => {
    render(<AppLogoHeader />);
    expect(screen.getByText("QR Generator")).toBeInTheDocument();
  });
});
