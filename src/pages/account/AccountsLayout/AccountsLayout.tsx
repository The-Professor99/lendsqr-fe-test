import React from "react";
import { Outlet } from "react-router-dom";

import { lendsqrLogo, accountPageImage } from "assets";
import "./AccountsLayout.scss";

function AccountsLayout() {
  return (
    <div className="AccountsLayout" data-testid="AccountsLayout">
      <header className="logo-container">
        <img src={lendsqrLogo} alt="Lendsqr Logo" />
      </header>
      <div className="al-container">
        <div className="visual-part left-container">
          <div className="image-container">
            <img
              src={accountPageImage}
              alt="A cartoonified person entering through a door"
            />
          </div>
        </div>
        <div className="accounts-outlet-container right-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { AccountsLayout };
