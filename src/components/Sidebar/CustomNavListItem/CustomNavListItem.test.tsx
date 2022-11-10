import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CustomNavListItem } from "./CustomNavListItem";

import { renderWithProvider } from "_helpers";
describe("<CustomNavListItem />", () => {
  test("it should mount", () => {
    renderWithProvider(
      <CustomNavListItem children={<div></div>} displayText={""} linkUrl={""} />
    );

    const customNavListItem = screen.getByTestId("CustomNavListItem");

    expect(customNavListItem).toBeInTheDocument();
  });
});
