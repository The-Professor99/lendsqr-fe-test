import React, { useEffect } from "react";

import { UsersCountTab, UsersTable } from "components";
import { useRemoteService } from "_helpers";
import { UserProfile } from "_models";
import "./AdminDashboard.scss";

function AdminDashboard() {
  const dataUrl =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

  useEffect(() => {
    document.title = "Lendsqr - Admin Dashboard";
  }, []);

  const { data, loading, error } = useRemoteService(
    dataUrl,
    [] as UserProfile[]
  );

  return (
    <section className="AdminDashboard" data-testid="AdminDashboard">
      <h2>Users</h2>
      <UsersCountTab />
      <UsersTable
        data={Array.isArray(data) ? data : []}
        loading={loading}
        error={error}
      />
    </section>
  );
}

export { AdminDashboard };
