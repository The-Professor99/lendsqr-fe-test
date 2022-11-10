import { createSlice, createSelector } from "@reduxjs/toolkit";
import { FilterValuesProps } from "_models";

// create slice
const name = "mainApp";
const initialState = createInitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

// exports
export const mainAppActions = { ...slice.actions };
export const mainAppReducer = slice.reducer;

// initial state
function createInitialState() {
  return {
    filterValues: {
      orgName: "",
      userName: "",
      email: "",
      createdAt: "",
      phoneNumber: "",
      status: "",
    },
  };
}

// reducer
function createReducers() {
  return {
    setFilterValues,
  };

  // reducer actions
  function setFilterValues(
    state: { filterValues: FilterValuesProps },
    action: { payload: FilterValuesProps }
  ) {
    state.filterValues = action.payload;
  }
}

// state selector
export const mainAppSelector = createSelector(
  [(state) => state.mainApp.filterValues],
  (filterValues) => ({
    filterValues,
  })
);
