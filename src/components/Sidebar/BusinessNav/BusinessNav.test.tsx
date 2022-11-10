import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BusinessNav } from "./BusinessNav";

import { renderWithProvider } from "_helpers";
describe("<BusinessNav />", () => {
  test("it should mount", () => {
    renderWithProvider(<BusinessNav />);

    const businessNav = screen.getByTestId("BusinessNav");

    expect(businessNav).toBeInTheDocument();
  });
});
