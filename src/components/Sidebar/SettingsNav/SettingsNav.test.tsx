import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SettingsNav } from "./SettingsNav";

describe("<SettingsNav />", () => {
  test("it should mount", () => {
    render(<SettingsNav />);

    const settingsNav = screen.getByTestId("SettingsNav");

    expect(settingsNav).toBeInTheDocument();
  });
});
