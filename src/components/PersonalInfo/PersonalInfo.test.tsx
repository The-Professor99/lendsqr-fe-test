import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PersonalInfo } from "./PersonalInfo";
import { Profile } from "_models";

describe("<PersonalInfo />", () => {
  test("it should mount", () => {
    render(<PersonalInfo profileDetails={{} as Profile} />);

    const personalInfo = screen.getByTestId("PersonalInfo");

    expect(personalInfo).toBeInTheDocument();
  });
});
