import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

import "./UserDetailsTabs.scss";

interface UserDetailsTabsProps {
  tabValue: string;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
}

function UserDetailsTabs({
  tabValue,
  handleChange,
}: UserDetailsTabsProps): JSX.Element {
  return (
    <div className="UserDetailsTabs" data-testid="UserDetailsTabs">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          aria-label="user-details-tabs"
          onChange={handleChange}
        >
          <Tab
            className="user-detail-tab"
            value="generalDetails"
            aria-controls="tabpanel-user-details"
            label="General Details"
          />
          <Tab
            className="user-detail-tab"
            value="documents"
            aria-controls="tabpanel-user-details"
            label="Documents"
          />
          <Tab
            className="user-detail-tab"
            value="bankDetails"
            aria-controls="tabpanel-user-details"
            label="Bank Details"
          />
          <Tab
            className="user-detail-tab"
            value="loans"
            aria-controls="tabpanel-user-details"
            label="Loans"
          />
          <Tab
            className="user-detail-tab"
            value="savings"
            aria-controls="tabpanel-user-details"
            label="Savings"
          />
          <Tab
            className="user-detail-tab"
            value="appSystem"
            aria-controls="tabpanel-user-detailss"
            label="App and System"
          />
        </Tabs>
      </Box>
    </div>
  );
}

export { UserDetailsTabs };
