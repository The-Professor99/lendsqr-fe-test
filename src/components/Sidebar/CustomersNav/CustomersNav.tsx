import React from "react";
import List from "@mui/material/List";
import { PersonAdd } from "@mui/icons-material";

import { CustomListItem } from "components";
import "./CustomersNav.scss";

interface CustomersNavProps {}

function CustomersNav({}: CustomersNavProps): JSX.Element {
  return (
    <div className="CustomersNav" data-testid="CustomersNav">
      Customers
      <List>
        <CustomListItem displayText={"Users"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomListItem>
        <CustomListItem displayText={"Guarantors"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomListItem>
        <CustomListItem displayText={"Loans"} linkUrl={"#!"}>
          <PersonAdd />
        </CustomListItem>
      </List>
    </div>
  );
}

export { CustomersNav };
