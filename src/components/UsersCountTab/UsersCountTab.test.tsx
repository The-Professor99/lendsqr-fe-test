import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UsersCountTab } from "./UsersCountTab";

describe("<UsersCountTab />", () => {
  test("it should mount", () => {
    render(<UsersCountTab />);

    const usersCountTab = screen.getByTestId("UsersCountTab");

    expect(usersCountTab).toBeInTheDocument();
  });
});
