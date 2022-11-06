import React, { useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

import { OptionsPopover } from "components";
import { useRemoteService } from "_helpers";
import { UserProfile } from "_models";
import "./AdminDashboard.scss";

function AdminDashboard() {
  const dataUrl =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
  const statusArray = ["Inactive", "Pending", "Backlisted"];

  useEffect(() => {
    document.title = "Lendsqr - Admin Dashboard";
  }, []);

  const { data, loading, error } = useRemoteService(
    dataUrl,
    [] as UserProfile[]
  );

  const randomChoice = (arr: string[]) => {
    return arr[Math.floor(arr.length * Math.random())];
  };

  const columns: TableColumn<UserProfile>[] = [
    {
      name: "Organization",
      selector: (user) => user.orgName,
    },
    {
      name: "Username",
      selector: (user) => user.userName,
    },
    {
      name: "Email",
      selector: (user) => user.email,
    },
    {
      name: "Phone Number",
      selector: (user) => user.phoneNumber,
    },
    {
      name: "Date Joined",
      selector: (user) => user.createdAt,
    },
    {
      name: "Status",
      selector: () => randomChoice(statusArray), // placeholder for 'status' which
      // should come with user data but isn't
    },
    {
      sortable: false,
      cell: (user) => {
        return <OptionsPopover userId={user.id} />;
      },
    },
  ];

  return (
    <div className="AdminDashboard" data-testid="AdminDashboard">
      AdminDashboard Component
      <DataTable
        title="User's List"
        columns={columns}
        data={Array.isArray(data) ? data : []}
        striped
        highlightOnHover
        noDataComponent={
          <div style={{ marginBottom: "1rem" }}>No registered user</div>
        }
        progressPending={loading}
      />
    </div>
  );
}

export { AdminDashboard };
