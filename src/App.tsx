import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/auth/sign-in';
import Welcome from './pages/welcome';
import DashboardLayout from './layouts/dashboard.layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/dashboard' element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
