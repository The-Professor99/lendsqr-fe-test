import React from "react";
import { Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar, Notifications, AccountMenu } from "components";
import { lendsqrLogo } from "assets";
import "./TopBar.scss";

interface TopBarProps {}

function TopBar({}: TopBarProps): JSX.Element {
  return (
    <div className="TopBar" data-testid="TopBar">
      <Box>
        <Paper elevation={12}>
          <header className="logo-container">
            <img src={lendsqrLogo} alt="Lendsqr Logo" />
          </header>
          <SearchBar />
          <Link to="#!">Docs</Link>
          <Notifications />
          <AccountMenu />
        </Paper>
      </Box>
    </div>
  );
}

export { TopBar };
