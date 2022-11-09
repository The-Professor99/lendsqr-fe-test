import React from "react";
import { Popover, Select, MenuItem, TextField, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./DatatableFilterComponent.scss";

interface DatatableFilterComponentProps {
  anchorEl: HTMLElement | null;
  handleCloseFilter: () => void;
}

function DatatableFilterComponent({
  anchorEl,
  handleCloseFilter,
}: DatatableFilterComponentProps): JSX.Element {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const FilterForm = () => {
    return (
      <div className="FilterForm">
        <div className="filter-field">
          <label>Organization</label>
          <Select
            id="organization"
            IconComponent={KeyboardArrowDownIcon}
            placeholder="Select"
          >
            <MenuItem value="Organization">Organization</MenuItem>
          </Select>
        </div>
        <div className="filter-field">
          <label>Username</label>
          <TextField id="username" name="username" placeholder="User" />
        </div>
        <div className="filter-field">
          <label>Email</label>
          <TextField id="email" name="email" placeholder="Email" />
        </div>
        <div className="filter-field">
          <label>Date</label>
          <TextField
            id="date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="filter-field">
          <label>Status</label>
          <Select
            id="status"
            IconComponent={KeyboardArrowDownIcon}
            placeholder="Select"
          >
            <MenuItem value="Status">Status</MenuItem>
          </Select>
        </div>
        <div className="action-buttons-container">
          <Button variant="outlined">Reset</Button>
          <Button variant="outlined">Filter</Button>
        </div>
      </div>
    );
  };

  return (
    <div
      className="DatatableFilterComponent"
      data-testid="DatatableFilterComponent"
    >
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseFilter}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className="filter-component-popover"
      >
        <FilterForm />
      </Popover>
    </div>
  );
}

export { DatatableFilterComponent };
