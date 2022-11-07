import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BusinessNav } from "./BusinessNav";

describe("<BusinessNav />", () => {
  test("it should mount", () => {
    render(<BusinessNav />);

    const businessNav = screen.getByTestId("BusinessNav");

    expect(businessNav).toBeInTheDocument();
  });
});
