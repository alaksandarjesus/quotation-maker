import logo from './logo.svg';
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

function App() {
  const navigate = useNavigate()
  const [openModal,setOpenModal]=useState(false);
  const [mode, setMode] = useState("light")
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (

    <div>
      <AppBar position="static">
        <Toolbar  >
          {/* <Button color="inherit" onClick={() => { navigate('/') }}>Login</Button> */}
          <Button color="inherit" onClick={() => { navigate('/register') }}>person</Button>

          <div className="log">
            <Button color="inherit" onClick={() => {
          navigate("/login");
        }}>login</Button>
          </div>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/login" element={ <Login setOpenModal={setOpenModal} />} />
        <Route path="/register" element={<Dashboard />} />
      </Routes>
      


    </div>

  );
}

export default App;
