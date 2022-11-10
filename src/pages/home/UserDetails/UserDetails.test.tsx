import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserDetails } from "./UserDetails";

import { renderWithProvider } from "_helpers";
describe("<UserDetails />", () => {
  test("it should mount", () => {
    renderWithProvider(<UserDetails />);

    const userDetails = screen.getByTestId("UserDetails");

    expect(userDetails).toBeInTheDocument();
  });
});
