import React from "react";
import DataTable, { TableColumn, TableRow } from "react-data-table-component";
import { Paper, CircularProgress } from "@mui/material";

import { OptionsPopover } from "components";
import { UserProfile } from "_models";
import { DatatableHeader } from "./DatatableHeader";
import { DatatableRows } from "./DatatableRows";
import "./UsersTable.scss";

interface UsersTableProps {
  data: UserProfile[];
  loading: boolean;
  error: boolean;
}
interface CustomDataTableProps {
  data: UserProfile[];
  loading: boolean;
}

function UsersTable({ data, loading, error }: UsersTableProps): JSX.Element {
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

  const headerTitles = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
    "",
  ];

  const CustomDataTable = ({ data, loading }: CustomDataTableProps) => {
    return (
      <Paper className="CustomDataTable">
        <div role="table" aria-label="Users table">
          <div role="rowgroup">
            <div className="datatable-headers-container" role="row">
              <DatatableHeader headerTitles={headerTitles} />;
            </div>
          </div>
          <>
            {loading ? (
              <div className="loading-spinner-container">
                <CircularProgress />{" "}
              </div>
            ) : (
              <div role="rowgroup">
                <DatatableRows data={data} />
              </div>
            )}
            {!loading && error && (
              <strong className="errorMessage">
                Failed to fetch data. Please Refresh the page
              </strong>
            )}
          </>
        </div>
      </Paper>
    );
  };

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

      <CustomDataTable
        data={Array.isArray(data) ? data : ([] as UserProfile[])}
        loading={loading}
      />
    </div>
  );
}

export { UsersTable };
