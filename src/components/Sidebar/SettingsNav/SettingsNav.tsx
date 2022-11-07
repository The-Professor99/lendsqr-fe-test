import React from "react";
import List from "@mui/material/List";
import { PersonAdd } from "@mui/icons-material";

import { CustomListItem } from "components";
import "./SettingsNav.scss";

interface SettingsNavProps {}

function SettingsNav({}: SettingsNavProps): JSX.Element {
  return (
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
      </List>
    </div>
  );
}

export { SettingsNav };
