import React from "react";
import "./UsersTable.scss";

interface UsersTableProps {}

function UsersTable({}: UsersTableProps): JSX.Element {
  return (
    <div className="UsersTable" data-testid="UsersTable">
      UsersTable Component
    </div>
  );
}

export { UsersTable };
