import React from "react";
import List from "@mui/material/List";
import { PersonAdd } from "@mui/icons-material";

import { CustomListItem } from "components";
import "./BusinessNav.scss";

interface BusinessNavProps {}

function BusinessNav({}: BusinessNavProps): JSX.Element {
  return (
    <div className="BusinessNav" data-testid="BusinessNav">
      Businesses
      <List>
        <CustomListItem displayText={"Organization"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomListItem>
        <CustomListItem displayText={"Loan Products"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomListItem>
        <CustomListItem displayText={"Savings Products"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomListItem>
      </List>
    </div>
  );
}

export { BusinessNav };
