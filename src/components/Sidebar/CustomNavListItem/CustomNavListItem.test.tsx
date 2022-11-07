import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CustomNavListItem } from "./CustomNavListItem";

describe("<CustomNavListItem />", () => {
  test("it should mount", () => {
    render(
      <CustomNavListItem children={<div></div>} displayText={""} linkUrl={""} />
    );

    const customNavListItem = screen.getByTestId("CustomNavListItem");

    expect(customNavListItem).toBeInTheDocument();
  });
});
