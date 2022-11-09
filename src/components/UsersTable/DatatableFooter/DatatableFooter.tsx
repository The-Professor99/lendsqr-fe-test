import React from "react";
import { Pagination, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./DatatableFooter.scss";

interface DatatableFooterProps {
  rowsPerPageOptions: number[];
  count: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: SelectChangeEvent) => void;
}

function DatatableFooter({
  rowsPerPageOptions,
  count,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
}: DatatableFooterProps): JSX.Element {
  return (
    <div className="DatatableFooter" data-testid="DatatableFooter">
      <div className="select-box-container">
        Showing{" "}
        <Select
          id="rows-per-page"
          value={rowsPerPage.toString()}
          label="rows"
          onChange={onRowsPerPageChange}
          IconComponent={KeyboardArrowDownIcon}
        >
          {rowsPerPageOptions.map((option) => {
            return (
              <MenuItem value={option.toString()} key={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>{" "}
        out of {count}
      </div>

      <Pagination
        count={count}
        shape="rounded"
        siblingCount={0}
        boundaryCount={2}
        page={page}
        onChange={onPageChange}
      />
    </div>
  );
}

export { DatatableFooter };
