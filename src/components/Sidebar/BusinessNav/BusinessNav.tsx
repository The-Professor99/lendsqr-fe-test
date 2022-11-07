import React from "react";
import List from "@mui/material/List";
import { PersonAdd } from "@mui/icons-material";

import { CustomNavListItem } from "../CustomNavListItem";
import "./BusinessNav.scss";

interface BusinessNavProps {}

function BusinessNav({}: BusinessNavProps): JSX.Element {
  return (
    <div className="BusinessNav" data-testid="BusinessNav">
      <h3 className="section-title">Businesses</h3>
      <List>
        <CustomNavListItem displayText={"Organization"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Loan Products"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Savings Products"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Fees and Charges"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Transactions"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Services"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Service Account"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Settlements"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Reports"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomNavListItem>
      </List>
    </div>
  );
}

export { BusinessNav };
