import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

import "./CustomListItem.scss";

interface CustomListItemProps {
  children: JSX.Element;
  displayText: string;
  linkUrl?: string;
  clickAction?: () => void;
}

function CustomListItem({
  children,
  displayText,
  linkUrl = "#!",
  clickAction,
}: CustomListItemProps): JSX.Element {
  return (
    <div className="CustomListItem" data-testid="CustomListItem">
      {clickAction ? ( // if a clickAction is defined, it takes precedence over linkUrl
        <ListItem
          className="CustomNavListItem"
          data-testid="CustomNavListItem"
          onClick={clickAction}
        >
          <ListItemButton>
            <ListItemIcon>{children}</ListItemIcon>
            <ListItemText primary={displayText} />
          </ListItemButton>
        </ListItem>
      ) : (
        <Link to={linkUrl}>
          <ListItem
            className="CustomNavListItem"
            data-testid="CustomNavListItem"
          >
            <ListItemButton>
              <ListItemIcon>{children}</ListItemIcon>
              <ListItemText primary={displayText} />
            </ListItemButton>
          </ListItem>
        </Link>
      )}
    </div>
  );
}

export { CustomListItem };
