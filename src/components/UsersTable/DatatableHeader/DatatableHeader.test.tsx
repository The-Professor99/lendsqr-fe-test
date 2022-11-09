import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DatatableHeader } from "./DatatableHeader";

describe("<DatatableHeader />", () => {
  test("it should mount", () => {
    render(<DatatableHeader headerTitles={[]} />);

    const datatableHeader = screen.getByTestId("DatatableHeader");

    expect(datatableHeader).toBeInTheDocument();
  });
});
