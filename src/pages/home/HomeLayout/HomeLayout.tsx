import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "components";
import "./HomeLayout.scss";

function HomeLayout() {
  return (
    <div className="HomeLayout" data-testid="HomeLayout">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="home-outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export { HomeLayout };
