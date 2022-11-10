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
  className?: string;
}

function CustomNavListItem({
  children,
  displayText,
  linkUrl = "#!",
  clickAction,
  className,
}: CustomNavListItemProps): JSX.Element {
  return (
    <div className="CustomNavListItem" data-testid="CustomNavListItem">
      {clickAction ? ( // if a clickAction is defined, it takes precedence over linkUrl
        <ListItem className="CustomNavListItem" onClick={clickAction}>
          <ListItemButton>
            <ListItemIcon>{children}</ListItemIcon>
            <ListItemText primary={displayText} className="desktop-only" />
          </ListItemButton>
          <div className="active-display"></div>
        </ListItem>
      ) : (
        <NavLink to={linkUrl} className={className}>
          <ListItem className="CustomNavListItem">
            <ListItemButton>
              <ListItemIcon>{children}</ListItemIcon>
              <ListItemText primary={displayText} className="desktop-only" />
            </ListItemButton>
            <div className="active-display"></div>
          </ListItem>
        </NavLink>
      )}
    </div>
  );
}

export { CustomNavListItem };
