import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";

import "./UsersCountCards.scss";

interface UsersCountCardsProps {
  children: JSX.Element;
  title: string;
  count: string;
  avatarBG?: string;
}

function UsersCountCards({
  children,
  title,
  count,
  avatarBG = "rgba(223, 24, 255, 0.1)",
}: UsersCountCardsProps): JSX.Element {
  return (
    <div className="UsersCountCards" data-testid="UsersCountCards">
      <Card sx={{ minWidth: 240 }} elevation={4}>
        <CardHeader
          avatar={
            <Avatar aria-label="avatar" style={{ background: avatarBG }}>
              {children}
            </Avatar>
          }
        />
        <CardContent>
          <Typography>{title}</Typography>
          <Typography>{count}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export { UsersCountCards };
