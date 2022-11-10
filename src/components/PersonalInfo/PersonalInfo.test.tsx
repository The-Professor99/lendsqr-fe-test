import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PersonalInfo } from "./PersonalInfo";
import { Profile } from "_models";
import { renderWithProvider } from "_helpers";
describe("<PersonalInfo />", () => {
  test("it should mount", () => {
    renderWithProvider(
      <PersonalInfo profileDetails={{} as Profile} email={""} />
    );

    const personalInfo = screen.getByTestId("PersonalInfo");

    expect(personalInfo).toBeInTheDocument();
  });
});
