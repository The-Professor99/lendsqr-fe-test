import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DatatableRows } from "./DatatableRows";
import { UserProfile } from "_models";

import { renderWithProvider } from "_helpers";
describe("<DatatableRows />", () => {
  test("it should mount", () => {
    renderWithProvider(<DatatableRows data={[] as UserProfile[]} />);

    const datatableRows = screen.getByTestId("DatatableRows");

    expect(datatableRows).toBeInTheDocument();
  });
});
