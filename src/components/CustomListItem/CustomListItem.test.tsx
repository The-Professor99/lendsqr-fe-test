import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CustomListItem } from "./CustomListItem";

describe("<CustomListItem />", () => {
  test("it should mount", () => {
    render(
      <CustomListItem children={<div></div>} displayText={""} linkUrl={""} />
    );

    const customListItem = screen.getByTestId("CustomListItem");

    expect(customListItem).toBeInTheDocument();
  });
});
