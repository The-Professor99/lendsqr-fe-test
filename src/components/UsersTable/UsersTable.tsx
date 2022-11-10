import React, { useState } from "react";
import { Paper, CircularProgress, SelectChangeEvent } from "@mui/material";
import { useSelector } from "react-redux";

import { UserProfile } from "_models";
import { DatatableHeader } from "./DatatableHeader";
import { DatatableRows } from "./DatatableRows";
import { DatatableFooter } from "./DatatableFooter";
import { DatatableFilterComponent } from "./DatatableFilterComponent";
import "./UsersTable.scss";
import { mainAppSelector } from "_redux";

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
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const { filterValues, searchTerm } = useSelector(mainAppSelector);

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
      setRowsPerPage(+event.target.value);
      setPage(1);
    };

    const handleShowFilter = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCloseFilter = () => {
      setAnchorEl(null);
    };

    const filteredItems = data.filter((item) => {
      return (
        item.userName
          .toLowerCase()
          .includes(filterValues.userName.toLowerCase()) &&
        item.email.toLowerCase().includes(filterValues.email.toLowerCase()) &&
        item.phoneNumber
          .toLowerCase()
          .includes(filterValues.phoneNumber.toLowerCase()) &&
        (item.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.createdAt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.orgName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    return (
      <>
        <Paper className="CustomDataTable">
          <div role="table" aria-label="Users table">
            <div role="rowgroup">
              <div className="datatable-headers-container" role="row">
                <DatatableHeader
                  headerTitles={headerTitles}
                  handleShowFilter={handleShowFilter}
                />
                ;
              </div>
            </div>
            <>
              {loading ? (
                <div className="loading-spinner-container">
                  <CircularProgress />{" "}
                </div>
              ) : (
                <div role="rowgroup">
                  <DatatableRows
                    data={filteredItems.slice(
                      (page - 1) * rowsPerPage,
                      page * rowsPerPage
                    )}
                  />
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
        <DatatableFooter
          rowsPerPageOptions={[10, 40, 100]}
          count={filteredItems.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <DatatableFilterComponent
          anchorEl={anchorEl}
          handleCloseFilter={handleCloseFilter}
        />
      </>
    );
  };

  return (
    <div className="UsersTable" data-testid="UsersTable">
      <CustomDataTable
        data={Array.isArray(data) ? data : ([] as UserProfile[])}
        loading={loading}
      />
    </div>
  );
}

export { UsersTable };
