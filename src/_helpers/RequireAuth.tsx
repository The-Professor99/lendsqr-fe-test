import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { accountService } from "_services";

interface RequireAuthProps {
  children: JSX.Element;
}

function RequireAuth({ children }: RequireAuthProps): JSX.Element {
  const location = useLocation();
  const user = accountService.userValue;

  if (!user.verified) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/account/login" state={{ from: location }} />;
  }

  // authorized so return child components
  return children;
}

export { RequireAuth };
