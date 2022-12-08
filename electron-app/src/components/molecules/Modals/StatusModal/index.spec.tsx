import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Status from "src/constants/status";
import StatusModal from ".";

describe("StatusModal component tests", () => {
  it("should show loading when status is LOADING", () => {
    render(<StatusModal open status={Status.LOADING} onClose={() => {}} />);

    expect(screen.getByText("Please wait")).toBeInTheDocument();
  });

  it("should show error message when status is ERROR", () => {
    const errorMessage = "Error";
    render(
      <StatusModal
        errorMessage={errorMessage}
        open
        status={Status.ERROR}
        onClose={() => {}}
      />
    );
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("should call the onClose function when 'close' button is clicked", async () => {
    const onCloseMock = jest.fn();
    render(
      <StatusModal
        errorMessage="Error"
        open
        status={Status.ERROR}
        onClose={onCloseMock}
      />
    );

    await userEvent.click(screen.getByRole("button"));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
