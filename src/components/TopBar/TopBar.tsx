import React from "react";
import { Box, Paper, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import { SearchBar, Notifications, AccountMenu } from "components";
import { lendsqrLogo } from "assets";
import "./TopBar.scss";

interface TopBarProps {
  handleDrawerToggle: () => void;
}

function TopBar({ handleDrawerToggle }: TopBarProps): JSX.Element {
  return (
    <div className="TopBar" data-testid="TopBar">
      <Box>
        <Paper elevation={12}>
          <div className="NavbarDrawer lg-none" data-testid="NavbarDrawer">
            <IconButton
              size="large"
              aria-label="app menu bar"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Link to="/" className="logo-container">
            <img src={lendsqrLogo} alt="Lendsqr Logo" className="logo-img" />
          </Link>
          <div className="searchbar-container md-none">
            <SearchBar />
          </div>
          <div className="topbar-right-container md-none">
            <Link to="#!" className="docs-link">
              Docs
            </Link>
            <Notifications />
            <AccountMenu />
          </div>
          <div className="lg-none">
            <Notifications />
          </div>
        </Paper>
      </Box>
    </div>
  );
}

export { TopBar };
