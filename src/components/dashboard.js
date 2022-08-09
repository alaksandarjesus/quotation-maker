import React from 'react';
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <div> <nav className="navbar-expand-lg">
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" >Quotation Maker</Button>
            <div className="log">
              <Button color="inherit" onClick={() => {
                navigate("/login");
              }}>
                logout
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </nav></div>
      <div className="container-fluid ma">
        <div className="row">
          <div className="col-lg-2" >
            <div className="wrapper d-flex">
              <div className="sidebar">
                <div className="gpbt">
                  <Button variant="outlined" color="primary" >Dashboard</Button>
                  <Button variant="outlined" color="primary" >Customers</Button>
                  <Button variant="outlined" color="primary" >Vendors</Button>
                  <Button variant="outlined" color="primary" >Products</Button>
                  <Button variant="outlined" color="primary" >Projects</Button>
                  <Button variant="outlined" color="primary" >Quotation</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10">
            <Outlet />
          </div>
        </div>
      </div>

    </>

  )
}