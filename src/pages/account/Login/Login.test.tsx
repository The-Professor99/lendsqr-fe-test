import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Login } from "./Login";
import userEvent from "@testing-library/user-event";

import { renderWithProvider } from "_helpers";

describe("<Login />", () => {
  test("it should mount", () => {
    const { container } = renderWithProvider(<Login />);

    const login = screen.getByTestId("Login");

    expect(login).toBeInTheDocument();
  });
});
