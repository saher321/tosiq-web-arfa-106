import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import DeptList from './pages/department/DeptList'
import StdList from './pages/student/StdList'
import AddDept from './pages/department/AddDept'
import EditDept from './pages/department/EditDept'
import AddStd from './pages/student/AddStd'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'

const App = () => {
  const PREFIX = "/admin"
  return (
    <Routes>

      <Route path={`/auth/signup`} element={<Signup />} />
      <Route path={`/auth/login`} element={<Login />} />
      <Route path={`/auth/forgot-password`} element={<ForgotPassword />} />
      <Route path={`/auth/reset-password`} element={<ResetPassword />} />

      <Route path={`${PREFIX}/dashboard`} index={true} element={<Dashboard />}/>
      <Route path={`${PREFIX}/departments`} element={<DeptList />}/>
      <Route path={`${PREFIX}/departments/create`} element={<AddDept />}/>
      <Route path={`${PREFIX}/departments/edit/:id`} element={<EditDept />}/>

      <Route path={`${PREFIX}/students`} element={<StdList />}/>
      <Route path={`${PREFIX}/students/create`} element={<AddStd />}/>

    </Routes>
  )
}

export default App