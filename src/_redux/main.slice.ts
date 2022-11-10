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
    searchTerm: "",
  };
}

// reducer
function createReducers() {
  return {
    setFilterValues,
    setSearchTerm,
  };

  // reducer actions
  function setFilterValues(
    state: { filterValues: FilterValuesProps; searchTerm: string },
    action: { payload: FilterValuesProps }
  ) {
    state.filterValues = action.payload;
  }

  function setSearchTerm(
    state: { filterValues: FilterValuesProps; searchTerm: string },
    action: { payload: string }
  ) {
    state.searchTerm = action.payload;
  }
}

// state selector
export const mainAppSelector = createSelector(
  [(state) => state.mainApp.filterValues, (state) => state.mainApp.searchTerm],
  (filterValues, searchTerm) => ({
    filterValues,
    searchTerm,
  })
);
