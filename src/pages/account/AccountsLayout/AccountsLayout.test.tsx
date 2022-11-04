import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AccountsLayout } from "./AccountsLayout";

describe("<AccountsLayout />", () => {
  test("it should mount", () => {
    render(<AccountsLayout />);

    const accountsLayout = screen.getByTestId("AccountsLayout");

    expect(accountsLayout).toBeInTheDocument();
  });
});
