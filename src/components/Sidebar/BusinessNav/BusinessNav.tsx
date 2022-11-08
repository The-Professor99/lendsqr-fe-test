import React from "react";
import List from "@mui/material/List";

import { CustomNavListItem } from "../CustomNavListItem";
import {
  briefCaseIcon,
  giveCashIcon,
  bankIcon,
  coinsSolid,
  transactionsIcon,
  servicesIcon,
  userCog,
  scrollIcon,
  chartIcon,
} from "assets";
import "./BusinessNav.scss";

interface BusinessNavProps {}

function BusinessNav({}: BusinessNavProps): JSX.Element {
  return (
    <div className="BusinessNav" data-testid="BusinessNav">
      <h3 className="section-title">Businesses</h3>
      <List>
        <CustomNavListItem displayText={"Organization"} linkUrl={"#!"}>
          <img src={briefCaseIcon} alt="briefcase Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Loan Products"} linkUrl={"#!"}>
          <img src={giveCashIcon} alt="give cash Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Savings Products"} linkUrl={"#!"}>
          <img src={bankIcon} alt="bank Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Fees and Charges"} linkUrl={"#!"}>
          <img src={coinsSolid} alt="coins Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Transactions"} linkUrl={"#!"}>
          <img
            src={transactionsIcon}
            alt="transactions Icon"
            className="svgIcon"
          />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Services"} linkUrl={"#!"}>
          <img src={servicesIcon} alt="services Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Service Account"} linkUrl={"#!"}>
          <img src={userCog} alt="user settings Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Settlements"} linkUrl={"#!"}>
          <img src={scrollIcon} alt="scroll Icon" className="svgIcon" />
        </CustomNavListItem>
        <CustomNavListItem displayText={"Reports"} linkUrl={"#!"}>
          <img src={chartIcon} alt="chart Icon" className="svgIcon" />
        </CustomNavListItem>
      </List>
    </div>
  );
}

export { BusinessNav };
