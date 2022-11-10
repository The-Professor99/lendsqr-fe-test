import React from "react";
import { Popover, Select, MenuItem, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { mainAppActions } from "_redux";
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
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      orgName: "",
      userName: "",
      email: "",
      createdAt: "",
      phoneNumber: "",
      status: "",
    },
    onSubmit: (values) => {
      dispatch(mainAppActions.setFilterValues(values));
    },
  });

  const handleReset = () => {
    formik.resetForm();
    formik.handleSubmit();
  };

  const FilterForm = () => {
    return (
      <div className="FilterForm">
        <form onSubmit={formik.handleSubmit}>
          <div className="filter-field">
            <label>Organization</label>
            <Select
              id="organization"
              name="orgName"
              value={formik.values.orgName}
              onChange={formik.handleChange}
              IconComponent={KeyboardArrowDownIcon}
              placeholder="Select"
            >
              <MenuItem value="Organization">Organization</MenuItem>
            </Select>
          </div>
          <div className="filter-field">
            <label>Username</label>
            <TextField
              id="username"
              name="userName"
              placeholder="User"
              value={formik.values.userName}
              onChange={formik.handleChange}
            />
          </div>
          <div className="filter-field">
            <label>Email</label>
            <TextField
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email"
            />
          </div>
          <div className="filter-field">
            <label>Date</label>
            <TextField
              id="date"
              type="date"
              name="createdAt"
              value={formik.values.createdAt}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="filter-field">
            <label>Phone Number</label>
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
          </div>
          <div className="filter-field">
            <label>Status</label>
            <Select
              id="status"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              IconComponent={KeyboardArrowDownIcon}
              placeholder="Select"
            >
              <MenuItem value="Status">Pending</MenuItem>
            </Select>
          </div>
          <div className="action-buttons-container">
            <Button variant="outlined" type="button" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="contained" type="submit">
              Filter
            </Button>
          </div>
        </form>
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
        disableScrollLock={true}
      >
        <FilterForm />
      </Popover>
    </div>
  );
}

export { DatatableFilterComponent };
