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
            <PersonAdd />
          </CustomNavListItem>
          <CustomNavListItem displayText={"Fees and Pricing"} linkUrl={"#!"}>
            <PersonAdd />
          </CustomNavListItem>
          <CustomNavListItem displayText={"Audit Logs"} linkUrl={"#!"}>
            <PersonAdd />
          </CustomNavListItem>
          <CustomNavListItem displayText={"Systems Messages"} linkUrl={"#!"}>
            <PersonAdd />
          </CustomNavListItem>

          <Divider />
          <CustomNavListItem displayText={"Logout"} clickAction={handleLogout}>
            <PersonAdd />
          </CustomNavListItem>
        </List>
      </div>

      <Backdrop sx={{ color: "#fff", zIndex: "1301" }} open={backdrop}>
        <CircularProgress color="inherit" />
        Loging Out...
      </Backdrop>
    </>
  );
}

export { SettingsNav };
