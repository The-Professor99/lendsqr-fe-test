import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AccountMenu } from "./AccountMenu";

describe("<AccountMenu />", () => {
  test("it should mount", () => {
    render(<AccountMenu />);

    const accountMenu = screen.getByTestId("AccountMenu");

    expect(accountMenu).toBeInTheDocument();
  });
});
