import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserDetailsOverview } from "./UserDetailsOverview";
import { UserProfile } from "_models";
import { renderWithProvider } from "_helpers";

describe("<UserDetailsOverview />", () => {
  test("it should mount", () => {
    renderWithProvider(
      <UserDetailsOverview
        data={{} as UserProfile}
        loading={false}
        error={false}
      />
    );

    const userDetailsOverview = screen.getByTestId("UserDetailsOverview");

    expect(userDetailsOverview).toBeInTheDocument();
  });

  it("loading", () => {
    const { container } = renderWithProvider(
      <UserDetailsOverview
        data={{} as UserProfile}
        loading={true}
        error={false}
      />
    );
    const content = container.querySelector(".loading-spinner-container");
    expect(content?.innerHTML).toBeTruthy();
  });

  it("error", () => {
    const { container } = renderWithProvider(
      <UserDetailsOverview
        data={{} as UserProfile}
        loading={false}
        error={true}
      />
    );
    const content = container.querySelector(".errorMessage");
    expect(content?.innerHTML).toBeTruthy();
  });

  it("renders data", () => {
    const data = {
      createdAt: "26th June, 2020",
      orgName: "org 1",
      userName: "user 1",
      email: "t@gmail.com",
      phoneNumber: "934",
      lastActiveDate: "25th June, 2021",
      profile: {
        firstName: "Test",
        lastName: "Last",
        phoneNumber: "093",
        avatar: "https://url.com",
        gender: "Male",
        bvn: "123",
        address: "address 1",
        currency: "naira",
      },
      guarantor: {
        firstName: "Jude",
        lastName: "Last",
        phoneNumber: "343",
        gender: "Female",
        address: "address 2",
      },
      accountBalance: "890",
      accountNumber: "38948",
      socials: {
        facebook: "facebook ",
        instagram: "insta",
        twitter: "twitter",
      },
      education: {
        level: "100",
        employmentStatus: "employed",
        sector: "tech",
        duration: "3years",
        officeEmail: "f@yahoo.com",
        monthlyIncome: ["50", "200"],
        loanRepayment: "50",
      },
      id: "5",
    };
    const { container } = renderWithProvider(
      <UserDetailsOverview data={data} loading={false} error={true} />
    );
    const profileName = container.querySelector(".profile-name");
    expect(profileName?.innerHTML).toEqual(
      data.profile.firstName + " " + data.profile.lastName
    );
  });
});
