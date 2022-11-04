import React, { useEffect } from "react";
import "./UserDetails.scss";

function UserDetails() {
  useEffect(() => {
    document.title = "Lendsqr - Profile";
  }, []);

  return (
    <div className="UserDetails" data-testid="UserDetails">
      UserDetails Component
    </div>
  );
}

export { UserDetails };
