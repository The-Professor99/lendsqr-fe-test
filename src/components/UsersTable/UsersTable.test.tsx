import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UsersTable } from "./UsersTable";

describe("<UsersTable />", () => {
  test("it should mount", () => {
    render(<UsersTable />);

    const usersTable = screen.getByTestId("UsersTable");

    expect(usersTable).toBeInTheDocument();
  });
});
