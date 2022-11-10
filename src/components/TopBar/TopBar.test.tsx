import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TopBar } from "./TopBar";

import { renderWithProvider } from "_helpers";
describe("<TopBar />", () => {
  test("it should mount", () => {
    renderWithProvider(
      <TopBar
        handleDrawerToggle={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const topBar = screen.getByTestId("TopBar");

    expect(topBar).toBeInTheDocument();
  });
});
