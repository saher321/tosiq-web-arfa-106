import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Recipes from './pages/Recipes'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/recipes/:id' element={<Recipes />} />
    </Routes>
  )
}

export default App