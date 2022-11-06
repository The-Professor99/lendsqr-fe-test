import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SocialsInfo } from "./SocialsInfo";
import { Socials } from "_models";

describe("<SocialsInfo />", () => {
  test("it should mount", () => {
    render(<SocialsInfo socialsDetails={{} as Socials} />);

    const socialsInfo = screen.getByTestId("SocialsInfo");

    expect(socialsInfo).toBeInTheDocument();
  });
});
