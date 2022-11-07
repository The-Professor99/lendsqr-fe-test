import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PersonAdd from "@mui/icons-material/PersonAdd";

import { CustomersNav } from "./CustomersNav";
import { BusinessNav } from "./BusinessNav";
import { SettingsNav } from "./SettingsNav";
import { OrganizationSwitch } from "./OrganizationSwitch";
import { CustomNavListItem } from "./CustomNavListItem";
import { lendsqrLogo } from "assets";
import "./Sidebar.scss";

interface SidebarProps {}

function Sidebar({}: SidebarProps): JSX.Element {
  return (
    <aside className="Sidebar" data-testid="Sidebar">
      <Box>
        <Paper elevation={12} sx={{ width: 283 }}>
          <OrganizationSwitch />
          <CustomNavListItem displayText={"Dashboard"} linkUrl={"/"}>
            <PersonAdd />
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
