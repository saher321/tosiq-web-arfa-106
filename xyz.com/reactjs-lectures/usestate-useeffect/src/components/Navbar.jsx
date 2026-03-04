import React from 'react'
import { Link } from 'react-router'

export const Navbar = () => {
  return (
    <div className='grid place-items-center'>
      <nav className='rounded shadow m-4 flex gap-4 bg-amber-200 p-4 w-fit'>
        <Link to='/'>Home</Link>
        <Link to='/recipes'>Recipes</Link>
        <Link to='#'>About</Link>
      </nav>
    </div>
  )
}
