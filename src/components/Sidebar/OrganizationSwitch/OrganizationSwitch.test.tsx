import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { OrganizationSwitch } from "./OrganizationSwitch";

import { renderWithProvider } from "_helpers";
describe("<OrganizationSwitch />", () => {
  test("it should mount", () => {
    const { container } = renderWithProvider(<OrganizationSwitch />);

    const organizationSwitch = container.querySelector(".OrganizationSwitch");

    expect(organizationSwitch).toBeInTheDocument();
  });
});
