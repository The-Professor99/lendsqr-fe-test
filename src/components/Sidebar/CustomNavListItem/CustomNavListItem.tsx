import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import "./CustomNavListItem.scss";

interface CustomNavListItemProps {
  children: JSX.Element;
  displayText: string;
  linkUrl?: string;
  clickAction?: () => void;
}

function CustomNavListItem({
  children,
  displayText,
  linkUrl = "#!",
  clickAction,
}: CustomNavListItemProps): JSX.Element {
  return (
    <div className="CustomNavListItem" data-testid="CustomNavListItem">
      {clickAction ? ( // if a clickAction is defined, it takes precedence over linkUrl
        <ListItem className="CustomNavListItem" onClick={clickAction}>
          <ListItemButton>
            <ListItemIcon>{children}</ListItemIcon>
            <ListItemText primary={displayText} className="desktop-only" />
          </ListItemButton>
        </ListItem>
      ) : (
        <NavLink to={linkUrl}>
          <ListItem className="CustomNavListItem">
            <ListItemButton>
              <ListItemIcon>{children}</ListItemIcon>
              <ListItemText primary={displayText} className="desktop-only" />
            </ListItemButton>
          </ListItem>
        </NavLink>
      )}
    </div>
  );
}

export { CustomNavListItem };
