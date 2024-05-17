import React from 'react';
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Signin from './pages/auth/sign-in';
import Welcome from './pages/welcome';
import DashboardLayout from './layouts/dashboard.layout';
import Home from './pages/home';
import Students from './pages/students';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Signin />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path='students' element={<Students />} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
