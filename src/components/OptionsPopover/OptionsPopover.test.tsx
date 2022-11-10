import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { OptionsPopover } from "./OptionsPopover";
import { renderWithProvider } from "_helpers";
describe("<OptionsPopover />", () => {
  test("it should mount", () => {
    renderWithProvider(<OptionsPopover userId={""} />);

    const optionsPopover = screen.getByTestId("OptionsPopover");

    expect(optionsPopover).toBeInTheDocument();
  });
});
