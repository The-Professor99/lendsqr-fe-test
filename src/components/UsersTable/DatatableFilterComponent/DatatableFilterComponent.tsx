import React from "react";
import "./DatatableFilterComponent.scss";

interface DatatableFilterComponentProps {}

function DatatableFilterComponent({}: DatatableFilterComponentProps): JSX.Element {
  return (
    <div className="DatatableFilterComponent" data-testid="DatatableFilterComponent">
      DatatableFilterComponent Component
    </div>
  );
}

export { DatatableFilterComponent };
