import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import DeptList from './pages/department/DeptList'
import StdList from './pages/student/StdList'
import AddDept from './pages/department/AddDept'

const App = () => {
  const PREFIX = "/admin"
  return (
    <Routes>
      <Route path={`${PREFIX}/dashboard`} element={<Dashboard />}/>
      <Route path={`${PREFIX}/departments`} element={<DeptList />}/>
      <Route path={`${PREFIX}/departments/create`} element={<AddDept />}/>
      <Route path={`${PREFIX}/students`} element={<StdList />}/>
    </Routes>
  )
}

export default App