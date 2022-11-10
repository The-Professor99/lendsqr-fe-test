import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AdminDashboard } from "./AdminDashboard";

import { renderWithProvider } from "_helpers";

describe("<AdminDashboard />", () => {
  test("it should mount", () => {
    renderWithProvider(<AdminDashboard />);

    const adminDashboard = screen.getByTestId("AdminDashboard");

    expect(adminDashboard).toBeInTheDocument();
  });
});
