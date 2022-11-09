import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DatatableRows } from "./DatatableRows";
import { UserProfile } from "_models";

describe("<DatatableRows />", () => {
  test("it should mount", () => {
    render(<DatatableRows data={[] as UserProfile[]} />);

    const datatableRows = screen.getByTestId("DatatableRows");

    expect(datatableRows).toBeInTheDocument();
  });
});
