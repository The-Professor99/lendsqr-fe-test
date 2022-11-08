import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserDetailsTabpanels } from "./UserDetailsTabpanels";
import { UserProfile } from "_models";

describe("<UserDetailsTabpanels />", () => {
  test("it should mount", () => {
    render(<UserDetailsTabpanels tabValue={""} data={{} as UserProfile} />);

    const userDetailsTabpanels = screen.getByTestId("UserDetailsTabpanels");

    expect(userDetailsTabpanels).toBeInTheDocument();
  });
});
