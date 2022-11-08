import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { CustomersNav } from "./CustomersNav";
import { BusinessNav } from "./BusinessNav";
import { SettingsNav } from "./SettingsNav";
import { OrganizationSwitch } from "./OrganizationSwitch";
import { CustomNavListItem } from "./CustomNavListItem";
import { homeIcon } from "assets";
import "./Sidebar.scss";

interface SidebarProps {}

function Sidebar({}: SidebarProps): JSX.Element {
  return (
    <aside className="Sidebar" data-testid="Sidebar">
      <Box>
        <Paper>
          <OrganizationSwitch />
          <CustomNavListItem displayText={"Dashboard"} linkUrl={"/"}>
            <img src={homeIcon} alt="home Icon" className="svgIcon" />
          </CustomNavListItem>
          <CustomersNav />
          <BusinessNav />
          <SettingsNav />
        </Paper>
      </Box>
    </aside>
  );
}

export { Sidebar };
