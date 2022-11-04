import React from "react";
import { Outlet } from "react-router-dom";
import "./HomeLayout.scss";

function HomeLayout() {
  return (
    <div className="HomeLayout" data-testid="HomeLayout">
      HomeLayout Component
      <div className="home-outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export { HomeLayout };
