import React from "react";
import { Tabs } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";

import { UsersCountCards } from "./UsersCountCards";
import "./UsersCountTab.scss";

interface UsersCountTabProps {}

function UsersCountTab({}: UsersCountTabProps): JSX.Element {
  return (
    <div className="UsersCountTab" data-testid="UsersCountTab">
      <Tabs
        variant="scrollable"
        value={false}
        aria-label="users count"
        allowScrollButtonsMobile
      >
        <UsersCountCards title="Users" count="2,453">
          <PersonAdd />
        </UsersCountCards>
        <UsersCountCards title="Active Users" count="2,453">
          <PersonAdd />
        </UsersCountCards>
        <UsersCountCards title="Users With Loans" count="12,453">
          <PersonAdd />
        </UsersCountCards>
        <UsersCountCards title="Users With Savings" count="102,453">
          <PersonAdd />
        </UsersCountCards>
      </Tabs>
    </div>
  );
}

export { UsersCountTab };
