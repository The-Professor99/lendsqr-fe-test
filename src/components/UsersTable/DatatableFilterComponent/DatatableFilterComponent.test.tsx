import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DatatableFilterComponent } from "./DatatableFilterComponent";
import { FilterValuesProps } from "_models";

describe("<DatatableFilterComponent />", () => {
  test("it should mount", () => {
    render(
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
