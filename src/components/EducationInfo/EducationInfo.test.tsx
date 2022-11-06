import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { EducationInfo } from "./EducationInfo";
import { Education } from "_models";

describe("<EducationInfo />", () => {
  test("it should mount", () => {
    render(<EducationInfo educationDetails={{} as Education} />);

    const educationInfo = screen.getByTestId("EducationInfo");

    expect(educationInfo).toBeInTheDocument();
  });
});
