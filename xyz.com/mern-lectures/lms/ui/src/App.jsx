import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import DeptList from './pages/department/DeptList'
import StdList from './components/student/StdList'

const App = () => {
  const PREFIX = "/admin"
  return (
    <Routes>
      <Route path={`${PREFIX}/dashboard`} element={<Dashboard />}/>
      <Route path={`${PREFIX}/departments`} element={<DeptList />}/>
      <Route path={`${PREFIX}/students`} element={<StdList />}/>
    </Routes>
  )
}

export default App