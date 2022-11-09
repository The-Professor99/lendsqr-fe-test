import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DatatableFilterComponent } from "./DatatableFilterComponent";

describe("<DatatableFilterComponent />", () => {
  test("it should mount", () => {
    render(<DatatableFilterComponent />);

    const datatableFilterComponent = screen.getByTestId("DatatableFilterComponent");

    expect(datatableFilterComponent).toBeInTheDocument();
  });
});
