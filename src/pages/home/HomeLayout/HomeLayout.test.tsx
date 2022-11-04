import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { HomeLayout } from "./HomeLayout";

describe("<HomeLayout />", () => {
  test("it should mount", () => {
    render(<HomeLayout />);

    const homeLayout = screen.getByTestId("HomeLayout");

    expect(homeLayout).toBeInTheDocument();
  });
});
