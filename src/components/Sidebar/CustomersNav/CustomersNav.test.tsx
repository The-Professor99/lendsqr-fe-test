import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CustomersNav } from "./CustomersNav";

import { renderWithProvider } from "_helpers";
describe("<CustomersNav />", () => {
  test("it should mount", () => {
    renderWithProvider(<CustomersNav />);

    const customersNav = screen.getByTestId("CustomersNav");

    expect(customersNav).toBeInTheDocument();
  });
});
