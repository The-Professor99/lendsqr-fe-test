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
  linkUrl: string;
}

function CustomListItem({
  children,
  displayText,
  linkUrl,
}: CustomListItemProps): JSX.Element {
  return (
    <div className="CustomListItem" data-testid="CustomListItem">
      <Link to={linkUrl}>
        <ListItem className="CustomNavListItem" data-testid="CustomNavListItem">
          <ListItemButton>
            <ListItemIcon>{children}</ListItemIcon>
            <ListItemText primary={displayText} />
          </ListItemButton>
        </ListItem>
      </Link>
    </div>
  );
}

export { CustomListItem };
