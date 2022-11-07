import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar, TopBar } from "components";
import "./HomeLayout.scss";

function HomeLayout() {
  return (
    <div className="HomeLayout" data-testid="HomeLayout">
      <div className="topbar-container">
        <TopBar />
      </div>
      <div className="home-layout-sub">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="home-outlet-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { HomeLayout };
