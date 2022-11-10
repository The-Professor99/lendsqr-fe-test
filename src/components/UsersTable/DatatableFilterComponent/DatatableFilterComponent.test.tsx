import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DatatableFilterComponent } from "./DatatableFilterComponent";
import { FilterValuesProps } from "_models";

import { renderWithProvider } from "_helpers";

describe("<DatatableFilterComponent />", () => {
  test("it should mount", () => {
    renderWithProvider(
      <DatatableFilterComponent
        anchorEl={null}
        handleCloseFilter={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const datatableFilterComponent = screen.getByTestId(
      "DatatableFilterComponent"
    );

    expect(datatableFilterComponent).toBeInTheDocument();
  });
});
