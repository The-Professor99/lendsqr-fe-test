import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DatatableFooter } from "./DatatableFooter";
import { SelectChangeEvent } from "@mui/material";

import { renderWithProvider } from "_helpers";
describe("<DatatableFooter />", () => {
  test("it should mount", () => {
    renderWithProvider(
      <DatatableFooter
        rowsPerPageOptions={[]}
        count={0}
        rowsPerPage={0}
        page={0}
        onPageChange={function (event: unknown, newPage: number): void {
          throw new Error("Function not implemented.");
        }}
        onRowsPerPageChange={function (event: SelectChangeEvent): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const datatableFooter = screen.getByTestId("DatatableFooter");

    expect(datatableFooter).toBeInTheDocument();
  });
});
