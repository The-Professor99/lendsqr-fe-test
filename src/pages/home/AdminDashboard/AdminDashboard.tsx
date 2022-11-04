import React, { useEffect } from "react";
import "./AdminDashboard.scss";

function AdminDashboard() {
  useEffect(() => {
    document.title = "Lendsqr - Admin Dashboard";
  }, []);

  return (
    <div className="AdminDashboard" data-testid="AdminDashboard">
      AdminDashboard Component
    </div>
  );
}

export { AdminDashboard };
