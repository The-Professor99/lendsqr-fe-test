import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GuarantorInfo } from "./GuarantorInfo";
import { Guarantor } from "_models";

import { renderWithProvider } from "_helpers";
describe("<GuarantorInfo />", () => {
  test("it should mount", () => {
    renderWithProvider(<GuarantorInfo guarantorDetails={{} as Guarantor} />);

    const guarantorInfo = screen.getByTestId("GuarantorInfo");

    expect(guarantorInfo).toBeInTheDocument();
  });
});
