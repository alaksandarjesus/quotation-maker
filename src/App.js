import Home from "./components/home";
import Layout from "./components/Layout";
import Login from "./components/login";
import Register from "./components/Register";
import Dashboard from "./components/dashboard";
import Forgotpassword from "./components/Forgotpassword";
import { ToastContainer } from 'react-toastify';
import Resetpassword from "./components/Resetpassword";
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div>


      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
        </Route>
        <Route path="/home" element={< Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
      </Routes>

      <ToastContainer autoclose={5000} />

    </div>

  );
}

export default App;
