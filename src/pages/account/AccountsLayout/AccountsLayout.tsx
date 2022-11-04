import React from "react";
import { Outlet } from "react-router-dom";

import "./AccountsLayout.scss";

function AccountsLayout() {
  return (
    <div className="AccountsLayout" data-testid="AccountsLayout">
      AccountsLayout Component
      <div className="accounts-outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export { AccountsLayout };
