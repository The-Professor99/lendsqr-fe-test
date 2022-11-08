import React from "react";
import List from "@mui/material/List";

import {
  twoUsersIcon,
  groupIcon,
  moneyBagIcon,
  handshakeIcon,
  piggyBankIcon,
  giveCashIcon,
  userConfirmIconFilled,
  userDeleteIconFilled,
} from "assets";
import { CustomNavListItem } from "../CustomNavListItem";
import "./CustomersNav.scss";

interface CustomersNavProps {}

function CustomersNav({}: CustomersNavProps): JSX.Element {
  return (
    <div className="CustomersNav" data-testid="CustomersNav">
      <h3 className="section-title">Customers</h3>
      <List>
        <CustomNavListItem displayText={"Users"} linkUrl={"#!"}>
          <img src={twoUsersIcon} alt="users Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Guarantors"} linkUrl={"#!"}>
          <img src={groupIcon} alt="group Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Loans"} linkUrl={"#!"}>
          <img src={moneyBagIcon} alt="money bag Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Decision Models"} linkUrl={"#!"}>
          <img src={handshakeIcon} alt="handshake Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Savings"} linkUrl={"#!"}>
          <img src={piggyBankIcon} alt="piggybank Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Loan Requests"} linkUrl={"#!"}>
          <img src={giveCashIcon} alt="give cash Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Whitelist"} linkUrl={"#!"}>
          <img
            src={userConfirmIconFilled}
            alt="user confirmed Icon"
            className="svgIcon"
          />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Karma"} linkUrl={"#!"}>
          <img
            src={userDeleteIconFilled}
            alt="user delete Icon"
            className="svgIcon"
          />
        </CustomNavListItem>
      </List>
    </div>
  );
}

export { CustomersNav };
