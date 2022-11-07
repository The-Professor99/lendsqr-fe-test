import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import { PersonAdd } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { CustomListItem } from "components";
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
        Settings
        <List>
          <CustomListItem displayText={"Preferences"} linkUrl={"#!"}>
            <PersonAdd />
          </CustomListItem>
          <CustomListItem displayText={"Fees and Pricing"} linkUrl={"#!"}>
            <PersonAdd />
          </CustomListItem>
          <CustomListItem displayText={"Audit Logs"} linkUrl={"#!"}>
            <PersonAdd />
          </CustomListItem>

          <Divider />
          <CustomListItem displayText={"Logout"} clickAction={handleLogout}>
            <PersonAdd />
          </CustomListItem>
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
