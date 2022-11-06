import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { OptionsPopover } from "./OptionsPopover";

describe("<OptionsPopover />", () => {
  test("it should mount", () => {
    render(<OptionsPopover userId={""} />);

    const optionsPopover = screen.getByTestId("OptionsPopover");

    expect(optionsPopover).toBeInTheDocument();
  });
});
