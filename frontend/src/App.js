import React from 'react';
import './App.css';
import LoginPage from './pages/authPages/login/LoginPage';
import RegisterPage from './pages/authPages/register/registerPage';
import Dashboard from './pages/dashboard/dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import AlertNotification from './components/AlertNotification';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/register" element={<RegisterPage/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route  path="*" element={<Navigate to ="/dashboard"/>}/>
        
      </Routes>
      <AlertNotification/>

    </Router>

    
  );
}

export default App;
