import React, { useEffect } from "react";
import "./UsersPage.scss";

function UsersPage() {
  useEffect(() => {
    document.title = "Lendsqr - Users Page";
  }, []);

  return (
    <div className="UsersPage" data-testid="UsersPage">
      UsersPage Component
    </div>
  );
}

export { UsersPage };
