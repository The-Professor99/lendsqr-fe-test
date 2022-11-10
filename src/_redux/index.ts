import { configureStore } from "@reduxjs/toolkit";

import { mainAppReducer } from "./main.slice";

export * from "./main.slice";

export const store = configureStore({
  reducer: {
    mainApp: mainAppReducer,
  },
});
