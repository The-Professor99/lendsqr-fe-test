import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UsersCountCards } from "./UsersCountCards";

import { renderWithProvider } from "_helpers";
describe("<UsersCountCards />", () => {
  test("it should mount", () => {
    renderWithProvider(
      <UsersCountCards
        children={<div></div>}
        title={""}
        count={""}
        avatarBG={""}
      />
    );

    const usersCountCards = screen.getByTestId("UsersCountCards");

    expect(usersCountCards).toBeInTheDocument();
  });
});
