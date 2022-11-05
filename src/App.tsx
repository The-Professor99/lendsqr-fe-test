import React from "react";
import { Outlet } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="app-outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
