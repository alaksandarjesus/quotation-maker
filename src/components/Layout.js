import { Outlet } from "react-router-dom";
import React from "react";

function Layout() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="navbar-expand-lg">
            <div className="header"><h1>Quotation Maker</h1></div>
            <Outlet  />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;