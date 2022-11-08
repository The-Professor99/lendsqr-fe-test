import React from "react";
import { Outlet } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <main className="App">
      <div className="app-outlet-container">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
