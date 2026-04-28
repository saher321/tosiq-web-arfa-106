import React from 'react'

const TextField = (props) => {
    const {type = "text", classes, hint, ...otherProps} = props
  return (
    <input 
        {...otherProps}
        className={`py-2 px-2 rounded-lg border border-gray-200 bg-gray-100 ${classes ?? ''}`}
        type={type}
        placeholder={hint}
    />
  )
}

export default TextField