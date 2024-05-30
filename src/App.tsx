import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Signin from './pages/auth/login/signin';
import Welcome from './pages/welcome';
import DashboardLayout from './layouts/dashboard.layout';
import Home from './pages/home';
import Students from './pages/students';
import Courses from './pages/courses';
import StudentDetails from './pages/students/student-details';
import Hostels from './pages/hostels';
import Guardians from './pages/guardians';
import Lecturers from './pages/lecturers';
import Signup from './pages/auth/register/signup';
import RegisterLayout from './layouts/register.layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/register' element={<RegisterLayout />}></Route>
      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path='students' element={<Students />} />
        <Route path='students-details' element={<StudentDetails />} />
        <Route path='courses' element={<Courses />} />
        <Route path='hostels' element={<Hostels />} />
        <Route path='guardians' element={<Guardians />} />
        <Route path='lecturers' element={<Lecturers />} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
