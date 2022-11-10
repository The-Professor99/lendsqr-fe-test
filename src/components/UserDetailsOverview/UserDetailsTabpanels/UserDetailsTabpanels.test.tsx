import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserDetailsTabpanels } from "./UserDetailsTabpanels";
import { UserProfile } from "_models";

import { renderWithProvider } from "_helpers";
describe("<UserDetailsTabpanels />", () => {
  test("it should mount", () => {
    renderWithProvider(
      <UserDetailsTabpanels
        tabValue={""}
        data={{} as UserProfile}
        loading={false}
        error={false}
      />
    );

    const userDetailsTabpanels = screen.getByTestId("UserDetailsTabpanels");

    expect(userDetailsTabpanels).toBeInTheDocument();
  });
});
