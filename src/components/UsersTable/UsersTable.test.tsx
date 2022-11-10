import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UsersTable } from "./UsersTable";
import { UserProfile } from "_models";

import { renderWithProvider } from "_helpers";

describe("<UsersTable />", () => {
  test("it should mount", () => {
    renderWithProvider(
      <UsersTable data={[] as UserProfile[]} loading={false} error={false} />
    );

    const usersTable = screen.getByTestId("UsersTable");

    expect(usersTable).toBeInTheDocument();
  });

  it("loading", () => {
    const { container } = renderWithProvider(
      <UsersTable data={[] as UserProfile[]} loading={true} error={false} />
    );
    const content = container.querySelector(".loading-spinner-container");
    expect(content?.innerHTML).toBeTruthy();
  });

  it("error", () => {
    const { container } = renderWithProvider(
      <UsersTable data={[] as UserProfile[]} loading={false} error={true} />
    );
    const content = container.querySelector(".errorMessage");
    expect(content?.innerHTML).toBeTruthy();
  });
});
