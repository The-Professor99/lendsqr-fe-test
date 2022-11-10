import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Notifications } from "./Notifications";
import { renderWithProvider } from "_helpers";

describe("<Notifications />", () => {
  test("it should mount", () => {
    renderWithProvider(<Notifications />);

    const notifications = screen.getByTestId("Notifications");

    expect(notifications).toBeInTheDocument();
  });
});
