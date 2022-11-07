import React from "react";
import List from "@mui/material/List";
import { PersonAdd } from "@mui/icons-material";

import { CustomNavListItem } from "../CustomNavListItem";
import "./CustomersNav.scss";

interface CustomersNavProps {}

function CustomersNav({}: CustomersNavProps): JSX.Element {
  return (
    <div className="CustomersNav" data-testid="CustomersNav">
      <h3 className="section-title">Customers</h3>
      <List>
        <CustomNavListItem displayText={"Users"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Guarantors"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Loans"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Decision Models"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Savings"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Loan Requests"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Whitelist"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Karma"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
      </List>
    </div>
  );
}

export { CustomersNav };
