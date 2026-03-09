import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipeDetails from './pages/RecipeDetails'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipes' element={<Recipes />} />

      {/* dynamic routing */}
      <Route path='/recipes/:id' element={<RecipeDetails />} />
    </Routes>
  )
}

export default App