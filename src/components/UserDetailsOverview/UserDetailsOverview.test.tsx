import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserDetailsOverview } from "./UserDetailsOverview";
import { UserProfile } from "_models";

describe("<UserDetailsOverview />", () => {
  test("it should mount", () => {
    render(<UserDetailsOverview data={{} as UserProfile} />);

    const userDetailsOverview = screen.getByTestId("UserDetailsOverview");

    expect(userDetailsOverview).toBeInTheDocument();
  });
});
