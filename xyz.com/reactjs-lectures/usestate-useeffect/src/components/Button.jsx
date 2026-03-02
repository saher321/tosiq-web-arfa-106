import React from 'react'

const Button = ({title="title", func}) => {
  return (
    <button className="
        cursor-pointer focus:bg-blue-800 bg-blue-600 text-white p-2 border border-blue-400 rounded
    "
    onClick={func}
    >
        {title}
    </button>
  )
}

export default Button