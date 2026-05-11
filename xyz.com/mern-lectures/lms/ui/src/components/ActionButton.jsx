import React from 'react'

const ActionButton = (props) => {
    const { text } = props
  return (
    <button className="cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-lg" >{text}</button>
  )
}

export default ActionButton