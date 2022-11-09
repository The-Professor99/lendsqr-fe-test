import React from "react";
import { Outlet } from "react-router-dom";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar, AccountMenu } from "components";
import { lendsqrLogo } from "assets";
import { Sidebar, TopBar } from "components";
import "./HomeLayout.scss";

function HomeLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="HomeLayout" data-testid="HomeLayout">
      <div className="topbar-container">
        <TopBar handleDrawerToggle={handleDrawerToggle} />
      </div>
      <div className="home-layout-sub">
        <div className="sidebar-container">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "75%",
              },
            }}
            className="drawer-sm"
          >
            <div className="topbar-items">
              <div className="d-flex">
                <Link to="/">
                  <img
                    src={lendsqrLogo}
                    alt="Lendsqr Logo"
                    className="logo-img"
                  />
                </Link>
                <AccountMenu />
              </div>
              <Link to="#!" className="docs-link">
                Docs
              </Link>
              <SearchBar />
            </div>
            <Sidebar />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
              },
            }}
            className="drawer-md"
            open
          >
            <Sidebar />
          </Drawer>
        </div>
        <div className="home-outlet-container">
          <div className="home-outlet-container-sub">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export { HomeLayout };
