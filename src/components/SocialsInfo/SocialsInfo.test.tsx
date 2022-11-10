import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SocialsInfo } from "./SocialsInfo";
import { Socials } from "_models";

import { renderWithProvider } from "_helpers";
describe("<SocialsInfo />", () => {
  test("it should mount", () => {
    renderWithProvider(<SocialsInfo socialsDetails={{} as Socials} />);

    const socialsInfo = screen.getByTestId("SocialsInfo");

    expect(socialsInfo).toBeInTheDocument();
  });
});
