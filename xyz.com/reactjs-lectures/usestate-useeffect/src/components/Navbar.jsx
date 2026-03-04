import React from 'react'

export const Navbar = () => {
  return (
    <div className='grid place-items-center'>
      <nav className='rounded shadow m-4 flex gap-4 bg-amber-200 p-4 w-fit'>
        <a href='#'>Home</a>
        <a href='#'>Recipes</a>
        <a href='#'>About</a>
      </nav>
    </div>
  )
}
