import React, { useState } from "react";
import {
  List,
  Collapse,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import {
  ExpandLess,
  StarBorder,
  ExpandMore,
  PersonAdd,
} from "@mui/icons-material";

import "./OrganizationSwitch.scss";

interface OrganizationSwitchProps {}

function OrganizationSwitch({}: OrganizationSwitchProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ pl: 4 }}>
        <ListItemIcon>
          <PersonAdd />
        </ListItemIcon>
        <ListItemText primary="Switch Organization" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText primary="Organization 1" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}

export { OrganizationSwitch };
