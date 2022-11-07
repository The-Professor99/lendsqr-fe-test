import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CustomersNav } from "./CustomersNav";

describe("<CustomersNav />", () => {
  test("it should mount", () => {
    render(<CustomersNav />);

    const customersNav = screen.getByTestId("CustomersNav");

    expect(customersNav).toBeInTheDocument();
  });
});
