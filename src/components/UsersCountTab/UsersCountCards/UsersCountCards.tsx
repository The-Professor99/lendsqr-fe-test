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
}

function UsersCountCards({
  children,
  title,
  count,
}: UsersCountCardsProps): JSX.Element {
  return (
    <div className="UsersCountCards" data-testid="UsersCountCards">
      <Card sx={{ minWidth: 240 }} elevation={4}>
        <CardHeader avatar={<Avatar aria-label="recipe">{children}</Avatar>} />
        <CardContent>
          <Typography>{title}</Typography>
          <Typography>{count}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export { UsersCountCards };
