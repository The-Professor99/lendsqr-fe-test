import React from "react";
import { Box, Divider } from "@mui/material";

import { CustomersNav } from "./CustomersNav";
import { BusinessNav } from "./BusinessNav";
import { SettingsNav } from "./SettingsNav";
import "./Sidebar.scss";

interface SidebarProps {}

function Sidebar({}: SidebarProps): JSX.Element {
  return (
    <div className="Sidebar" data-testid="Sidebar">
      Sidebar Component
      <Box sx={{ width: 250 }}>
        <CustomersNav />
        <BusinessNav />
        <SettingsNav />
      </Box>
    </div>
  );
}

export { Sidebar };
