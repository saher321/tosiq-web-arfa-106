import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import DeptList from './pages/department/DeptList'
import StdList from './pages/student/StdList'
import AddDept from './pages/department/AddDept'
import EditDept from './pages/department/EditDept'

const App = () => {
  const PREFIX = "/admin"
  return (
    <Routes>
      <Route path={`${PREFIX}/dashboard`} index={true} element={<Dashboard />}/>
      <Route path={`${PREFIX}/departments`} element={<DeptList />}/>
      <Route path={`${PREFIX}/departments/create`} element={<AddDept />}/>
      <Route path={`${PREFIX}/departments/edit/:id`} element={<EditDept />}/>
      <Route path={`${PREFIX}/students`} element={<StdList />}/>
    </Routes>
  )
}

export default App