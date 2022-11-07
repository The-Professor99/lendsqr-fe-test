import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { OrganizationSwitch } from "./OrganizationSwitch";

describe("<OrganizationSwitch />", () => {
  test("it should mount", () => {
    render(<OrganizationSwitch />);

    const organizationSwitch = screen.getByTestId("OrganizationSwitch");

    expect(organizationSwitch).toBeInTheDocument();
  });
});
