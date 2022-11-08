import React from "react";
import { Tabs } from "@mui/material";

import { groupIcon, usersIcon, coinPaper, coinStack } from "assets";
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
        <UsersCountCards
          title="Users"
          count="2,453"
          avatarBG="rgba(223, 24, 255, 0.1)"
        >
          <img src={usersIcon} alt="users Icon" className="svgIcon" />
        </UsersCountCards>
        <UsersCountCards
          title="Active Users"
          count="2,453"
          avatarBG="rgba(87, 24, 255, 0.1)"
        >
          <img src={groupIcon} alt="user group Icon" className="svgIcon" />
        </UsersCountCards>
        <UsersCountCards
          title="Users With Loans"
          count="12,453"
          avatarBG="rgba(245, 95, 68, 0.1)"
        >
          <img src={coinPaper} alt="coin contract Icon" className="svgIcon" />
        </UsersCountCards>
        <UsersCountCards
          title="Users With Savings"
          count="102,453"
          avatarBG="rgba(255, 51, 102, 0.1)"
        >
          <img src={coinStack} alt="home Icon" className="svgIcon" />
        </UsersCountCards>
      </Tabs>
    </div>
  );
}

export { UsersCountTab };
