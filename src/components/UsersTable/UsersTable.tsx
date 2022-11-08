import React from "react";
import DataTable, { TableColumn, TableRow } from "react-data-table-component";

import { OptionsPopover } from "components";
import { UserProfile } from "_models";
import "./UsersTable.scss";

interface UsersTableProps {
  data: UserProfile[];
  loading: boolean;
}

function UsersTable({ data, loading }: UsersTableProps): JSX.Element {
  const statusArray = ["Inactive", "Pending", "Backlisted"];
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
    <div className="UsersTable" data-testid="UsersTable">
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
        pagination
      />
    </div>
  );
}

export { UsersTable };
