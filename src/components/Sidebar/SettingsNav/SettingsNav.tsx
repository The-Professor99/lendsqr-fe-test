import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import { PersonAdd } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { CustomNavListItem } from "../CustomNavListItem";
import { accountService } from "_services";
import appRoutes from "routes";
import {
  slidersIcon,
  badgePercent,
  clipboardIcon,
  tireIcon,
  logoutIcon,
} from "assets";
import "./SettingsNav.scss";

interface SettingsNavProps {}

function SettingsNav({}: SettingsNavProps): JSX.Element {
  const [backdrop, setBackdrop] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("You're about to log out. Continue?")) {
      setBackdrop(true);
      accountService
        .logout()
        .then(() => navigate({ pathname: appRoutes.Login.path }))
        .finally(() => setBackdrop(false));
    }
  };
  return (
    <>
      <div className="SettingsNav" data-testid="SettingsNav">
        <h3 className="section-title">Settings</h3>
        <List>
          <CustomNavListItem displayText={"Preferences"} linkUrl={"#!"}>
            <img src={slidersIcon} alt="slider Icon" className="svgIcon" />
          </CustomNavListItem>
          <CustomNavListItem displayText={"Fees and Pricing"} linkUrl={"#!"}>
            <img
              src={badgePercent}
              alt="badge percent Icon"
              className="svgIcon"
            />
          </CustomNavListItem>
          <CustomNavListItem displayText={"Audit Logs"} linkUrl={"#!"}>
            <img src={clipboardIcon} alt="clipboard Icon" className="svgIcon" />
          </CustomNavListItem>
          <CustomNavListItem displayText={"Systems Messages"} linkUrl={"#!"}>
            <img src={tireIcon} alt="settings Icon" className="svgIcon" />
          </CustomNavListItem>

          <Divider />
          <CustomNavListItem displayText={"Logout"} clickAction={handleLogout}>
            <img src={logoutIcon} alt="logout Icon" className="svgIcon" />
          </CustomNavListItem>
        </List>
      </div>

      <Backdrop sx={{ color: "#fff", zIndex: "1301" }} open={backdrop}>
        <CircularProgress color="inherit" className="spinner-loader" />
        Loging Out...
      </Backdrop>
    </>
  );
}

export { SettingsNav };
