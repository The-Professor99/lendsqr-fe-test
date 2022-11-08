import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UsersTable } from "./UsersTable";
import { UserProfile } from "_models";

describe("<UsersTable />", () => {
  test("it should mount", () => {
    render(<UsersTable data={[] as UserProfile[]} loading={false} />);

    const usersTable = screen.getByTestId("UsersTable");

    expect(usersTable).toBeInTheDocument();
  });
});
