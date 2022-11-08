import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserDetailsTabs } from "./UserDetailsTabs";

describe("<UserDetailsTabs />", () => {
  test("it should mount", () => {
    render(
      <UserDetailsTabs
        tabValue={""}
        handleChange={function (
          event: React.SyntheticEvent<Element, Event>,
          newValue: string
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const userDetailsTabs = screen.getByTestId("UserDetailsTabs");

    expect(userDetailsTabs).toBeInTheDocument();
  });
});
