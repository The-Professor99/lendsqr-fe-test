import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Sidebar } from "./Sidebar";

import { renderWithProvider } from "_helpers";
describe("<Sidebar />", () => {
  test("it should mount", () => {
    renderWithProvider(<Sidebar />);

    const sidebar = screen.getByTestId("Sidebar");

    expect(sidebar).toBeInTheDocument();
  });
});
