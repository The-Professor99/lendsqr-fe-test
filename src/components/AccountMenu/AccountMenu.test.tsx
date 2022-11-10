import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AccountMenu } from "./AccountMenu";

import { renderWithProvider } from "_helpers";
describe("<AccountMenu />", () => {
  test("it should mount", () => {
    renderWithProvider(<AccountMenu />);

    const accountMenu = screen.getByTestId("AccountMenu");

    expect(accountMenu).toBeInTheDocument();
  });
});
