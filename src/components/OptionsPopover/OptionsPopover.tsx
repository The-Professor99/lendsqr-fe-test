import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

import {
  viewIcon,
  userDeleteIconOutlined,
  userConfirmIconOutlined,
} from "assets";
import "./OptionsPopover.scss";
import appRoutes from "routes";

interface OptionsPopoverProps {
  userId: string;
}

function OptionsPopover({ userId }: OptionsPopoverProps): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "options-popover" : undefined;

  return (
    <div className="OptionsPopover" data-testid="OptionsPopover">
      <div>
        <IconButton
          aria-controls={open ? "options-popover" : undefined}
          aria-haspopup="true"
          aria-describedby={id}
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVert />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <List>
            <Link to={`${appRoutes.UserDetails.path}/${userId}`}>
              <ListItemButton>
                <ListItemIcon>
                  <img src={viewIcon} alt="view icon" className="svgIcon" />
                </ListItemIcon>
                <ListItemText primary="View Details" />
              </ListItemButton>
            </Link>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={userDeleteIconOutlined}
                  alt="view icon"
                  className="svgIcon"
                />
              </ListItemIcon>
              <ListItemText primary="Blacklist User" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={userConfirmIconOutlined}
                  alt="view icon"
                  className="svgIcon"
                />
              </ListItemIcon>
              <ListItemText primary="Activate User" />
            </ListItemButton>
          </List>
        </Popover>
      </div>
    </div>
  );
}

export { OptionsPopover };
