import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UsersCountCards } from "./UsersCountCards";

describe("<UsersCountCards />", () => {
  test("it should mount", () => {
    render(<UsersCountCards children={<div></div>} title={""} count={""} avatarBG={""} />);

    const usersCountCards = screen.getByTestId("UsersCountCards");

    expect(usersCountCards).toBeInTheDocument();
  });
});
