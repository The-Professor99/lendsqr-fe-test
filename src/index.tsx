import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  AccountsLayout,
  Login,
  HomeLayout,
  AdminDashboard,
  UserDetails,
  UsersPage,
  NotFound,
} from "pages";
import { RequireAuth, configureFakeBackend } from "_helpers";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// setup fake backend. Only need to simulate login
// comment out when the simulated fake login functionality
// is no longer needed or when a real backend is built.
configureFakeBackend();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            element={
              <RequireAuth>
                <HomeLayout />
              </RequireAuth>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="user/:id" element={<UserDetails />} />
          </Route>
          <Route element={<AccountsLayout />}>
            <Route path="/account/login" element={<Login />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
